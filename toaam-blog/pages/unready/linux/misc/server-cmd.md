# 拿到一个Debian服务器后需要的命令

## 创建日常sudo用户

```bash
useradd -m -s /bin/bash myname
```

-m : 创建/home/myname/
-s /bin/bash : 指定shell为bash

```bash
passwd myname
```

```bash
usermod -aG sudo myname
```

检查：
```bash
awk -F: '$3>=1000 && $3<65534 {print $1, "UID:" $3}' /etc/passwd
```

```bash
su myname
```

```bash
sudo whoami
```

## 在本地机器配置ssh密钥连接

查看已有密钥：
```bash
ls -la ~/.ssh/
```

生成新的：
```bash
ssh-keygen -t ed25519 -C ""
```

```bash
ssh-copy-id myname@ip
```

## 常用软件

```bash
apt list --installed 
```

```bash
sudo apt update
sudo apt install git nvim
```

个人配置:
```bash
cd ~/
mkdir repos/
cd repos/
git clone https://github.com/ToaaMusic/dotfiles
cd dotfiles/
./link-select
```
