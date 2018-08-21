git config --global user.email "${GIT_EMAIL}" 
git config --global user.name "${GIT_USERNAME}"
git submodule sync 
git submodule update --init
(cd dist && git checkout master)