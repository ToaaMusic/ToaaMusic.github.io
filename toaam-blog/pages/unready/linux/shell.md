# Shell

## Startup files

如果以普通用户的角度出发，我想我们最先关心的应该是 shell 的启动路径了，那么以 bash 为例，顺序如下：

/etc/profile -> $HOME/.bash_profile, $HOME/.bash_login, $HOME/.profile -> $HOME/.bash_logout

注：$HOME/.bash_profile, $HOME/.bash_login 和 $HOME/.profile 这三个文件并非覆盖式加载，而是按顺序访问，若访问到该文件有效，则后面的文件不会被加载。即如果 .bash_profile 存在，则只加载这个文件，后面的两个将被忽视。

- /etc/profile

登录时第一个被加载的文件，一般避免修改它，以我的 Archlinux 默认生成的为例并加注释解读：

```bash
# /etc/profile

# 提供快捷增加路径的方法，使得之后不用写 export PATH="$PATH:$HOME/mypath" 并检查是否重复
append_path () {
    case ":$PATH:" in
        *:"$1":*)
            ;;
        *)
            PATH="${PATH:+$PATH:}$1"
    esac
}

# 默认路径
append_path '/usr/local/sbin'
append_path '/usr/local/bin'
append_path '/usr/bin'

export PATH

# 加载 /etc/profile.d 下的所有脚本，软件在这里放置自己特有的启动文件，bash会自动依次加载
if test -d /etc/profile.d/; then
	for profile in /etc/profile.d/*.sh; do
		test -r "$profile" && . "$profile"
	done
	unset profile
fi

# unset GLOBSORT, before anything else is sourced
# This variable will be part of bash => 5.3
# The rationale is that the user should always be able 
# to expect that the snippets be processed in a deterministic order.
unset -v GLOBSORT

# 在这里注销了添加 PATH 的函数，因此这个函数只是给 /etc/profile.d 用的，我们之后写的脚本用不了
unset -f append_path

# Source global bash config, when interactive but not posix or sh mode
if test "$BASH" &&\
   test "$PS1" &&\
   test -z "$POSIXLY_CORRECT" &&\
   test "${0#-}" != sh &&\
   test -r /etc/bash.bashrc
then
	. /etc/bash.bashrc
fi

# Termcap is outdated, old, and crusty, kill it.
unset TERMCAP

# Man is much better than us at figuring this out
unset MANPATH
```

- $HOME/.bash_profile, $HOME/.bash_login, $HOME/.profile

用户级的bash启动配置，使用 --noprofile 参数可以不启用它们

通常使用 ~/.bash_profile 就够了，并且包含以下内容：

```bash
if [ -f ~/.bashrc ]; then . ~/.bashrc; fi
```

这段脚本会检查是否有 ~/.bashrc 如果有就加载，没有就跳过，防止报错

因此我们实际上手动配置的是 ~/.bashrc 这个文件，比如放置我们想要的别名：

```bash
alias ls='ls --color=auto'
alias grep='grep --color=auto'
```

## Interactive and non-interactive

其次我们关心的就是 shell 以怎样的方式运行

