cd dist 
if [[ `git status --porcelain` ]]; then
    git add .
    git commit -m "Build from commit ${CI_COMMIT_SHA}"
    git push    
else
    echo "No changes found"
fi
