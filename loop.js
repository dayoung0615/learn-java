//for

for (let i = 0; i < 10; i++) {
  console.log("i : ", i);
}

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

for (let i = 0; i < studenList.length; i++) {
  console.log("studenList : ", studenList[i]);
  console.log("i", i);
}

//forEach
const number = [2, 5, 7, 9, 4];

// for (let i = 0; i < number.length; i++) {
//   console.log("i", number[i]);
// }

number.forEach((element, index, array) => {
  console.log("element", element);
  console.log("index", index);
  console.log("array", array);
  console.log("-------------------------------");
});

const ingredients = ["로메인", "토마토", "양파", "치즈", "새우", "햄"];

let sandwitch = "빵";

ingredients.forEach((item) => {
  console.log("item : ", item);
  sandwitch += item;
});

console.log("🚀 ~ sandwitch:", sandwitch);
