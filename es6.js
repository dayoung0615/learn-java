//logical operators

//and
const user = {
  isloggedin: true,
  role: "admin", //admin,user,guest
};

if (user.isloggedin && user.role === "admin") {
  console.log("관리자 로그인");
} else {
  console.log("관리자가 아닙니다.");
}

if (user.isloggedin || user.role) {
  console.log("로그인");
} else {
  console.log("로그인이 불가능합니다");
}

//not
console.log("not 연산자: ", !user.isloggedin);
console.log("not 연산자: ", !user.role);
