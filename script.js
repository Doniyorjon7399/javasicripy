// 1-misol===================================================
/*
const arr = [1, 2, 3, 4, 5, 6];
function retArr(arr) {
  const resoult = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    resoult.push(arr[i]);
  }
  return resoult;
}
console.log(retArr(arr));
*/
// 2-misol============================================================================
/*
const a = 7,
  b = 7;
function maxNumber(A, B) {
  if (A == B) {
    return "sonalr teng";
  } else {
    return `${Math.max(A, B)} soni katta`;
  }
}
console.log(maxNumber(a, b));
*/
// 3-misol=============================================================================
/*
function countVowels(str) {
  const unli = ["a", "u", "i", "o", "e"];
  let item = 0;
  str
    .toLowerCase()
    .split("")
    .forEach((letter) => {
      for (let rend of unli) {
        if (letter === rend) {
          item++;
        }
      }
    });
  return item;
}
console.log(countVowels("Hello World"));
*/
// 4-misol===================================================================
/*
function factorial(n) {
  if (n <= 1) {
    return n;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));
*/
// 5-misol==============================================================================
/*
function isPalindrome(str) {
  const arr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(str[i]);
  }
  return str === arr.join("");
}
isPalindrome("madam");
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
*/
// 6-misol==========================================================================================
/*
function toUpperCase(str) {
  return str.toUpperCase();
}
console.log(toUpperCase("hello world"));
*/
// 7-misol=========================================================================================
/*
function getPositiveNumbers(arr) {
  return arr.filter((item) => item % 2 == 0 && item > 0);
}
console.log(getPositiveNumbers([-1, 2, -3, 4]));
*/
// 8-misol=======================================================================================
/*
function findLongestWord(str) {
  return str.split(" ").reduce((item, currentvalue) => {
    return item.length < currentvalue.length ? currentvalue : item;
  });
}
console.log(findLongestWord("I love programming"));
*/
// 9-misol====================================================================================
/*
function sumArray(arr) {
  let sum = 0;
  arr.forEach((item) => {
    sum += item;
  });
  return sum;
}
console.log(sumArray([1, 2, 3, 4]));
*/
// 10-misol====================================================================================
/*
function findMin(arr) {
  return arr.reduce((a, b) => {
    return a > b ? b : a;
  });
}
console.log(findMin([-9, 3, 5, 1, 8, -7]));
*/
