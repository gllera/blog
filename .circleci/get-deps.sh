alias curl='curl --silent --show-error --fail'

HUGO_VERSION=0.47.1
NODE_VERSION=8.11.4

curl      -o /tmp/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_Linux-64bit.deb
sudo dpkg -i /tmp/hugo.deb

curl      -o /tmp/node.tar.xz https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.xz
tar      -xf /tmp/node.tar.xz -C /tmp

export NODEJS_HOME=/tmp/node-v${NODE_VERSION}-linux-x64/bin
export PATH=$NODEJS_HOME:$PATH