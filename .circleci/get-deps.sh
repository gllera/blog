mkdir /tmp/hugo

wget -qO /tmp/hugo.tar.gz https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz
tar  -xf /tmp/hugo.tar.gz -C /tmp/hugo

wget -qO /tmp/node.tar.gz https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.gz
tar  -xf /tmp/node.tar.gz -C /tmp