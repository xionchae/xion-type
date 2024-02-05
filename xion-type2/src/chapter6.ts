// any
// 특정 변수의 타입을 모르거나 타입이 여러가지일 때 사용
// 런타임시 에러가 발생할 수 있음 - 최대한 사용하지 않는 것이 좋음

let anyVar : any = "hello";

let num : number = 10;
num = anyVar; // 에러가 발생하지 않는다.

// 차라리 사용하려면 unknown을 사용하는 것이 좋다.
let unknownVar : unknown = "hello";
unknownVar = 10;
unknownVar = true;

if(typeof unknownVar === "number"){
  num = unknownVar;
  console.log(num);
}