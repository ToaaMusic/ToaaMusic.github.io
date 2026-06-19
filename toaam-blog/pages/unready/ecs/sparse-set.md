---
---

# Sparse Set

## 简介

Sparse Set（稀疏集）是一种数据结构，可理解为一种高效的字典，但是键和值必须要用 int 代替，以提高操作效率。

稀疏集是及其反 OOP 的，因此下面会以 C# 为例，和传统的 OOP 做对比。

## 需求场景

假设我们有这样一个类：

```cs
public class Person
{
    public int Age { get; set; }
    public string Name { get; set; }

    public void Rename(string name)
    {
        Name = name;
    }
}
```

如果一个类的成员越来越多，我们自然而然会想到将各模块抽象并使用继承：

```cs
public class HasAge
{
    public int Age { get; set; }
}
public class HasName
{
    public string Name { get; set; }
    public void Rename(string name)
    {
        Name = name;
    }
}

public class Person : HasAge, HasName;
```

随后，你了解到“组合优于继承”，于是改成模块化（或叫组件化）：

```cs
public class AgeMod
{
    public int Age { get; set; }
}

public class NameMod
{
    public string Name { get; set; }
    public void Rename(string name)
    {
        Name = name;
    }
}

public class Person
{
    public AgeMod AgeMod { get; set; }
    public NameMod NameMod { get; set; }
}
```

这一步真正走出了 OOP，但是依旧存在两个弊端：
- 模块和实体类之间依旧强耦合，模块依旧会越来越多且无法方便地动态增删
- Person[] 是 AoS 结构，在有非常多的 Person 情况下，遍历 Person[] 中每个元素的其中一个模块，将会有大量的指针跳转

为了消除这些问题，我们尝试直接将 Person 的属性拿到外面去，并将各模块打包起来：

```cs
AgeMod[]? AgeMods; // 定义同上
NameMod[]? NameMods; // 定义同上
Person[]? Persons;

public class Person;
```

但问题是，如何将 Person 和各个模块对应起来？也就是说，如何知道一个 Person 的 AgeMod 在数组中的位置？

假设我们不知道 SparseSet，而是退一步使用字典：

```cs
Dictionary<Person, AgeMod> AgeMods = [];
Dictionary<Person, NameMod> NameMods = [];
List<Person> Persons = [];

var person = new Person();
Person.Add(person);
AgeMods.Add(person, new AgeMod { Age = 1 });
NameMods.Add(person, new NameMod { Name = "Tom" });

foreach (var person in Persons)
{
    var age = AgeMods[person].Age;
    Console.WriteLine($"Person at index {age} has age {age}");
}
```

这种实现方式虽然做到了解耦，但是有两个问题：
- `Dictionary` 基于哈希表，它的遍历速度不够快，
- 缓存局部性也不好，因此在一些性能苛刻的场景下不够用。

对于第一个问题，我们需要用 int 代替 Person 对象作为键；
对于第二个问题，我们依旧需要将模块存入一个扁平的数组，方便遍历，而字典用对于这个模块数组的索引（int）代替模块对象。

```cs
Dictionary<int, int> PersonToAgeModIndex = [];
Dictionary<int, int> PersonToNameModIndex = [];
List<int> Persons = [];
List<AgeMod> AgeMods = [];
List<NameMod> NameMods = [];

var personId = Persons.Count; // 0
Persons.Add(personId);
var ageModIndex = AgeMods.Count; // 0
AgeMods.Add(new AgeMod { Age = 1 });
var nameModIndex = NameMods.Count; // 0
NameMods.Add(new NameMod { Name = "Tom" });
PersonToAgeModIndex.Add(personId, ageModIndex);
PersonToNameModIndex.Add(personId, nameModIndex);

foreach (var pId in Persons)
{
    var age = AgeMods[PersonToAgeModIndex[pId]].Age;
    Console.WriteLine($"Person {pId} has age {age}");
}
```
















