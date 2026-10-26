// const student = {
//   name: "Ayo",
//   age: 12,
//   gender: "Male",
//   "best subject": "Javascript",
// };

// const property = "age";
// const properties = "gender";

// console.log(student["name"]);
//    console.log(student["gender"])

// console.log(student[properties]);

// console.log(student["best subject"]);

//    Modification

// student["best subject"] = "css";

// console.log(student["best subject"]);

//    adding

// student.institute = "AstroTEC";

// console.log(student["institute"]);

// delete student.name;

// console.log(student);

// const products = [
//   {
//     name: "Laptop",
//     price: 450000,
//     category: "Electronics",
//   },
//   {
//     name: "Phone",
//     price: 250000,
//     category: "Electronics",
//   },
//   {
//     name: "Shoes",
//     price: 30000,
//     category: "Fashion",
//   },

//   {
//     name: "Bages",
//     price: 80000,
//     category: "Fashion",
//   },

//   {
//     name: "caps",
//     price: 90000,
//     category: "Fashion",
//   },

//   {
//     name: "Iron",
//     price: 30000,
//     category: "Electricity",
//   },
// ];

// console.log(products[0].name);
// console.log(products[1]["price"]);

// for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
// }

// products.forEach((product) => {
//   console.log(`${product.name}-#${product.price}-${product.category}`);
// });

// const heading = document.querySelector("h1");

// heading.textContent = "Hello world";

// const message = document.getElementById("paragraph");

// message.textContent = "Welcome";

// const headings = document.querySelector("#alert");

// headings.style.color = "orange";

// function changeText() {
//   document.getElementById("changer").textContent = "This is you";
// }

// const greetings = document.querySelector("h1");

// greetings.textContent = "Hello INIOLUWA";

// const addContent = document.querySelector(".container");
// addContent.innerHTML = "<h1> This is Good </h1>";

// const messAGE = document.getElementById("message");

// messAGE.classList.add("height");

// messAGE.classList.remove("height");

const nameInput = document.querySelector("#name");
const button = document.querySelector("#btn");

const myForm = document.querySelector("#myform")

myForm.addEventListener("submit", function () {
  console.log("Form Submited");
});
