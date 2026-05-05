# 声音

使用这个命令查看 archlinux 存在哪些和声音有关的库：

```bash
pacman -Q | grep -E "alsa|pipewire|wireplumber|pulse"  
```

输出示例：

```bash
alsa-card-profiles 1:1.6.4-1
alsa-lib 1.2.15.3-2
alsa-topology-conf 1.2.5.1-4
alsa-ucm-conf 1.2.15.3-1
alsa-utils 1.2.15.2-2
libpipewire 1:1.6.4-1
libpulse 17.0+r98+gb096704c0-1
libwireplumber 0.5.14-1
pipewire 1:1.6.4-1
pipewire-alsa 1:1.6.4-1
pipewire-audio 1:1.6.4-1
pipewire-jack 1:1.6.4-1
pipewire-pulse 1:1.6.4-1
pipewire-session-manager 1:1.6.4-1
wireplumber 0.5.14-1
```

## ALSA (Advanced Linux Sound Architecture)

这个是 Linux 目前默认的声卡驱动，并且已经写入内核当中。它是声音系统的最底层，其中 alsa-lib 是开发者可以调用的C库
这一层只提供了和声卡打交道的函数，并且只适用于 Linux 系统，因此不建议基于它开发

alsamixer 就是基于 alsa-lib 的一个 tui 程序

## PipeWire




