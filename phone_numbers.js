/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/

var letterCombinations = function(digits) {
  if (digits.length === 0) return []

  const digitToLetters = [null, null, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

  let combinations = ['']
  
  for (let digit of digits) {
      const letters = digitToLetters[digit] 
      const newCombinations = []
     
      for (let letter of letters) {
        //   console.log(combinations);
          for (let combination of combinations) {
              newCombinations.push(combination + letter)
          }
      }
      
      combinations = newCombinations
  }

  return combinations
};

console.log( letterCombinations("23") );