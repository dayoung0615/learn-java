// console.log("후츠릿 구독 좋아요");
// console.log(2+2);

// 변수선언
const youtube = "후츠릿"; //상수    <상수로 재할당 불가.
let comment = "구독 좋아요"; //변수

console.log("youtube : ", youtube);
console.log("comment : ", comment);

comment = "알림설정";
console.log("comment : ", comment);

const number = 1;
const number2 = "1";
console.log("🚀 ~ number:", number, typeof number);
console.log("🚀 ~ number2:", number2, typeof number2);

const bool = true;
const boll2 = false;
console.log("🚀 ~ bool:", bool, typeof bool);
console.log("🚀 ~ boll2:", boll2, typeof boll2);

const empty = null;
console.log("🚀 ~ empty:", empty, typeof empty);
let empty2;
console.log("🚀 ~ empty2:", empty2, typeof empty2);

const my_name = "김다영";
console.log("🚀 ~ my_name:", my_name);
let age = 29;
console.log("🚀 ~ age:", age);

//함수
console.log(
  "---------------------------------------------------------------------------"
);

// function helloWorld() {
//   console.log("hello_World");
// }

const helloWorld = () => {
  console.log("hello_World");
};

helloWorld();

// function userInfo() {
//     console.log("이름 : ", my_name, " / 나이 : ", age);
// }

const userInfo = (userName, userAge) => {
  console.log("이름 : ", userName, " / 나이 : ", userAge);
  console.log("더블 : ", userAge * 2);
};

userInfo(my_name, age);

const number3 = 14;
const number4 = 22;

const sumnomber = (number, number2) => {
  const result = number + number2;
  console.log("sum :", result);
  return result;
};

const add = sumnomber(number3, number4);
console.log("add : ", add);

const upperString = (username) => {
  return username.toUpperCase();
};

console.log("Engname : ", upperString("dayoung"));
