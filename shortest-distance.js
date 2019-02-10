// function shortestWordDistance(words, word1, word2) {
// 	var diff = words.length, p1 = -words.length, p2 = words.length;

// 	words.forEach((v, i) => {
//     if (v === word1 && v === word2)
//     { 
//       p2 = p1;      
//       p1 = i;
//       console.log( p1 + ' - ' + p2);
//     }
// 		else if (v === word1) p1 = i;
// 		else if (v === word2) p2 = i;

// 		diff = Math.min(diff, Math.abs(p1 - p2));
// 	});

// 	return diff;
// }

// let words = ["practice", "makes", "perfect", "coding", "makes"];
// let word1 = "makes"; 
// let word2 = "makes";
// console.log(shortestWordDistance(words, word1, word2));

// function sockMerchant(n, ar) {
//   let lookup = {};
//   let total = 0;
//   for (let i = 0; i < n; i++) {
//       if (lookup[ar[i]] != undefined) {
//           lookup[ar[i]] += 1;
//       } else {
//           lookup[ar[i]] = 1;
//       }
//   }

//   for (var prop in lookup) {
//     console.log( Math.ceil(lookup[prop]/2) );
//     total += Math.ceil(lookup[prop]/2);
//   }
  
//   return total;
// }

// console.log( sockMerchant(9, [10,20,20,10,10,30,50,10,20]));


// Complete the countingValleys function below.
// 1, 0-1-2 -1 -2 -1 0
// function countingValleys(n, s) {
//   let currLevel = 0;
//   let valleys = 0;
//   s = s.split('');
//   for (let i = 0; i < s.length; i++) {
//       //update the current level
//       if (s[i] === 'U') {
//           currLevel += 1;
//           if (currLevel == 0) {
//               valleys += 1;
//           }
//       } else {
//           currLevel -= 1;
//       }      
//   }
  
//   return valleys;
// }
// console.log(countingValleys(8, "UDDDUDUUDDDUDUUU"));

// Complete the jumpingOnClouds function below.
// function jumpingOnClouds(c) {
//   let currentCloud = 0;
//   let count = 0;
//   for(i=0; i<c.length; i++) {
//     if(currentCloud < c.length - 1) {
//       if(c[currentCloud + 2] == 0) {
//         currentCloud +=2;
//       } else {
//         currentCloud ++;
//       }
//       count++;
//     } else {
//       return count;
//     }
//   }
// }

// console.log(jumpingOnClouds([0,0,1,0,0,1,0]));
// aba
// function repeatedString(s, n) {
//   let len = s.length;
//   let times = Math.ceil(n / len);
//   let str = '';
//   for (let i = 0; i < times; i++) {
//       str += s;
//   }
//   let finals = str.substr(0, 10);
//   let count = 0;
//   for (let i = 0; i < finals.length; i++) {
//       if (finals.charAt(i) == 'a') {
//           count++;
//       }
//   }
//   return count;
// }

function repeatedString(s, n) {
  let c = 0;
  let ca = 0;
  let r = n % s.length;
  let o = Math.floor(n / s.length);
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == 'a') {
      c++;
    }
  }
  for (let i = 0; i < r; i++) {
    if (s.charAt(i) == 'a') {
      ca++;
    }
  }
  count = c*o+ca;

  return count;
}
console.log( repeatedString("aba", 10) );