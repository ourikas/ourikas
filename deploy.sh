npm install
gulp build
gulp manifest
rm -Rf tmp-deploy
mkdir tmp-deploy
cp -R .git tmp-deploy
cp -R app tmp-deploy
cd tmp-deploy
git add .
git commit --allow-empty-message -m ""
git remote add ourikas git@github.com:Ourikas/ourikas.github.io.git
git push ourikas :master
git subtree push --prefix app ourikas master
cd ..
rm -Rf tmp-deploy
echo "Done!"
