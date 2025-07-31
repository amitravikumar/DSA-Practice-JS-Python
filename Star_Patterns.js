let arr = [1,2,3,4,-12.9,15,-18, 15, 4];

// const findIndexInArray = (num) => {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === num) return i;
//     }
//     return -1;
// }

// function findIndexInArray(nums){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === nums) return i;
//     }
//     return -1;
// }

// const findNegativeNumbers = (arr) => {
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < 0) count++;
//     }
//     return count;
// }

// const largestNumber = (arr) => {
//     if(arr.length === 0) return -1;
//     let currentNumber = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > currentNumber) currentNumber = arr[i];
//     }
//     return currentNumber;
// }


// const secondLargestNumber = (arr) => {
//     if(arr.length < 2) return null;
//     let largest = -Infinity;
//     let secondLargest = -Infinity;
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > largest){
//             secondLargest = largest;
//             largest = arr[i];
//         } else if(arr[i] > secondLargest && arr[i] != largest){
//             secondLargest = arr[i];
//         }
//     }
//     return secondLargest;
// }

// for(i = 5; i > 0; i--){
//     for(j = 0; j < i; j--){
//         console.log(i,j)
//     }
// }

// 5 0
// 5 1
// 5 2
// 5 3
// 5 4
// 4 0
// 4 1
// 4 2
// 4 3
// 3 0
// 3 1
// 3 2
// 2 1
// 2 0
// 1 0

// const starPattern = (n) => {
//     for(let i = 0; i < n; i++){
//         let row = "";
//         for(j = 0; j < i + 1; j++){
//             row = row + " *"
//         }
//         console.log(row);
//     }
// }

// const numberPattern = (n) => {
//     for(let i = 0; i < n; i++){
//         let number = "";
//         for(let j = 0; j <= i; j++){
//             number = number + ` ${j+1}`;
//         }
//         console.log(number);
//     }
// }

// const duplicateNumber = (n) => {
//     for(let i = 0; i < n; i++){
//         let row = "";
//         for(let j = 0; j <= i; j++){
//             row = row + ` ${i+1}`
//         }
//         console.log(row);
//     }
// }

// const reverseNumber = (n) => {
//     for(let i = n; i > 0; i-- ){
//         let row = "";
//         for(let j = 0; j < i; j++){
//             row = row + ` ${j+1}`
//         }
//         console.log(row);
//     }
// }

const reverseStar = (n) => {
    for(let i = n; i > 0; i-- ){
        let row = "";
        for(let j = 0; j < i; j++){
            row = row + ` *`
        }
        console.log(row);
    }
}

/*
Output for the reverse Star

* * * * * *
 * * * * *
 * * * *
 * * *
 * *
 *
*/

// const reverseStar2 = (n) => {
//     for(let i = 0; i < n; i++){
//         let row = "";
//         for(let j = 0; j < n - (i + 1); j++){
//             row = row + " ";
//         }
//         for(k = 0; k < i+1; k++){
//             row = row + `${k+1}`
//         }
//         console.log(row);
//     }
// }

/*
Output for reverseStar2
     1
    12
   123
  1234
 12345
123456
*/

// const zeroOneAlter = (n) => {
//     for(let i = 0; i < n; i++){
//         let row = "";
//         let switchItem = 1;
//         for(let j = 0; j <= i; j++){
//             row = row + ` ${switchItem}`
//             if(switchItem === 1){
//                 switchItem = 0
//             } else {
//                 switchItem = 1
//             }
//         }
//         console.log(row);
//     }
// }

/*
Output for zeroOneAlter

1
 1 0
 1 0 1
 1 0 1 0
 1 0 1 0 1
 1 0 1 0 1 0
*/

// const zeroOneNoRefresh = (n) => {
//     let switchItem = 1;
//     for(let i = 0; i < n; i++){
//         let row = "";
//         for(let j = 0; j <= i; j++){
//             row = row + ` ${switchItem}`
//             if(switchItem === 1){
//                 switchItem = 0;
//             } else {
//                 switchItem = 1;
//             }
//         }
//         console.log(row)
//     }
// }

/*
ZeroOneNoRefresh Output
1
 0 1
 0 1 0
 1 0 1 0
 1 0 1 0 1
 0 1 0 1 0 1
*/

const countDigits = (num) => {
    if(num === 0) return 1;
    num = Math.abs(num);
    let numCount = 1;
    while(num > 0){
        num = Math.floor(num/10);
        if(num > 0) numCount++;
    }
    return numCount;
}

const PalindromeNumber = (num) => {
    if(num === 0) return true;
    if(!num === 0) return false;
    let numCopy = num;
    let reverseNum = 0;
    while(num > 0){
        let rem = num % 10;
        reverseNum = (10*reverseNum) + rem;
        num = Math.floor(num / 10);
    }
    if(numCopy === reverseNum){
        return true
    } else {
        return false
    }
}


console.log(PalindromeNumber(121));
// console.log(starPattern(4));

// console.log(secondLargestNumber(arr));