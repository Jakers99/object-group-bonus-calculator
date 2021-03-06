const employees = [{
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

function addEmployees(name, employeeNumber, annualSalary) {
  for (let i = 0; i < employees.length; i++)
    console.log()

}


function bonusCalculator(employee) {
  let employeeBonus = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0
  }
}

function ratingPercentage (rating){
  let percentage = 0;
  if (rating <= 2){
    percentage = 0
  } else if (rating === 3){
    percentage = 4;
  } else if (rating === 4){
    percentage = 6;
  } else if (rating === 5){
    percentage = 10;
  }
  return percentage;
}

function tenuredEmployee (employeeNumber){
  let extraPercentage = 0;
  if (employeeNumber.length === 4){
    extraPercentage = 5;
  } else {
    extraPercentage = 0;
  }
  return extraPercentage;
}




// if else