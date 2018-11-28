/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4

Soln: Algorithm

Iterate over all the elements in \text{nums}nums
If some number in \text{nums}nums is new to array, append it
If some number is already in the array, remove it

https://leetcode.com/articles/single-number/

Approach 4: Bit Manipulation
Concept

If we take XOR of zero and some bit, it will return that bit
a \oplus 0 = aa⊕0=a
If we take XOR of two same bits, it will return 0
a \oplus a = 0a⊕a=0
a \oplus b \oplus a = (a \oplus a) \oplus b = 0 \oplus b = ba⊕b⊕a=(a⊕a)⊕b=0⊕b=b
So we can XOR all bits together to find the unique number.
*/

var singleWay = function(arr) {
  function myXOR(a,b) {
    return ( a || b ) && !( a && b );
  }

  var a = 0;
  arr.forEach(i => {
    a = myXOR(a,i);
    console.log( a );
  });

  return a;

}

console.log( singleWay([4,1,2,1,2]) );