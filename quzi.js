let conlog = "예상 출력 :";
for (let i = 5; i > 0; i--) {
  conlog += " " + i;
}
console.log(conlog);

const numbers = [1, 2, 3, 4, 5];

const incrementedNumbers = numbers.map((Number) => Number + 1);

console.log(incrementedNumbers); // 예상 결과: [2, 3, 4, 5, 6]

const numbers2 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers2.filter((Number) => Number % 2 == 0);
console.log(evenNumbers); // 예상 결과: [2, 4, 6]

// 학생들의 정보가 담긴 배열
const students = [
  { name: "Alice", age: 22, major: "Computer Science" },
  { name: "Bob", age: 21, major: "Mathematics" },
  { name: "Charlie", age: 23, major: "Physics" },
  { name: "David", age: 20, major: "Chemistry" },
  { name: "Eva", age: 22, major: "Biology" },
];

// 1. 전공이 "Physics"인 학생을 찾으세요.
const physicsStudent = students.find((student) => student.major === "Physics");

console.log("전공이 Physics인 학생:", physicsStudent);

// 2. 이름이 "David"인 학생을 찾으세요.
const davidStudent = students.find((student) => student.name === "David");

console.log("이름이 David인 학생:", davidStudent);
