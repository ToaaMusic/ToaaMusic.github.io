#!/usr/bin/env bash

# ====================== 配置区 ======================
DIST_DIR="toaam-blog/.vitepress/dist"
REPO_URL="https://github.com/ToaaMusic/ToaaMusic.github.io.git"   # 你原来用 https，也可以改成 SSH
BRANCH="gh-pages"
# ===================================================

read -p "是否确认推送? (Y/N): " confirm
if [[ ! "$confirm" =~ ^[Yy]$ ]]; then
  echo "已取消推送"
  exit 0
fi

echo "正在构建项目..."
pnpm run build:all

# 检查构建是否成功
if [ ! -f "$DIST_DIR/index.html" ]; then
  echo "❌ 构建失败：未在 $DIST_DIR 找到 index.html"
  exit 1
fi

echo "准备部署目录..."

cd "$DIST_DIR" || exit 1

# ==================== 判断是否有 .git ====================
if [ ! -d ".git" ]; then
  echo "未找到 .git，正在 clone gh-pages 分支..."
  cd ..   # 回到 .vitepress 目录
  rm -rf dist                    # 先删除旧的 dist（防止冲突）
  git clone -b "$BRANCH" "$REPO_URL" dist
  cd dist || exit 1
  echo "clone 完成"
else
  echo "检测到已有 .git，使用现有仓库..."
fi

# ==================== 提交并推送 ====================
echo "添加文件并提交..."
git add -A

# 如果没有变化就跳过 commit
if git diff --cached --quiet; then
  echo "没有文件变化，跳过提交"
else
  git commit -m "deploy: $(date '+%Y-%m-%d %H:%M:%S')"
fi

echo "正在推送至 $BRANCH 分支..."
git push -f origin "$BRANCH"

echo "✅ 部署完成！"

# 返回工作区根目录
cd ../../..