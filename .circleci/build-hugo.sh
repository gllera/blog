HUGO_VERSION=0.47.1
HUGO_BINARY=hugo_extended_${HUGO_VERSION}_Linux-64bit.deb

wget     -qO /tmp/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${HUGO_BINARY}
sudo dpkg -i /tmp/hugo.deb
hugo
(cd public && rm -rf categories post tags)