HUGO_VERSION=0.47.1
HUGO_BINARY=hugo_extended_${HUGO_VERSION}_Linux-64bit.deb

sudo apt-get install libstdc++6
mkdir     -p ${CIRCLE_WORKING_DIRECTORY}/.binaries
wget     -qO ${CIRCLE_WORKING_DIRECTORY}/.binaries/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${HUGO_BINARY}
sudo dpkg -i ${CIRCLE_WORKING_DIRECTORY}/.binaries/hugo.deb
hugo