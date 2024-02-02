// 배열
let numArr : number [] = [1, 2, 3];

let strArr : string [] = ["Hello", "World"];

let boolArr : boolean [] = [true, false];
let boolArr2 : Array<boolean> = [true, false];  // 제네릭 타입(문법)

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr : (number | string | boolean)[] = [1, "Hello", true];  // (number | string | boolean)[]

// 다차원 배열
let doubleArr : number[][] = [[1, 2], [3, 4]];

// 튜플 (javascript에는 없고 typescript에만 있는 타입)
// 길이와 타입이 고정된 배열
let tup1 : [number, number] = [1, 2]
// tub1 = [1,2,3]  // Error

const users : [string, number][] = [
  ["xion",1],
  ["type",2],
  ["xion-type",3],
  // [5,"xion-type2",4]  // 이렇게 넣을 수도 있기 때문에 튜블 사용
];