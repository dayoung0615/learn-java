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
