// // extends接口继承示例

// interface T1 {
//   name: string
// }
// interface T2 {
//   sex: number
// }
// // 多重继承，逗号隔开
// interface T3 extends T1,T2 {
//   age: number
// }
// // 合法
// const t3: T3 = {
//   name: 'xiaoming',
//   sex: 1,
//   age: 18
// }


// extends条件判断示例
// extends判断条件真假的逻辑是什么? 如果extends前面的类型能够赋值给extends后面的类型，那么表达式判断为真，否则为假。

// // 示例1
// interface A1 {
//   eat(): void
// }
// interface D1 extends A1 {
//   bite(): void
// }
// // A的类型为string
// type A = D1 extends A1 ? string : number
// const a: A = 'this is string'

// // 示例2
// interface A1 {
//   name: string
// }
// interface A2 {
//   name: string
//   age: number
// }
// // A的类型为string
// type A = A2 extends A1 ? string : number
// const a: A = 'this is string'

// 示例3--分配条件类型
// 对于使用extends关键字的条件类型（即上面的三元表达式类型），
// 如果extends前面的参数是一个泛型类型，当传入该参数的是联合类型，则使用分配律计算最终的结果。
// 分配律是指，将联合类型的联合项拆成单项，分别代入条件类型，
// 然后将每个单项代入得到的结果再联合起来，得到最终的判断结果。
// 总之，满足两个要点即可适用分配律：第一，参数是泛型类型，第二，代入参数的是联合类型。
// type A1 = 'x' extends 'x' ? string : number; // string
// type A2 = 'x' | 'y' extends 'x' ? string : number; // number
// type P<T> = T extends 'x' ? string : number;
// type A3 = P<'x' | 'y'> // ?  string | number

// 示例4--特殊的never
// never是所有类型的子类型。
// never被认为是空的联合类型，也就是说，没有联合项的联合类型，所以还是满足上面的分配律。
// 然而因为没有联合项可以分配，所以P<T>的表达式其实根本就没有执行。
// 所以A2的定义也就类似于永远没有返回的函数一样，是never类型的。
// type A1 = never extends 'x' ? string : number; // string
// type P<T> = T extends 'x' ? string : number;
// type A2 = P<never> // never

// 示例5--防止条件判断中的分配。
// 在条件判断类型的定义中，将泛型参数使用[]括起来，即可阻断条件判断类型的分配。
// 此时，传入参数T的类型将被当做一个整体，不再分配。
type P<T> = [T] extends ['x'] ? string : number;
type A1 = P<'x' | 'y'> // number
type A2 = P<never> // string
