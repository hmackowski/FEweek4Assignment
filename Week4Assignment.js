// Assignment 1
console.log('\nAssignment 1:');

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Assignment 1a
console.log('\nAssignment 1a:');

console.log(ages[ages.length - 1] - ages[0]);

// Assignment 1b
console.log('\nAssignment 1b:');

let numbers = [5,3,7,3,87,3,78,4,8,15,26,15,85,2,5,7,23,6]
console.log(numbers[numbers.length - 1] - numbers[0]);

// Assignment 1c
console.log('\nAssignment 1c:');

let sum1 = 0;
for ( let i = 0; i <= ages.length - 1; i++){
    sum1 = sum1 + ages[i];
}
 console.log(sum1 / (ages.length));

 // Assignment 2
 console.log('\nAssignment 2:');

 let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

 // Assignment 2a
 console.log('\nAssignment 2a:');

 let nameSum = 0;
 for(let i = 0; i <= names.length - 1; i++){
    nameSum = nameSum + names[i].length;    
 }
 
 console.log(nameSum / names.length);

 // Assignment 2b
 console.log('\nAssignment 2b:');

 let newString = '';
 for(let i = 0; i <= names.length - 1; i++){
    newString = newString + names[i].concat(' ');    
 }
 console.log(newString);

 // Assignment 3
 console.log('\nAssignment 4:');

 console.log('3.	How do you access the last element of any array? \narray.length - 1');

 // Assignment 4
 console.log('\nAssignment 4:');
console.log('4.	How do you access the first element of any array? \narray[0]');


 // Assignment 5
 console.log('\nAssignment 5:');

  let nameLengths = [];
  for ( let i = 0; i <= names.length - 1 ; i++){
    nameLengths[i] = names[i].length;
  }
  console.log(nameLengths);
 
  // Assignment 6
  console.log('\nAssignment 6:');

  let nameLengthSum = 0;
for (let i = 0; i <= nameLengths.length - 1; i++){
    nameLengthSum = nameLengthSum + nameLengths[i];
}
console.log(nameLengthSum);

  // Assignment 7
  console.log('\nAssignment 7:');

  function concateMe(word, n){
    let concateString = '';
    for(let i = 1; i <= n; i++){
        concateString = concateString + word;
    }
   console.log(concateString);
  }
  concateMe('Hello', 3);

 // Assignment 8
 console.log('\nAssignment 8:');
 let myName = '';
function fullName(firstName, lastName){
    myName = `${firstName} ${lastName}`;
    return myName;
}

console.log(fullName('Haskell', 'Mackowski'));

// Assignment 9
console.log('\nAssignment 9:');

function arrayNum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        sum += arr[i];
      }
      //console.log(sum);
      return sum > 100;
}
console.log(arrayNum(ages));

// Assignment 10
console.log('\nAssignment 10:');

function average(arr){
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        sum += arr[i];
      }
      //console.log(sum);
      return sum / arr.length;
}
console.log(average(ages));

// Assignment 11
console.log('\nAssignment 11:');


let ages2 = [5,9,8,32,17,15,7,25];

function firstArray(arr1, arr2) {
    let sum1 = 0, sum2 = 0;
    for (let i = 0; i < arr1.length; i++) {
      sum1 += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
      sum2 += arr2[i];
    }
    let avg1 = sum1 / arr1.length;
    let avg2 = sum2 / arr2.length;
    return avg1 > avg2;
  }
  
  console.log(firstArray(ages, ages2));

  // Assignment 12
console.log('\nAssignment 12:');

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
  }

  console.log(willBuyDrink(true, 85.50));

    // Assignment 13
console.log('\nAssignment 13:');


/*
The function pipeOffsetCalc takes in a number 
(the measurement between the centers of two pipes) 
and the size of the pipe (2 inch pipe, or 3 inch pipe), then calculates the length of 
pipe you must cut in order to offet the pipe in a 45 degree angle
*/

function pipeOffsetCalc(distanceBetweenBothCenters, pipeSize){
    if (pipeSize === 2){
        return (distanceBetweenBothCenters * 1.414) - 3;
    } else if(pipeSize === 3){
        return (distanceBetweenBothCenters * 1.414) - 3.5;
    } else {
        return 'Not a valid pipe size';
    }
}

console.log(pipeOffsetCalc(16, 2));
console.log(pipeOffsetCalc(16, 5));