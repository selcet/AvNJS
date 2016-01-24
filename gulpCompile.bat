@echo off

echo Frontend style compilation started
set startupPath= %~dp0
echo %startupPath%
CD %startupPath%
call npm install -?save
gulp prod
echo Frontend style compilation finished
echo ===================================