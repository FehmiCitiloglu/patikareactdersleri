const users = [
  { name: "Mehmet", age: 29 },
  { name: "Mehmet", age: 25 },
  { name: "Murat", age: 30 },
];

/*
    push
    map
    find
    filter
    some 
    every
    includes

 */

// users.push("Ayşe");
// users.push("Fatma");

// console.log(users);

// map

// users.map((user) => console.log(user.name));

// find

// const result = users.find((item) => item.name == "Mehmet" && item.age > 20);

// console.log(result);

// filter

// const filtered = users.filter(({ name, age }) => name == "Mehmet" && age > 20);

// console.log(filtered);

// some

// const sommed = users.some((item) => item.age > 24);

// console.log(sommed);

// every

// const every = users.every((item) => item.age > 5);

// console.log(every);

// includes

const meyveler = ["elma", "armut", "muz"];

const isInclude = meyveler.includes("elma");

console.log(isInclude);
