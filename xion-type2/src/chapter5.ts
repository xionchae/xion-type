// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// typescript에서만 사용 가능
// enum 은 컴파일 시에 사라지지 않고, 실제로 값이 존재하는 자바스크립트 코드로 변환된다.

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2
}
enum Language {
  KOREAN = "ko",
  ENGLISH = "en",
  JAPANESE = "jp"
}

const user1 = {
  name : "xion",
  role : Role.ADMIN, // 0
  lang : Language.KOREAN // "ko"
}

const user2 = {
  name : "louis",
  role : Role.USER, // 1
  lang : Language.ENGLISH // "en"
}

console.log(user1, user2);
