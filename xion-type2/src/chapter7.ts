// void
// 아무것도 없음을 나타내는 타입

function func1() : string {
  return "hello world";
}

// void 타입은 아무것도 반환하지 않는 함수에 사용한다.
function func2() : void {
  console.log("hello world");
}

let a : void = undefined; // undefined는 void에 할당할 수 있다. 

// never
// 불가능한 타입을 나타내는 타입
// never type은 어떠한 값도 가질 수 없는 타입이다. undefined도 할당할 수 없다.

function func3() : never {
  while(true){
    console.log("hello world");
  }
}

function func4() : never {
  throw new Error("hello world");
}
