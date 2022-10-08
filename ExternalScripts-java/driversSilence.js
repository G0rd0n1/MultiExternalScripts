// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.

let dayUserInput = prompt('Please enter your age')
let age = dayUserInput.toLowerCase()


if (age > 18){
    console.log(age)
    console.log('You are old enough to drive bruv')
} else {
    console.log('You are still too young')
    console.log('You still have', (18 - age), 'years to go')
}