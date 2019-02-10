var isScramble = function(s1, s2) {
    if (s1 == s2) return true; 
    
    let letters = new Array(26);
    for (i=0; i<s1.length; i++) {
        letters[s1.charAt(i)-'a']++;
        letters[s2.charAt(i)-'a']--;
    }

    for (i=0; i<26; i++) if (letters[i]!=0) return false;

    for (i=1; i<s1.length; i++) {
        if (isScramble(s1.substring(0,i), s2.substring(0,i)) 
          && isScramble(s1.substring(i), s2.substring(i))) return true;
        if (isScramble(s1.substring(0,i), s2.substring(s2.length()-i)) 
          && isScramble(s1.substring(i), s2.substring(0,s2.length()-i))) return true;
    }
    return false;
}

s1 = "great", s2 = "rgeat";

console.log(isScramble(s1,s2));