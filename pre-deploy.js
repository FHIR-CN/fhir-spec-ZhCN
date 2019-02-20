// udpate to latest built files of FHIR

const fs = require('fs')
const zlib = require('zlib')
const request = require('request')
const execSync = require('child_process').execSync

const themeconfPath = 'themes/FHIR/_config.yml'
const installPath = 'src/v2/guide/installation.md'
const themeconfig = fs.readFileSync(themeconfPath, 'utf-8')
const installation = fs.readFileSync(installPath, 'utf-8')

// get latest FHIR version
console.log(`Checking latest FHIR version...`)
const localVersion = themeconfig.match(/FHIR_version: (.*)/)[1]
const version = execSync('npm view FHIR version').toString().trim()

if (localVersion === version) {
  console.log(`Version is up-to-date.`)
  process.exit(0)
}

console.log(`Latest version: ${version}. Downloading dist files...`)

// replace version in theme config
fs.writeFileSync(
  themeconfPath,
  themeconfig.replace(/FHIR_version: .*/, 'FHIR_version: ' + version)
)

// grab it from unpkg
Promise.all([
  download(`FHIR`),
  download(`FHIR.min.js`)
]).then(([ devSize, prodSize ]) => {
  // replace installation page version and size
  fs.writeFileSync(
    installPath,
    installation
      .replace(/FHIR_version: .*/, 'FHIR_version: ' + version)
      .replace(/gz_size:.*/g, `gz_size: "${prodSize}"`)
      .replace(/\/FHIR@[\d\.]+\//g, `/FHIR@${version}/`)
  )
  console.log(`\nSuccessfully updated FHIR version and gzip file size.\n`)
}).catch(err => {
  console.error(err)
  process.exit(1)
})

function download (file) {
  return new Promise((resolve, reject) => {
    request({
      url: `http://unpkg.com/FHIR@${version}/dist/${file}`,
      encoding: null
    }, (err, res, body) => {
      if (err) {
        return reject(err)
      }
      if (res.statusCode != 200) {
        return reject(
          `unexpected response code when downloading from unpkg: ${res.statusCode}` +
          `\n${body.toString()}`
        )
      }
      fs.writeFile(`themes/FHIR/source/js/${file}`, body, err => {
        if (err) return reject(err)
        zlib.gzip(body, (err, zipped) => {
          if (err) return reject(err)
          resolve((zipped.length / 1024).toFixed(2))
        })
      })
    })
  })
}
