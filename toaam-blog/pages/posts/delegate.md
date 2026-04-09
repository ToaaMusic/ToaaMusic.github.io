---
layout: post
title: C#中的委托
date: 2025-09-02 02:54:02+00
tags: [
  "dotnet",
  "编程"
]
image_url: https://enhiucyodopknrbdtswy.supabase.co/storage/v1/object/public/resources/img/get-started-c-sharp-part-1-social.png
summary: 委托的存在使得函数本身也可以作为参数传递。\n此文分享如何理解以及熟练运用C#中的委托类型，日后会发展为合集“C#基础教程”的一部分
top: false
---

# 需求场景

正常在一个<span style="color:#e8d5ff">方法中</span>我们只能传变量，那么如何<span style="color:#e8d5ff">传方法</span>呢？这样我就可以在调用的时候动态地规定该方法内部的部分代码是什么样子的。比如我想这样写：

```cs
void PrintX(int x, void method)
{
    Console.WriteLine(x);
    method();
}
```

这显然是不行的，因为void不能作为参数传进去，况且如果传进去的方法想要有返回值的话，写成int method会被误当成普通的变量使用。所以，你可能会这样写：

```cs
class Method
{
    void DoSomething()
    {
        //DoSomething
    }
}

void PrintX(int x, Method method)
{
    Console.WriteLine(x);
    methods.DoSomething();
}
```

这样就可以通过传<span style="color:#e8d5ff">包装类</span>Method的实例来动态添加方法了：

```cs
var method = new Method();
PrintX(10, method)
```

但是呢，你又需要写很多<span style="color:#e8d5ff">Methods的子类</span>来传入不同的实现，这显然是更麻烦的。那么<span style="color:#e8d5ff">委托</span>就派上用场了，我们只需要将Methods类声明成委托类型：

```cs
delegate void Method();
```

然后Method这个委托类就可以像我们第一次那样当作类似void关键字那样传参了：

```cs
void PrintX(int x, Method method)
{
    Console.WriteLine(x);
    methods();
}
```

在调用的时候我们传具体的<span style="color:#e8d5ff">方法名</span>就行，特别方便，当然，目标方法要与你定义的委托类型<span style="color:#e8d5ff">签名一致</span>(后面会讲)：

```cs
PrintX(10,DoSomething);

void DoSomething()
{
    //DoSomething
}
```

实际上，Delegate是dotnet为我们提供的<span style="color:#e8d5ff">特殊类</span>，大致为：

```cs
public class Delegate
{
    MethodInfo method;
    public Delegate(MethodInfo method)
    {
        this.method = method;
    }
    public void Invoke()
    {
        method.Run();
    }
}
```

我们在将函数作为参数传递时实际上在传递类似于<span style="color:#e8d5ff">函数指针</span>一样的东西，即<span style="color:#e8d5ff">MethodInfo</span>，这正是dotnet对函数指针的高级封装，可以智能地识别函数名，从而new出一个委托实例并存储你传入的函数对应的MethodInfo。

# 多播

知道委托的用途后，我们来看一下它的语法。委托的<span style="color:#e8d5ff">本质</span>为<span style="color:#e8d5ff">类</span>，是引用类型，delegate关键字可以将方法声明成委托类型，注意在new一个委托时必须要马上传一个方法，然后将委托实例当作方法照常调用就行了，并等同于委托内部定义的Invoke()方法：

```cs
var md = new MyDelegate(DoSomething);

md();//md.Invoke();

public void DoSomething(){}

public delegate void MyDelegate();
```

我们甚至可以通过<span style="color:#e8d5ff">运算符</span>给委托实例<span style="color:#e8d5ff">新增</span>和<span style="color:#e8d5ff">删减</span>方法：

```cs
var md = new MyDelegate(DoSomething);

md += DoSomething2;
md -= DoSomething2;
md();

public void DoSomething(){}

public void DoSomething2(){}

public delegate void MyDelegate();
```

这就是委托的<span style="color:#e8d5ff">多播</span>。

即委托里可以引用来自<span style="color:#e8d5ff">不同作用域的多个方法</span>。

实际我们声明出的委托都默认就是<span style="color:#e8d5ff">多播委托</span>，我不需要做任何改变，同样也是dotnet为我们写好的，形如：

```cs
public class MulticastDelegate : Delegate
{
    public List<MethodInfo> MethodInfos;
    public Delegate(MethodInfo method)
    {
        MethodInfos.Add(method);
    }
    public void Invoke()
    {
        foreach(MethodInfo mi in MethodInfos)
        {
            mi.Run();
        }
    }
}
```

这样每次在多播委托的实例上加方法，都实际是在它内部的方法列表里添加了一个对应的methodInfo，并且在执行的时候是<span style="color:#e8d5ff">依次</span>执行的。

注意，方法列表里的方法签名一定要一致，并且也要和你声明的委托类型一致，比如我写：

```cs
delegate int MyDelegate(int a,int b);
```

那么我以后能往上加的只能是同样的格式，即要求传入两个int，返回值是int的方法：

```cs
int DoSomthing(int a,int b)
```

## Action与Func

dotnet已经为我们提供了一些委托类，都是已经声明好的。其中两个就是<span style="color:#e8d5ff">Action</span>与<span style="color:#e8d5ff">Func</span>最常用，区别就是是否有<span style="color:#e8d5ff">返回值</span>，签名如下：

```cs
public delegate void Action();
public delegate TResult Func<TResult>();
```

从此我们不需要自己写委托，而是直接找想要的签名然后实例化就行：

```cs
var action = new Action(DoSomething);
action();

var func = new Func<int>(DoSomething2);
var result = func();
```

# 事件（event）

被event关键字修饰的委托我们成为<span style="color:#e8d5ff">事件</span>，他是个<span style="color:#e8d5ff">语法糖</span>，背后已经帮我们实例化好了对应的委托，不需要我们手动实例化并传构造参数。常作为成员使用。

```cs
class Button
{
    event Action Click;//Action Click = new(DoNothing);
}
```

这样我们就可以通过在外部添加方法给Click事件，来实现不改动Button类的情况下为Click事件添加额外的行为。

```cs
var button = new Button();
button.Click += DoSomething;
button.Click();
```

# Lamda表达式

没写完...
