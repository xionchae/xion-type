// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// typescript에서만 사용 가능
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["KOREAN"] = "ko";
    Language["ENGLISH"] = "en";
    Language["JAPANESE"] = "jp";
})(Language || (Language = {}));
const user1 = {
    name: "xion",
    role: Role.ADMIN, // 0
    lang: Language.KOREAN // "ko"
};
const user2 = {
    name: "louis",
    role: Role.USER, // 1
    lang: Language.ENGLISH // "en"
};
console.log(user1, user2);
export {};
