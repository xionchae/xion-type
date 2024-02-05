/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어진 타입
 * -> 합집합 타입과 교집합 타입을 이용해서 만들 수 있다.
 */

/**
 * 1. 합집합 - Union Type
 */
let a: string | number; // string number union type
a = 'happy';
a = 123;

let arr : (number | string | boolean)[] = [1, 'a', true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
}

type Union1 = Dog | Person;
// union1 : Dog
let union1: Union1 = {
  name: 'happy',
  color: 'white'
};
// union2 : Person
let union2: Union1 = {
  name: 'happy',
  language: 'korean'
};
// Union3 : 합집합
let union3: Union1 = {
  name: 'happy',
  color: 'white',
  language: 'korean'
};
// union4 는 합집합 타입에 속하지 않아서 에러가 발생한다. name만 갖고 있는 타입이 없기 때문이다.
// let union4: Union1 = {
//   name: 'happy',
// }

/**
 * 2. 교집합 - Intersection Type
 */
let variable: number & string; // never

type Intersection = Dog & Person;
// 프로퍼티가 모두 있어야 한다. 왜냐하면 name color 이 있어야 Dog가 될 수 있고, name language가 있어야 Person이 될 수 있기 때문이다.
// 그래서 아래 같은 경우는 language가 없어서 Person이 될 수 없기 때문에 에러가 발생한다.
let intersection: Intersection = {
  name: 'happy',
  color: 'white',
  // language: 'korean' 
};