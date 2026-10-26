const staff ={
    name: "Miss Soburat",
    gender:"Female",
    age: 10,
    department:"Software Development",

}

console.log(staff.name)
console.log(staff["name"])

// Modification

staff.name = "Miss Fatimah"
staff["name"] = "Miss Fatimah"

console.log(staff.name)

staff["role"] = "secretary"
staff.role = "secretary"

console.log(staff["role"])
console.log(staff.role)

// adding 

staff.height = "6 feet"
staff["role"] = "Tutor"

console.log(staff.height)
console.log(staff.role)

const realage = "age"

console.log(staff[realage])

delete staff.height

// console.log(staff[height])

console.log(staff)