const names = ["alice", "bob", "chutzrit"];
//map
const uppernames = names.map((name) => {
  return name.toUpperCase();
});

console.log("uppernames :", uppernames);

//filter

const filtername = names.filter((name) => name.startsWith("a"));
console.log("🚀 ~ filtername:", filtername);

//find
const findname = names.find((name) => typeof name === "string");
console.log("🚀 ~ findname:", findname);

// some,every
const checksome = names.some((name) => name.length > 5);
console.log("🚀 ~ checksome:", checksome);

const checkevery = names.every((name) => name.length > 5);
console.log("🚀 ~ checkevery:", checkevery);
