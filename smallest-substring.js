function getShortestUniqueSubstring(arr, str) {
  if(str.length == 0 
     || arr.length == 0 
     || str.length < arr.length) {
    return "";
  }
  // Get the lookup map ready.
  let map = new Map();
  for (var key of arr) {
    let val = (map.get(key) == undefined) ? 0 : map.get(key) + 1;
    map.set(key, val);
  }
  // Map to be displayed from array.
  // console.log(map);
  
  let n = str.length;
  let i = 0;
  let j = 0;
  let formed = 0;
  let windowCounts = new Map();
  let result = [-1, 0, 0];
  
  while(j < n) {
    let charAtJ = str[j];

    // Get another lookup ready for confirmation.
    let val = (windowCounts.get(charAtJ) == undefined) ? 0 : windowCounts.get(charAtJ) + 1;
     windowCounts.set(charAtJ, val);
    
    // Increase the formed as it will help us to compare with arr.length
    if (map.get(charAtJ) != undefined && windowCounts.get(charAtJ) == map.get(charAtJ)) {
        formed++;
    }

    // Try and contract the window till the point where it ceases to be 'desirable'.
    while (i <= j && formed == arr.length) {
        let c = str.charAt(i);
        // Save the smallest window until now.
        if (result[0] == -1 || j - i + 1 < result[0]) {
            result[0] = j - 1 + 1;
            result[1] = i;
            result[2] = j;
        }

        windowCounts.set(c, windowCounts.get(c) - 1);
        if (windowCounts.get(c) < map.get(c)) {
            formed--;
        }

        // Move the left pointer ahead, this would help to look for a new window.
        i++;
    }
    j++;
  }
  return result[0] == -1 ? "" : str.substring(result[1], result[2] + 1);
}

console.log(getShortestUniqueSubstring(['x','y','z'], "xyyzyzyx"));