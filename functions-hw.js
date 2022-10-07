// 1.
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }

  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));

// 2.
const maxOfThree = function (x, y, z) {
  let max = 0
  if (x >= y) {
    max = x
  } else {
    max = y
  }
  if (z >= max) {
    max = z
  } else {
    return max;
  }
  return max;
}
console.log(maxOfThree(228, 2121, 8))

// 3.
function isCharAVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for(let i = 0; i < vowels.length;i++) {
    if (char.toLowerCase() === vowels[i]) {
      return true;
    }
}
return false;
}
console.log(isCharAVowel("A"))

// 4.
const sumArray = (args) => {
  let sum = 0
  for(let i = 0;i < args.length;i++) {
    sum += args[i]
  }
  return sum
}
console.log(sumArray([2,4,5]))

// 5.
function multipleArray(args) {
  let total = 1
  for(let i = 0;i < args.length;i++) {
    total *= args[i]
}
return total;
}
console.log(multipleArray([2,4,5]));

// 6.
const numArgs = (...args) => {
  return args.length
}
console.log(numArgs(1,2,3,4))

// 7.
function reverseString(string) {
  let reversed = "";
    
  for (let i = string.length - 1; i >= 0; i--) {
      reversed += string[i];
  }

  return reversed;
}
console.log(reverseString("rockstar"))

// 8.
const longestStringInArray = function(args) {
  let i = 0
  args.forEach((string) => {
    if(string.length > i) {
      i = string.length
    }
  });
  return i
}
console.log(longestStringInArray(["hello", "long", "longer", "longest"]))

// 9.
function stringsLongerThan(num, args) {
  let finalArr = []
  args.forEach((function(string) {
    if(string.length > num) {
      finalArr.push(string)
    }
  }));
  return finalArr
}
console.log(stringsLongerThan(3, ['say', 'hello', 'in', 'the', 'morning']))