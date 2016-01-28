echo off

echo Style compilation started
set startupPath= %~dp0
echo %startupPath%
cd %startupPath%
sudo npm install gulp -g
npm install gulp
npm install -?save
gulp
echo Style compilation finished
echo ===================================
