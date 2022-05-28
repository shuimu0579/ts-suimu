# TS类型体操中涉及的知识点

## 04-easy-pick

```text
// 涉及到的知识点
// 1. 返回一个对象
// 2. 遍历foreach 接口  mapped   
//    - keyof  lookup
//      - https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types
//    - mapped
//      - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// 3. 加上 readonly 关键字  新的知识点
//    - https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype
// 4. todo[key] 取值 indexed
// - https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
```

## 7-easy-readonly

```text
// 1. 返回一个对象
// 2. 遍历 obj （js 对象  ts 接口）  in  -> mapped keyof -> lookup 
// 3. 加上 readonly 关键字  新的知识点
// 4. 通过 key 来获取 obj(接口) 里面的值 indexed
```

## 11-easy-tuple-to object

```text
// 前置知识点1：typeof( https://www.typescriptlang.org/docs/handbook/2/typeof-types.html#handbook-content )的作用：将非类型世界(let/const等js) 转换为 类型世界(type/interface等ts)
// 前置知识点2：const 和 as const(  ) 的作用, 比如：const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
// // @ts-expect-error ( https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html ) 注释

// 1. 返回一个对象
// 2. 遍历 array  T[number]
// keyof array -> 得到一个索引组成的数组
// T[number] ->去遍历一个数组
```

## 14-easy-first

```text

```
