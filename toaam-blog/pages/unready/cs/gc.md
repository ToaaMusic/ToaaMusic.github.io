---

---

# GC 与内存分配

GC (Garbage Collection 垃圾回收)是 .NET 运行时自动回收你所创建的实例的机制，包括是否回收，何时回收等考量开销。

## 何时触发回收

首先一定是托管对象，其次看你的对象从根节点向下寻找是否可达（是否有强引用），最后看世代（generation）。

先不讲枯燥的定义，直接拿例子说明：

```cs
// 1. 必须是托管对象，即引用类型
class MyObject
{
    MyObject? child;
    int intChild;
}

// 此时 myObect 是根节点
var myObject = new MyObject();

// 2. 断掉子节点，使其不可达
myObject.child = null;

// 3.
```
