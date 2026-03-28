---
layout: post
title: 了解glTF/glb模型
date: 2026-02-04 02:17:50+00
class: 3D图形渲染
tags: [3D渲染, glTF]
image_url: https://enhiucyodopknrbdtswy.supabase.co/storage/v1/object/public/resources/img/2026-01-04%20234603.png
top: false
---

# 文件形式

一个完整的`glTF2.0`模型至少包含`.gltf`和`.bin`两部分，其中`.gltf`实际为纯文本的`.json`文件，`.bin`为二进制文件。此外，同样为二进制数据的贴图文件一般会从.bin中抽离，散落在同目录下存储。

将所有文件整合到一个二进制文件进行存储，就成为了`.glb`文件。

以名为 “model”，贴图名为 “tex1”，“tex2” ... 的模型为例：

```bash
  [ glTF 分离式布局 ]                             [ glb 二进制布局 ]

 model/                              model.glb ──────┐
 ├── model.gltf ───────┐             ┌───────────────┴───────────────┐
 │                     │        0-3: │ Magic (0x46546C67)            │
 ├── model.bin  ────┐  │        4-7: │ Version (2)                   │  Header (12B)
 ├── tex1.png   ────┤  │       8-11: │ Total Length                  │
 ├── tex2.png   ────┤  │             ├───────────────────────────────┤
 └── ...        ────┤  │      12-15: │ Chunk Length                  │
                    │  │      16-19: │ Chunk Type (0x4E4F534A)       │  Chunk 0 (JSON)
                    │  └───>  20...: │ JSON Content (UTF-8)          │
                    │                │ (Padding 0x20)                │
                    │                ├───────────────────────────────┤
                    │         ...  : │ Chunk Length                  │
                    │         ...  : │ Chunk Type (0x004E4942)       │  Chunk 1 (BIN)
                    └──────────────> │ Binary Data                   │
                                     │ (Padding 0x00)                │
                                     └───────────────────────────────┘
```

# `glTF json`

`.gltf`文件或`.glb`的`json chunk`为纯`json`文本，适合直接映射到面向对象编程语言的 runtime 类中。

它描述了一个`gltf`对象，包含meta信息和一堆子对象列表：

```json
{                       // 最浅引用层级
  "asset": {...},       // 1
  "scenes": [...],      // 1
  "nodes": [...],       // 2
  "meshes": [...],      // 3
  "materials": [...],   // 4
  "accessors": [...],   // 4
  "bufferViews": [...], // 5
  "buffers": [...],     // 6
  "cameras": [...],     // 3
  "textures": [...],    // 4
  "samplers": [...],    // 6
  "images": [...],      // 6
  "skins": [...],       // 3
  "animations": [...],  // 4
  "extensionsUsed": [...],
  "extensionsRequired": [...],
  // 每个对象都有的：
  "extensions": [...],
  "extras": [...]
}
```

看似是以扁平化存储的，但实际是树形结构，我们应以`scene`对象为入口遍历。扁平化列表可以让子对象通过`index`来查找并引用其他列表的子对象，实现同一个子对象只需写一遍就可以被不同地方引用。

接下来我将展开每个子对象列表。（大致以从底层到高层的顺序，并包含示例值）

## Asset

只是存储一些元信息。只有这四条，但`version`必须有。

注：version代表glTF版本，而不是你模型的版本。

```json
{                
  "asset": {
    "copyright": ""
    "generator": "UniGLTF-2.35.2",
    "version": "2.0",
    "minVersion": "",
  },
  "scenes": [],
  "nodes": [],
  ...
}
```

## Buffer 与 BufferView

一个 Buffer 对象代表一个 .bin 文件 （若是 .glb 则代表一块bin chunk），它不直接存储二进制数据，而是告诉上层对象去哪里找那块二进制数据（bin 文件路径 uri 或者按自己在 Buffer 列表的索引找 bin chunk）。

BufferView 则是一个 Buffer 的切片，代表一块可用的、有语义的二进制数据。其中 "buffer" 字段是索引，用于去列表找到底是哪个 buffer 的切片，其他字段用于读出切片。（后面同理，只要出现了与某对象同名的字段，通常就是 int 类型的索引）

一般较小的模型就只有一块 Buffer，所有 BufferView 都是对同一块 Buffer 的切片。

```json
{
  "buffers": [
    {
      "name": "",
      "byteLength": 1024,
      "uri": "model.bin"
    },
    {...}
  ],
  "bufferViews": [ 
    {
      "buffer": 0,
      "byteLength": 512,
      "byteOffset": 0,
      "byteStride": 0,
      "target": 
    },
    {...}
  ],
}
```

## Accessor 与 Image

这二者都会引用一个 BufferView 对象，前者是个通用的访问器，用于访问顶点数据等基础类型的数据，后者专门访问图像数据，通常用作贴图。

```json
{
  "accessors": [
    {
      "bufferView": 0,
      "byteOffset": 0,
      "componentType": 5126, // enum TODO
      "count": 4436,
      "max": [
        0.09807629,
        1.53574181,
        0.103573658
      ],
      "min": [
        -0.09723548,
        1.28432071,
        -0.103541791
      ],
      "normalized": false,
      "type": "VEC3"
      "sparse": //TODO
    },
    {...}
  ],
  "images": [
    {
      "uri": "tex1.png",
      "bufferView": 1,
      "mimeType": "image/png",
      "name": "\u5934"
    },
    {...}
  ],
}
```

## Texture 与 Sampler

## Mesh 与 Primitive

## Material

## Camera

## Node

## Skin

## Animation

## Scene

## Extension

# 使用 glTF 或 glb

//TODO

