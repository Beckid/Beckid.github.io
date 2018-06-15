#!/bin/sh
# Checks that all text files end with a newline.

ret=0

for filename in $(git grep --cached -I -l -e '' -- ':/'); do
    if [ "$(tail -c 1 "./$filename")" != '' ]; then
        echo "ERROR:$filename: no newline at EOF."
        ret=1
    fi
done

exit $ret
