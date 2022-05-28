type TupleToObject<T extends readonly any[]> = {
  // [P in keyof T] : P; // keyof array -> 得到一个索引组成的数组
  [P in T[number]] : P;
};

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> 

// js
function tupleToObject(array) {
  const obj = {};

  array.forEach((val) => {
    obj[val] = val;
  });

  return obj;
}

// 前置知识点1：typeof( https://www.typescriptlang.org/docs/handbook/2/typeof-types.html#handbook-content )的作用：将非类型世界(let/const等js) 转换为 类型世界(type/interface等ts)
// 前置知识点2：const 和 as const(  ) 的作用, 比如：const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

// 1. 返回一个对象
// 2. 遍历 array  T[number]
// keyof array -> 得到一个索引组成的数组
// T[number] ->去遍历一个数组
