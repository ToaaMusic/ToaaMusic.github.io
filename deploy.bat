@echo off

setlocal enabledelayedexpansion
set /p confirm="是否确认推送? (Y/N): "
if /i "!confirm!"=="Y" (
    goto continue
) else (
    echo 已取消推送
    exit /b 0
)

:continue
echo cloneing repository...

rm -rf dist
git clone -b gh-pages https://github.com/toaamusic/toaamusic.github.io.git dist

echo building project...

npm run build

cd dist
git add .
git commit -m "deploy"
git push origin gh-pages
