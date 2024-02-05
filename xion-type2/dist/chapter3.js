// object
// 객체 리터럴 타입 : 객체의 데이터와 타입이 일치해야 한다.
// 구조를 기준으로 타입을 정의한다. -> 구조적 타입 시스템
let user = {
    name: "xion",
    age: 20
};
user = {
    name: "type"
};
let config = {
    apiKey: "1234"
};
export {};
// config.apiKey = "3456"; // 중요한 키를 변경하지 못하게 하기 위해서 readonly를 사용한다.
