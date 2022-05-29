# TS类型体操中涉及的知识点

- [type-challenges 仓库](https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md)

## [04-easy-pick](https://www.bilibili.com/video/BV1vY41187Tx?spm_id_from=333.999.0.0)

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

## [7-easy-readonly](https://www.bilibili.com/video/BV1a34y1B7E7/?spm_id_from=pageDriver)

```text
// 1. 返回一个对象
// 2. 遍历 obj （js 对象  ts 接口）  in  -> mapped keyof -> lookup 
// 3. 加上 readonly 关键字  新的知识点
// 4. 通过 key 来获取 obj(接口) 里面的值 indexed
```

## [11-easy-tuple-to object](https://www.bilibili.com/video/BV1KP4y177sx/?spm_id_from=pageDriver)

```text
// 前置知识点1：typeof( https://www.typescriptlang.org/docs/handbook/2/typeof-types.html#handbook-content )的作用：将非类型世界(let/const等js) 转换为 类型世界(type/interface等ts)
// 前置知识点2：const 和 as const(  ) 的作用, 比如：const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
// // @ts-expect-error ( https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html ) 注释

// 1. 返回一个对象
// 2. 遍历 array  T[number]
// keyof array -> 得到一个索引组成的数组
// T[number] ->去遍历一个数组
```

## [14-easy-first](https://www.bilibili.com/video/BV1h34y1i7i5/?spm_id_from=pageDriver)

```text
// 知识点
// 1. extends 类型条件判断
// 2. 获取 tuple 的 length 属性  indexed
// 3. extends union  判断的规则
// 4. inter 的使用(推断)
```

## [18-easy-tuple-length](https://www.bilibili.com/video/BV11u41117Lg/?spm_id_from=pageDriver)

```text
// 知识点
// 什么是 tuple 类型 (https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)
// TS中的tuple和普通的数组有什么区别 -- tuple是确定类型确定长度的数组，普通的数组是没有确定长度的。
```
