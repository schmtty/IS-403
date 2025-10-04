// Write a program that uses several prompts to gather the user's first name, 
// last name, street address, city, state, and birth year. 
// Prompt the user to enter all of the data, including the current year, 
// and store the data to variables. Then calculate the age of the individual 
// based upon the current year stored in the variable. Now use a single alert() 
// to display the concatenated full name separated by a space, the address on a new line, 
// and the city and state on another new line separated by a tab. Continue adding to 
// the current code in the alert() function by displaying the calculated age in years on 
// another new line concatenated with "In 2025 ZZ will be XX years old"—where ZZ is the 
// first name and XX is the calculated age in years.

// Make sure you use prompt variable naming standards.

// The output in the alert() display should look similar to:

//User inputs
let sUserFirstName = prompt('Enter First Name: ')
let sUserLastName = prompt('Enter Last Name: ')
let sUserStreetAddress  = prompt('Enter Street Address: ')
let sUserCity = prompt('Enter City: ')
let sUserState = prompt('Enter State (e.g. UT, CO, AR...): ')
let iUserBirthYear = parseInt(prompt('Enter Birth Year: '))
//User age calculation
let iCurrentYear = new Date().getFullYear()
let iUserAge = iCurrentYear - iUserBirthYear
//Output
alert((sUserFirstName + ' ' + sUserLastName + '\n' + sUserStreetAddress + '\n' + sUserCity + '\t' + sUserState + 
    '\n' + sUserFirstName + ' is ' + iUserAge + ' years old!'))

