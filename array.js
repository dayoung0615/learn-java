//배열

const dayOfweeks = ["월", "화", "수", "목", "금", "토", "일"];

console.log("🚀 ~ dayOfweeks:", dayOfweeks);

console.log('오늘은 "${dayOfweeks[2]}" 입니다.');

const students = [
  "강격덕",
  "김관태",
  "김다영",
  "김서진",
  "김태원",
  "이혜림",
  "장기만",
];

console.log("🚀 ~ students ", students.length);

console.log("마지막", students[students.length - 1]);

console.log("나 : ", students[2]);

const studentInfo = {
  name: "김다영",
  mbti: "INTP",
  attedanceOheck: true,
};
console.log("🚀 ~ studentInfo:", studentInfo);

console.log("name : ", studentInfo["name"]);
console.log("mbti : ", studentInfo.mbti);

const studenList = [
  {
    name: "강경덕",
    mbti: "ISTJ",
    favoritFoods: ["국밥", "밀면"],
  },
  {
    name: "김관태",
    mbti: "INFJ",
    favoritFoods: ["치킨", "햄버거"],
  },
  {
    name: "김다영",
    mbti: "INTP",
    favoritFoods: ["감자탕", "파스타"],
  },
];

console.log("경덕님의 MBTI : ", studenList[0].mbti);
console.log("관태님의 favoritFoods 1번 : ", studenList[1].favoritFoods[0]);
console.log("마지막 학생의 이름 : ", studenList[studenList.length - 1].name);

// function add(a, b) {
//   return a + b;
// }

// 여기에 화살표 함수로 다시 작성하세요.
const add = (a, b) => {
  return a + b;
};

console.log(add(5, 3)); // 예상 결과: 8

// 여기에 두 개의 parameter를 가진 화살표 함수를 작성하세요.
const minus = (a, b) => {
  return a - b;
};

// 함수 테스트
console.log(minus(60, 20)); // 예상 결과: 40

const introduce = (name, age) => {
  return "안녕하세요, " + name + "님. 당신의 나이는 " + age + "세입니다.";
};

// 여기에 함수를 호출하는 코드를 작성하세요.// 당신의 이름과 나이를 argument로 사용하세요.
console.log(introduce("김다영", "29")); // 예시 결과: "안녕하세요, 김철수님. 당신의 나이는 25세입니다."

// 여기에 orderSandwich 함수를 작성하세요
// orderSandwich 함수는 type 매개변수를 받고 타입에 따라 다른 재료를 반환해야 합니다

const orderSandwich = (type = "basic") =>
  type === "vegan" ? "🥖 + 🥬 + 🍅 + 🥑 + 🥒" : "🥖 + 🥬 + 🍅 + 🧀 + 🥓";

// 함수 테스트 - 아래 코드는 수정하지 마세요
console.log("기본 샌드위치 주문: " + orderSandwich());
console.log("기본 샌드위치 주문: " + orderSandwich("basic"));
console.log("비건 샌드위치 주문: " + orderSandwich("vegan"));

/* 예상 결과:
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
비건 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🥑 + 🥒
*/
