//if문

const scoer = 70;

const pass = () => {
  console.log("합격입니다.");
};
if (scoer >= 60) {
  pass();
} else {
  console.log("불합격입니다.");
}

/*
90점 이상 A
80점 이상 B
70점 이상 C
70미만 D
*/

if (scoer >= 90) {
  console.log("A등급 입니다");
} else if (scoer >= 80) {
  console.log("B등급 입니다");
} else if (scoer >= 70) {
  console.log("C등급 입니다");
} else {
  console.log("D등급 입니다");
}

scoer >= 60 ? pass() : false();
console.log();
