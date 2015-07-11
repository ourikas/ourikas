npm install
gulp build
rm -Rf tmp-deploy
mkdir tmp-deploy
cp -R .git tmp-deploy
cp -R app tmp-deploy
cd tmp-deploy
git add .
git commit S--allow-empty-message -m ""
git push origin :gh-pages
git subtree push --prefix app origin gh-pages
cd ..
rm -Rf tmp-deploy
echo "Done!"
