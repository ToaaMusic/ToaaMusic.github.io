#!/usr/bin/env bash

dist_dir="toaam-blog/.vitepress/dist"
repo_url="https://github.com/ToaaMusic/ToaaMusic.github.io.git"
gh_pages_branch_name="gh-pages"

read -p "是否确认推送? (Y/N): " confirm
if [[ ! "$confirm" =~ ^[Yy]$ ]]; then
  echo "已取消推送"
  exit 0
fi

echo "正在构建项目..."
pnpm run build:all

if [ ! -f "$dist_dir/index.html" ]; then
  echo "❌ 构建失败：未在 $dist_dir 找到 index.html"
  exit 1
fi

echo "准备部署目录..."

cd "$dist_dir" || exit 1

if [ ! -d ".git" ]; then
  echo "未找到 .git，正在 clone gh-pages 分支..."
  cd ..
  rm -rf dist
  git clone -b "$gh_pages_branch_name" "$repo_url" dist
  cd dist || exit 1
  echo "clone 完成"
else
  echo "检测到已有 .git，使用现有仓库..."
fi

echo "添加文件并提交..."
git add -A

if git diff --cached --quiet; then
  echo "没有文件变化，跳过提交"
else
  git commit -m "deploy: $(date '+%Y-%m-%d %H:%M:%S')"
fi

echo "正在推送至 $gh_pages_branch_name 分支..."
git push -f origin "$gh_pages_branch_name"

echo "✅ 部署完成！"

cd ../../..

