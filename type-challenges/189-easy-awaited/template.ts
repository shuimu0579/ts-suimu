type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X> 
? 
  X extends Promise<unknown>
  ? MyAwaited<X>
  : X
: never;

// 1. infer只能在 条件类型里面使用
// 2. infer用于设置未知数  变量
