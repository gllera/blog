export PATH="$PWD/.cache/node/bin:$PWD/.cache/hugo:$PATH"
export NPM_CONFIG_CACHE="$PWD/.cache/.npm"

if [ -d ".cache" ]; then 
    echo "Using cache"
else
    echo "Updating cache"

    mkdir -p .cache/hugo
    wget -qO /tmp/__hugo.tar.gz https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz
    tar  -xf /tmp/__hugo.tar.gz -C /tmp
    mv /tmp/hugo .cache/hugo

    wget -qO /tmp/__node.tar.gz https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.gz
    tar  -xf /tmp/__node.tar.gz -C /tmp
    mv /tmp/node* .cache/node
fi

hugo
rm -rf public/post

git clone --depth 1 --single-branch https://${GIT_USERNAME}:${GIT_TOKEN}@github.com/gllera/gllera.github.io dist

npm ci
npm start

cd dist 
if [[ `git status --porcelain` ]]; then
    git config --global user.email "${GIT_EMAIL}" 
    git config --global user.name "${GIT_USERNAME}"

    git add .
    git commit -m "Build from commit ${CI_COMMIT_SHA}"
    git push    
else
    echo "No changes found"
fi
