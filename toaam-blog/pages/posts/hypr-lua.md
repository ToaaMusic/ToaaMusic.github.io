---
layout: post
title: Hyprland 0.55.0 hyprlang -> lua 配置迁移
summary: 本文记录了我将hyprland从0.54.x升级到0.55.0并将配置语言迁移到lua的过程，包括具体迁移方法（使用agent），效果，一些思考，和新特性的体验。
tags:
    - lua
---

## 我的方法

下载官方仓库里的默认配置: [hyprland.lua](https://github.com/hyprwm/Hyprland/blob/main/example/hyprland.lua)

直接使用 opencode 或者 claude 参考它来迁移，下面是我推荐的提示词：

```text
我把hyprland升到0.55.0了，官方即将在后续的几个小版本全面废除hyprlang，改用lua语言进行配置，我下载了官方的默认hyprland.lua，现在我想让你帮我把我的旧配置更新成lua版本的，具体流程如下：参考默认配置文件以及里面的docs网址你也可以去查看，为了确保不崩，先不要动旧文件，方便我回退，把我原本的相关文件以及source的文件改成lua版本并放在相同目录，默认的hyprland.lua改成hyprland_default.lua，新的配置文件使用hyprland.lua名字，方便我对照。
```

需要重启 hyprland ，再次打开你的 agent, 如果有报错就告诉他：

```text
有报错，修复一下
```

最后按需微调

## 经历

我最开始的提示词是这样的：

```text
我把hyprland升到0.55.0了，官方即将在后续的几个小版本全面废除hyprlang，改用lua语言进行配置，我下载了官方的默认hyprland.lua，他在new/里，现在我想让你帮我把我的旧配置更新成lua版本的，具体流程如下：参考默认配置文件以及里面的docs网址你也可以去查看，为了确保不崩，先不要动旧文件，将new/当成hypr/，把我原本的相关文件以及source的文件改成lua版本并放在这里，默认的hyprland.lua改成hyprland_default.lua，新的配置文件使用hyprland.lua名字，方便我对照。
```

出于谨慎，我没有让他直接应用新配置，但我依然需要手动对照然后应用新配置，并不可避免地崩掉hyprland。

于是我赌一把，应用新配置也交给 agent。首先我查看了一下官方的News，了解到若有 hyprland.lua 则优先使用lua，若没有就回退至hyprland.conf（0.55.x的后续小版本将不再支持hyprlang，届时只能使用lua），并且一旦应用其中一种，运行时将不可切换（reload也不行）。

因此将 new/*.lua 移动至 hypr/ 并 Ctrl + M 手动重启 hyprland。

不出意外地 hyprland 报错了，但图形界面依然可用，应该是回退到默认配置了，所以可以打开 opencode 让他完成修复

他会使用ctl命令查看错误并修改文件：

```bash
hyprctl configerrors 2>&1
```

最后经过一番修改，报错消失，使用上和之前没什么两样，算是顺利迁移，接下来我要看看他改了什么，并真正看一下 lua 如何手动配置。

### 一些细节和diff

1. dev 环境

官方给出了为 lua lsp 提供的特有代码片段，通常在 /usr/share/hypr/stubs/ 下，因此可以在 hypr/ 目录下写 .luarc.json :

```json
{
  "workspace": {
    "library": [
      "/usr/share/hypr/stubs"
    ]
  },
  "diagnostics": {
    "globals": ["hl"]
  }
}
```

2. source -> require

之前引用文件的写法是：

```conf
source = ~/.config/hypr/vars.conf
```

那么现在使用 lua 的话，一个 lua 文件返回的是一个表，引用时需要使用 require 并通过 `表名.变量名` 的形式拿值：

```lua
local vars = require("vars")
hl.bind(mainMod .. " + Q",   hl.dsp.exec_cmd(vars.terminal))
```

个人认为没有以前简洁了，但是换来的是 lua 作为一门编程语言带来的解耦和可扩展性（比如在 vars.lua 里写自动判断电脑里装的是什么终端模拟器，然后返回）

虽然可以将他们写在一个文件里：

```lua
local terminal    = "kitty"
local fileManager = "dolphin"
local menu        = "hyprlauncher"

hl.bind(mainMod .. " + Q",   hl.dsp.exec_cmd(terminal))
```

解决方法是在 require 之后显示命名，这样之后不用频繁写表名了：

```lua
local vars = require("vars")
local terminal = vars.terminal
```

或者也可以直接在 vars.lua 里将变量和函数直接声明成全局的，但是不太推荐。

尽管如此，我仍然不推荐以上的写法，官方在默认配置里推荐分模块导入：“You can (and should!!) split this configuration into multiple files”，我认为分模块有助于减少崩配置的可能性，因为如果 require 的文件报错，hyprland 会拒绝加载并给予提示，但是，上面的例子里如果 terminal 字段不存在，那就属于主配置 hyprland.lua 出现错误，整个配置就会崩掉。

因此尽量完全解耦，在某模块里完成配置逻辑，不影响 hyprland.lua:

```lua
require("some-mod")
```

3. 



