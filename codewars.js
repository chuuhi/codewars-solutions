// 1 - 8 kyu - Function 1 - hello world
function greet(){
    return "hello world!"
  }

// 2 - 8 kyu - Opposites Attract
function lovefunc(flower1, flower2){
    // moment of truth
    if (flower1 % 2 === 0 && flower2 % 2 !== 0){
      return true;
    }else if (flower2 % 2 === 0 && flower1 % 2 !== 0){
      return true;
    }else{
      return false;
    }
  }

// 3 - 8 kyu - Simple multiplication
function simpleMultiplication(number) {
    // your code........
  if(number % 2 === 0){
    return number * 8;
  }else{
    return number * 9;
  }
}
// 4 - 8 kyu - Are You Playing Banjo?
function areYouPlayingBanjo(name) {
    if(name[0].toLowerCase() === 'r'){
      return `${name} plays banjo`;
    }else{
      return `${name} does not play banjo`;
    } 
  }

// 5 - 8 kyu - DNA to RNA Conversion
function DNAtoRNA(dna) {
    let rna = ""; 
    for (let i = 0; i < dna.length; i++) { 
      if (dna[i] === 'T') { 
        rna += 'U'; 
      } else {
        rna += dna[i]; 
      }
    }
    return rna; 
  }
// 6 - 8 kyu - Convert a Number to a String!
  function numberToString(num) {
    return num.toString();
  }

// 7 - 8 kyu - Grasshopper - Basic Function Fixer
  function addFive(num) {
    let total = num + 5
    return total
  }

// 8 - 8 kyu - Grasshopper - Check for factor
  function checkForFactor (base, factor) {
    if (base % factor === 0){
      return true;
    }else{
      return false;
    }
  }
// 9 - 8 kyu - Grasshopper - Array Mean
  function findAverage(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum / nums.length;
  }
// 10 - 8 kyu - Removing Elements
  function removeEveryOther(arr){
    for (let i = arr.length - 1; i >= 0; i--) {
      if (i % 2 !== 0) { 
        arr.splice(i, 1);
      }
    }
    return arr;
  }

// 11 - 8 kyu - Beginner - Reduce but Grow
  function grow(x){
    let product = 1;
      for (let i = 0; i < x.length; i++) {
        product *= x[i];
      }
      return product;
    }

// 12 - 8 kyu - Remove First and Last Character
    function removeChar(str){
        return str.slice(1, -1);
      }
    
// 13 - 8 kyu - Thinkful - Logic Drills: Traffic light
function updateLight(current) {
    if (current === "green"){
      return "yellow";
    }else if (current === "yellow"){
      return "red";
    }else if (current === "red"){
      return "green";
    }
  }

// 14 - 8 kyu - If you can't sleep, just count sheep!!
  let countSheep = function (num){
    let result = ""
    for (let i = 1; i <= num; i++){
      result +=`${i} sheep...`
    }
    return result
  }
// 15 - 8 kyu - Counting sheep...
  function countSheeps(sheep){
    let count = 0;
    for (let i = 0; i < sheep.length; i++){
      if (sheep[i] === true){ 
        count++;
      }
    }
    return count;
  }

// 16 - 7 kyu - The highest profit wins! (my first 7 kyu!)
  function minMax(arr){
    let minValue = Math.min(...arr)
    let maxValue = Math.max(...arr)
    return [ minValue, maxValue ]; 
  }

// 17 - 8 kyu - Transportation on vacation
  function rentalCarCost(d) {
    let total = 40 * d
    if(d >= 7){
      return total - 50
    }else if(d >= 3){
      return total - 20
    }else{
      return total
    } 
  }
// 18 - 8 kyu- What is between?
  function between(a, b) {
    let arr = []
    for (i = a; i <= b; i++){
      arr.push(i)
    } return arr
  } 

// 19 - 8 kyu - Sum without highest and lowest number
  function sumArray(array) {
    if(!array){
      return 0
    }else{
      let sortArr = array.sort((a, b) => a - b);
      let sliceArr = sortArr.slice(1, array.length - 1);
      let sumArr = sliceArr.reduce((acc, c) => acc + c, 0);
      return sumArr
    }
  }

// 20 - 8 kyu- Sum Mixed Array
  function sumMix(x){
    return x.reduce((acc,c) => acc + Number(c), 0)
  }

// 21 - 8 kyu - Will there be enough space?
  function enough(cap, on, wait) {
    if(cap >= on + wait){
      return 0
    }else{
      return (on + wait) - cap
    }
  }

// 22 - 8 kyu- Grasshopper - Terminal game move function
  function move (position, roll) {
    return position + (roll * 2)
  }

// 23 - 8 kyu - You Can't Code Under Pressure #1
  function doubleInteger(i) {
    return i * 2;
  }

// 24 - 7 kyu- Friend or Foe?
  function friend(friends){
    return friends.filter(function (name){
        return name.length === 4
    })
}

// 25 - 8 kyu - A Needle in the Haystack
function findNeedle(haystack) {
    let index = haystack.indexOf('needle')
    return `found the needle at position ${index}`
 }

// 26 - 7 kyu - Odd or Even?
 function oddOrEven(array) {
    let sum = array.reduce((acc,c) => acc + c, 0)
    if (sum % 2 === 0){
      return "even"
    }else{
      return "odd"
    }
 }

// 27 - 8 kyu - Count by X
 function countBy(x, n) {
    let z = []
    for (let i = 1; i <= n; i++){
      z.push(x * i)
    }
    return z
  }

// 28 - 8 kyu - Remove exclamation marks
  function removeExclamationMarks(s) {
    return s.replaceAll('!', '')
  }

// 29 - 8 kyu - Grasshopper - Personalized Message
  function greet (name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest'
  }

// 30 - 8 kyu - Beginner - Lost Without a Map
  function maps(x){
    return x.map(n => n * 2)
  }

// 31 - 8 kyu - Abbreviate a Two Word Name
  function abbrevName(name){
    const nameParts = name.split(' ')
    const firstInitial = nameParts[0].charAt(0).toUpperCase()
    const lastInitial = nameParts[1].charAt(0).toUpperCase()
    return `${firstInitial}.${lastInitial}`
  }

// 32 - 8 kyu - Double Char
  function doubleChar(str) {
    return str.split('').map(char => char + char).join('')
  }

// 33 - 8 kyu - Switch it Up!
  function switchItUp(number) {
    switch (number) {
      case 0: return 'Zero'
      case 1: return 'One'
      case 2: return 'Two'
      case 3: return 'Three'
      case 4: return 'Four'
      case 5: return 'Five'
      case 6: return 'Six'
      case 7: return 'Seven'
      case 8: return 'Eight'
      case 9: return 'Nine'
    }
  }

// 34 - 8 kyu - Calculate average
  function findAverage(array) {
    if (array.length === 0){
      return 0
    }else{
    sum = array.reduce((acc,c) => acc + c, 0)
    return sum / array.length
    }
  }

// 35 - 8 kyu - How good are you really?
  function betterThanAverage(classPoints, yourPoints) {
    let peerScores = classPoints.reduce((acc,c) => acc + c, 0) / classPoints.length
    return yourPoints > peerScores ? true : false
  }

// 36 - 7 kyu - Number of People in the Bus
  function number(busStops) {
    return busStops.reduce((totalPeople, stop) => totalPeople + stop[0] - stop[1], 0)
  }
// 37 - 7 kyu - Fizz Buzz
  function fizzbuzz(n){
    let fizzBuzz = []
    for (let i = 1; i <= n; i++){
      if (i % 3 === 0 && i % 5 === 0){
        fizzBuzz.push("FizzBuzz")
      }else if (i % 3 === 0){
        fizzBuzz.push("Fizz")
      }else if (i % 5 === 0){
        fizzBuzz.push("Buzz")
      }else{
        fizzBuzz.push(i)
      } 
    }
    return fizzBuzz
  }

// 38 - 8 kyu - Convert number to reversed array of digits
  function digitize(n) {
    let str = n.toString()
    let reverse = str.split('').reverse()
    return reverse.map(Number)
  }

// 39 - 6 kyu - Are they the "same"?

function comp(array1, array2){
  if (!array1 || !array2){
    return false;
  }
  
  if (array1.length !== array2.length){
    return false;
  }
  
  const sorted1 = array1.slice().sort((a,b)=> a - b);
  const sorted2 = array2.slice().sort((a,b)=> a - b);
  const sortedSquared1 = sorted1.map(x => x * x);
  
  return sortedSquared1.every((val,i) => val === sorted2[i]);
}

// 40 - 6 kyu - Consecutive strings

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length || strarr.length === 0){
    return ""
  }
  
  let maxLength = 0
  let result = ""
  
  for (let i = 0; i <= strarr.length - k; i++){
    let combined = ""
    for (let j = i; j < i + k; j++){
      combined += strarr[j]
    }
    if (combined.length > maxLength){
      maxLength = combined.length
      result = combined
    }
  }
  return result
}