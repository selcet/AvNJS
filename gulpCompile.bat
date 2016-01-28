@echo off

echo Style compilation started
set startupPath= %~dp0
echo %startupPath%
CD %startupPath%
npm install gulp -g
npm install gulp
call npm install -?save
gulp
echo Style compilation finished
echo ===================================