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


//Random password 

function passwordRandom(input){
  arr=input.split('')
  password=arr.sort((a,b)=>Math.random()-0.5)
  return password.join('')
}

console.log(passwordRandom('yourpasswordwillberandom'))

// Write a function that takes in a string of one or more words, and returns the same string,
// but with all five or more letter words reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

const spinWords=(string)=>{
    let arr=string.split(' ')
    let textoFinal=[]
    for(const idx in arr){
      arr[idx].length>=5 
        ?textoFinal.push(arr[idx].split('').reverse().join(''))
        :textoFinal.push(arr[idx])
      }
    return textoFinal.join(' ')
}

// OR

const spinWords=(string)=>{
    return string.split(' ').map(word=>{
    return word.length>4 
    ? word.split('').reverse().join('')
    : word
    }).join(' ')
}


//Count characters in your string
//The main idea is to count all the occurring characters in a string. 

const contadorDeLetras = palabra =>{

    return palabra.split('').reduce((prev,act)=>{
      prev[act] ? prev[act]++ : prev[act] = 1
      return prev
    },{})
  }
  let palabra = 'otorrinolaringologo'
  let objLetras = contadorDeLetras(palabra)
  
  for (let i in objLetras){
    console.log(`Letra ${i.toUpperCase()} : ${objLetras[i]}`)
  }
//Output:
/*
Letra O : 6
Letra T : 1
Letra R : 3
Letra I : 2
Letra N : 2
Letra L : 2
Letra A : 1
Letra G : 2
*/
