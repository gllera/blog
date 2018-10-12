git config --global user.email "${GIT_EMAIL}" 
git config --global user.name "${GIT_USERNAME}"
git clone --depth 1 --single-branch https://${GIT_USERNAME}:${GIT_TOKEN}@github.com/gllera/gllera.github.io dist