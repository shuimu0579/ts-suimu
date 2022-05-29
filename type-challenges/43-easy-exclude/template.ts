type MyExclude<T, U> = T extends U ? never : T;

// js
function MyExclude(T, U: any[]) {
  const result = [];
  for (let i = 0; i < T.length; i++) {
    const t = T[i];

    //     let boo = false;
    //     for (let j = 0; j < U.length; j++) {
    //       const u = U[j];

    //       if (t === u) {
    //         boo = true;
    //       }
    //     }

    //     if (!boo) {
    //       result.push(t);
    //     }
    if (!U.includes(t)) {
      result.push(t);
    }
  }

  return result;
}


// 1.T extends U ,当T和U都是union类型的时候，extends的具体行为是什么？
