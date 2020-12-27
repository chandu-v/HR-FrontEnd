cd dist\hr-front-end
git init
git remote add origin https://github.com/chandu-v/HR-FrontEnd.git 
git config user.email "chandu_boss@hotmail.com"
git config user.name "Chandu"
git checkout -b build
git add .
git commit -a
git push origin build -f
cd ../../