console.log("Script Loaded!");

/*
Assignment - LECTURE: Values and Variables
1. Declare variables called 'country','continent' and 'population' and assign their values according to your owncountry (population in millions)
2. Log their values to the console
*/

// Solution

let country = "Nigeria";
let continent = "Africa";
let population = 213000000;

console.log(country);
console.log(continent);
console.log(population);

/*
Assignment - LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your 
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
*/

// Solution

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "Yoruba";

/*
Assignment - LECTURE: Basic Operators
1. If your country split in half, and each half would contain half the population, 
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than 
Finland?
4. The average population of a country is 33 million people. Does your country 
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million 
people speak portuguese'
*/

// Solution

let countryFirstHalf, countrySecondHalf;
countryFirstHalf = countrySecondHalf = population / 2;
console.log(countryFirstHalf, countrySecondHalf);

population++;
console.log(population);

let finlandPopulation = 6000000;
console.log(population > finlandPopulation);

const averagePopulation = 33000000;
console.log(population < averagePopulation);

let description = country + " is in " + continent + ", and its " + population + " people speak " + language + ".";
console.log(description);


/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.
*/

// Solution

// Test for Data 1

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
let markBmi = markMass / markHeight ** 2;
let johnBmi = johnMass / johnHeight ** 2;
const markHigherBMI = markBmi > johnBmi;

console.log(markBmi, johnBmi, markHigherBMI);


/* Test for Data 2

let markMass = 95;
let markHeight = 1.88;
let johnMass = 85;
let johnHeight = 1.76;

let markBmi = markMass / markHeight ** 2;
let johnBmi = johnMass / johnHeight ** 2;
const markHigherBMI = markBmi > johnBmi;

console.log(markBmi, johnBmi, markHigherBMI);
*/


/*
Assignment - LECTURE: Strings and Template Literals
1. Recreate the 'description' variable from the last assignment, this time 
using the template literal syntax
*/

// Solution

let descriptionNew = `${country} is in ${continent}, and its ${population} people speak ${language}.`;
console.log(descriptionNew);