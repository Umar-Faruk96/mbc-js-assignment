/* 
**************************************
Assignment: WSE Javascript Course
Instructor: Abdul Alim Emon
Assignee: Omor Faruk
End Date: October 25, 2023, at 8:00 PM
***************************************
*/

// Problem 1: Write a function to calculate the area of a triangle.
function calculateTriangleArea(base, height, measurement) {
    if (typeof base !== "number" || typeof height !== "number")
        return "Provide valid numbers, Please!";

    // want to deal with positive numbers only, uncomment this
    /* else if (base < 0 || height < 0)
        return "Provide positive numbers, Please!"; */

    return "The total area is " + (base * height) / 2 + " square " + measurement + ".";
}

const triangleArea = calculateTriangleArea(6, 8, "units");
//console.log(triangleArea);


// Problem 2: Write a function to convert degrees to radians.
function convertDegreesToRadians(degrees) {
    if (typeof degrees === "number")
        return "Radains: " + degrees * (Math.PI / 180) + ".";

    return "Please, Provide a number!";
}

const radians = convertDegreesToRadians(45);
//console.log(radians);


// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.
function calculateFactorial(number) {
    if (typeof number !== "number" || number < 0)
        return "Provide a positive number, Please!";

    let factorial = 1;

    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }
    return "The Factorial of " + number + " is: " + factorial + ".";
}

const factorial = calculateFactorial(5);
console.log(factorial);


// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.
function isPrime(number) {
    if (typeof number !== "number" || number <= 1)
        return false;

    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0)
            return false;
    }

    // another aproach
    /* for (let factor = 2; factor <= Math.sqrt(num); factor++) {
        if (num % factor === 0)
            return false;
    } */

    return true;
}

const primeOrNot = isPrime(10);
//console.log(primeOrNot);

// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.
function mergeArrays(arr1, arr2) {
    if (arr1 instanceof Array !== true || arr2 instanceof Array !== true)
        return "Provide an array, please";

    return arr1.concat(arr2);
}

const deshiFruits = ["Banana", "Mango", "Lychee"];
const foreignFruits = ["Apple", "Mandarine", "Grape"];
//console.log(mergeArrays(deshiFruits, foreignFruits));


// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.
function isLeapYear(year) {
    if (typeof year === "number" && year > 0) {
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
            return "This is a leap year."
        else
            return year + " is Not Leap year."
    }

    return "Provide a positive number please!";
}

const leapYear = isLeapYear(2023);
//console.log(leapYear);


// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.
function removeDuplicates(arr) {
    let unique = [];

    for (let i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1)
            unique.push(arr[i]);
    }

    return unique;
}

const duplicateArr = ["Banana", "Guava", "JackFruit", "Mango", "Banana", "Mango"];
const notDuplicate = removeDuplicates(duplicateArr);
//console.log(notDuplicate);


// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
function convertToCelsius(fahrenheitTemp) {
    if (typeof fahrenheitTemp !== "number")
        return 0;

    return (fahrenheitTemp - 32) * (5 / 9);
}
const celsiusTemp = convertToCelsius(68);
//console.log(celsiusTemp);


// Problem 9: Write a function to find the maximum of five numbers.
function findMaximum(num1, num2, num3, num4, num5) {
    let maximum = num1;
    const numsArray = [num2, num3, num4, num5];

    for (let i = 0; i < numsArray.length; i++) {
        if (numsArray[i] > maximum)
            maximum = numsArray[i];
    }

    return maximum;
}

const maximumNum = findMaximum(10, 25, 31, 4, 5);
//console.log(maximumNum);


// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]
function evenOdd(string) {
    if (typeof string !== "string")
        return "Provide a string, Please!"

    const strLength = string.length;

    if (strLength % 2 !== 0)
        return "odd";

    return "even";
}

//const isEvenOrOdd = evenOdd("Javascript");
const isEvenOrOdd = evenOdd("Hello");
//console.log(isEvenOrOdd);