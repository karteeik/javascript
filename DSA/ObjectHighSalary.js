const myObj = [
  {
    id: 239324,
    salary: 50000,
  },
  {
    id: 239334,
    salary: 55000,
  },
  {
    id: 239344,
    salary: 24000,
  },
  {
    id: 239354,
    salary: 20000,
  },
];

let highSalary = myObj[0].salary;

for (let i = 0; i < myObj.length; i++) {
  if (myObj[i].salary > highSalary) {
    highSalary = myObj[i].salary;
  }
}

console.log(highSalary);
