// 기본 타입의 호환성
let num1: number = 1;
let num2: 20 = 20;

num1 = num2;

/* 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체 타입으로 변환할 수 있는지를 의미
 */

type Animal = {
  name: string;
  age: number;
};

type Dog = {
  name: string;
  age: number;
  breed: string;
};

let animal : Animal = {
  name: 'happy',
  age: 13
};

let dog: Dog = {
  name: 'happy',
  age: 13,
  breed: 'poodle'
};

animal = dog;
// dog = animal; // Error: Type 'Animal' is missing the following properties from type 'Dog': breed

type Book = {
  title: string;
  price: number;
};

type Magazine = {
  title: string;
  price: number;
  genre: string;
};

let book: Book ;
let magazine: Magazine = {
  title: 'happy',
  price: 10000,
  genre: 'novel'
};

book = magazine;
// magazine = book; // Error: Type 'Book' is missing the following properties from type 'Magazine': genre

// 초과 프로퍼티(속성) 검사 
// -> 객체 타입간의 호환성을 검사할 때, 대상 타입에 없는 속성이 있는지를 검사
let book2: Book = {
  title: 'happy',
  price: 10000,
  // genre: 'novel'
};

// 초과 프로퍼티 검사를 피하는 방법
// 1. 타입 단언
book2 = magazine as Book;
let book3 : Book = magazine;

// 2. 문자열 인덱스 시그니처
type Book2 = {
  title: string;
  price: number;
  [key: string]: any;
};

