 #!/bin/bash
Folder_A="./"  
for i in ${Folder_A}/*
do  
    extension=${i##*.}
    if [ "$extension" == "html" ]
    then 
    temp_file=`basename $i`  
    echo $temp_file  
    temp_directory=`basename $i .html`
    echo $temp_directory
    md_extension=".md"
    echo $md_extension
    md_file=$temp_directory$md_extension
    echo $md_file


    pandoc -f html --normalize --wrap=none -t markdown_github+backtick_code_blocks+autolink_bare_uris -o $md_file $temp_file 
    fi 
done 

