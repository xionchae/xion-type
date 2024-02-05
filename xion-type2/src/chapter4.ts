// 타입 별칭
// 타입 별칭은 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수를 의미한다.
// 타입 별칭은 컴파일 시에는 사라지기 때문에 런타임에 영향을 주지 않는다. dist 폴더에는 타입 별칭이 사라진 것을 확인할 수 있다.
type User = {
  id:number;
  name:string;
  nickname:string;
  birth:string;
  bio:string;
  location:string;
}

let user1 : User ={
  id: 1,
  name:"xion",
  nickname:"xion",
  birth:"1999-01-01",
  bio:"hello world",
  location:"seoul"
}

// 인덱스 시그니처
type CountryNumberCodes = {
  [key:string]:number;
  // Korea에 string을 할당할 수는 없다.
  Korea:number;   // 빈객체를 만들면 에러가 발생하게 하기 위해서 꼭 Korea가 들어가야 에러가 안나게 설정한다.
}

let contryCodes :CountryNumberCodes = {
  Korea:80,
  USA:23,
  China:34
}