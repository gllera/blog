cd dist 
if [[ `git status --porcelain` ]]; then
    git commit -am "Build from commit ${CIRCLE_SHA1}"
    git push    
else
    echo "No changes found"
fi
