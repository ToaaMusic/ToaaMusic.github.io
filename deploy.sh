#!/usr/bin/env bash

read -p "是否确认推送? (Y/N): " confirm
if [[ "$confirm" =~ ^[Yy]$ ]]; then
    echo "cloneing repository..."
else
    echo "已取消推送"
    exit 0
fi

rm -rf dist
git clone -b gh-pages https://github.com/toaamusic/toaamusic.github.io.git dist

echo "building project..."

npm run build

cd dist || exit 1

git add .
git commit -m "deploy"
git push origin gh-pages