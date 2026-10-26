// const student = {
//     Name:"ade",
//     Age: 5,
//     Gender: "Female"
// };

// console.log(student.Name);


const student = {
  name: "John",
  age: 18,
  gender:"Male",
  "best subject": "Math"
};
 
student.age = 19 
student.coures = "javascript"
const property= "gender"

console.log(student.name);

console.log(student["coures"])

console.log(student["age"]);

console.log(student["best subject"])

console.log(student[property])

delete student.age

console.log(student)

// console.log(student.best subject)




const students = [
  {
    name: "Aisha",
    age: 18,
    score: 85
  },
  {
    name: "John",
    age: 19,
    score: 72
  }
];


console.log(students[0])

console.log(students[0].name)
console.log(students[0]["name"])

// for loop 

for (let i = 0; i < students.length; i++){
  console.log(students[i].name)
}



const products = [
  {
    name: "Laptop",
    price: 450000,
    category: "Electronics"
  },
  {
    name: "Phone",
    price: 250000,
    category: "Electronics"
  },
  {
    name: "Shoes",
    price: 30000,
    category: "Fashion"
  }

];


products.forEach(product => {
  console.log(product.name);
})

products.forEach(product => {
  console.log(
    `${product.name} - ₦${product.price} - ${product.category}`
  );
});

// DOM INTRODUCTION


function changeText () {
  document.getElementById("title").textContent = "Hello"
  
}

const heading = document.getElementById("title")

heading.textContent = "hello"

heading.style.color = "blue"


const text = document.querySelector(".text")

// text.style.color = "orange"
// text.textContent = "ARE we here "


const box = document.querySelector("#box")
box.innerHTML = "<h2>Hello Students</h2>";

const message = document.querySelector("#message")

message.classList.add("height")

const paragraph = document.createElement("p");