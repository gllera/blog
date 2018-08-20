HUGO_VERSION=0.47.1
HUGO_BINARY=hugo_extended_${HUGO_VERSION}_Linux-64bit.deb

git config --global user.email "${GIT_EMAIL}"
git config --global user.name "${GIT_USERNAME}"
git submodule sync 
git submodule update --init

wget     -qO /tmp/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${HUGO_BINARY}
sudo dpkg -i /tmp/hugo.deb
hugo

npm start

cd dist
git commit -am "Build from commit ${CIRCLE_SHA1}"
git push