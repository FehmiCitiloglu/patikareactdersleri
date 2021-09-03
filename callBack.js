// setTimeout(() => {
//   console.log("Hello");
// }, 2000);

// setInterval(() => {
//   console.log("I will work eveery per second");
// }, 1000);

// const sayHi = (cb) => {
//   cb();
// };
// sayHi(() => console.log("Hello"));

import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log("Users loaded", users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((data) => data.json())
//       .then((posts) => {
//         console.log("Post 1 loaded", posts);

//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//           .then((data) => data.json())
//           .then((data) => console.log("Post 2 loaded", data));
//       });
//   });

// async function getData() {
//   const users = await (
//     await fetch("https://jsonplaceholder.typicode.com/users/1")
//   ).json();

//   const post1 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ).json();

//   const post2 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/2")
//   ).json();

//   console.log("Users ", users);
//   console.log("Post1 ", post1);
//   console.log("Post2 ", post2);
// }
// getData();

// (async () => {
//   const users = await (
//     await fetch("https://jsonplaceholder.typicode.com/users/1")
//   ).json();
//   const post1 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ).json();
//   const post2 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/2")
//   ).json();
//   console.log("Users ", users);
//   console.log("Post1 ", post1);
//   console.log("Post2 ", post2);
// })();

import axios from "axios";

// (async () => {
//   const { data: users } = await axios(
//     "https://jsonplaceholder.typicode.com/users/1"
//   );

//   const { data: post1 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );

//   const { data: post2 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/2"
//   );

//   console.log("users", users);
//   console.log("post1", post1);
//   console.log("post2", post2);
// })();

// const getComments = (number) => {
//   return new Promise((resolve, reject) => {
//     if (number == 1) {
//       resolve({ text: "selam" });
//     } else {
//       reject("Bir problem Oluştu");
//     }
//   });
// };

// getComments(2)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const { data: users } = await axios(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    resolve(users);
    // reject("Bir sorun oluştu");
  });
};

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data: post } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + post_id
    );

    // resolve(post);
    reject("Bir sorun daha oluştu");
  });
};

// (async () => {
//   try {
//     const user = await getUsers();

//     const post = await getPost(1);

//     console.log(user);
//     console.log(post);
//   } catch (error) {
//     console.error(error);
//   }
// })();

Promise.all([getUsers(), getPost(1)])
  .then(console.log)
  .catch(console.log);
