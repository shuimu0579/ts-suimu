type Length<T extends readonly any[]> = T["length"];

// js
function getLength(arr) {
  if (!Array.isArray(arr)) return;
  return arr.length;
}

// 知识点
// 什么是 tuple 类型 (https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)
// TS中的tuple和普通的数组有什么区别 -- tuple是确定类型确定长度的数组，普通的数组是没有确定长度的。

