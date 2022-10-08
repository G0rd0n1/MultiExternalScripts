const name = " Gordon\n"
const surname = "Dindi \n"
let age = 27 + "\n"
let address = 82 + " Homestead manor, Sandton " + 2193 + "\n"


console.log(" Name: " + name, "Surname: " + surname, "Age: " + age, "Address: " + address)

let isRaining = true
if (isRaining) {
  console.log('Remember to take your rain coat nxgga.')
}

let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  3 is a positive number

num = -3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  -3 is a negative number


let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}

// Switch More Examples
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()
