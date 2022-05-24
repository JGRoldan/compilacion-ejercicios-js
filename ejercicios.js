// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 
// 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example:
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0) return []

    arr=[]
    const sum=input.filter(num=>num<0).reduce((prev,next)=>prev+next)
    const cont=input.filter(num=>num>0).length
      
    arr.push(cont)
    arr.push(sum)
    return arr
}


// We need a function that can transform a string into a number. 

const stringToNumber = function(str){
    return +str
}


// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    arr=str.toLowerCase().split('')
    contX=0
    contO=0
    
    for (let i of arr){
      console.log(arr)
      if (i==='x') contX++
      if (i==='o') contO++
    }
    
    return contX===contO

}

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a,b){
  return (a+b).toString(2)
}
