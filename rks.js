class RabinKarpSearch {

  constructor() {
    this.prime = 101;
  }
  
  patternSearch(text, pattern){
      let m = pattern.length;
      let n = text.length;
      let patternHash = this.createHash(pattern, m - 1);
      let textHash = this.createHash(text, m - 1);
      for (let i = 1; i <= n - m + 1; i++) {
          if(patternHash == textHash && this.checkEqual(text, i - 1, i + m - 2, pattern, 0, m - 1)) {
              return i - 1;
          }
          if(i < n - m + 1) {
              textHash = this.recalculateHash(text, i - 1, i + m - 1, textHash, m);
          }
      }
      return -1;
  }
  
  recalculateHash(str, oldIndex, newIndex, oldHash, patternLen) {
      let newHash = oldHash - str[oldIndex].charCodeAt(0);
      newHash = newHash/this.prime;
      newHash += parseInt(str[newIndex].charCodeAt(0)) * Math.pow(this.prime, patternLen - 1);
      return newHash;
  }
  
  createHash(str, end) {
      let hash = 0;
      for (let i = 0 ; i <= end; i++) {
          hash += parseInt(str[i].charCodeAt(0)) * Math.pow(this.prime,i);
      }
      return hash;
  }
  
  checkEqual(str1, start1, end1, str2, start2, end2){
      if(end1 - start1 != end2 - start2) {
          return false;
      }
      while(start1 <= end1 && start2 <= end2){
          if(str1[start1] != str2[start2]){
              return false;
          }
          start1++;
          start2++;
      }
      return true;
  }
  
}

let rks = new RabinKarpSearch();
console.log(rks.patternSearch("amitsaggar".split(""), "saggar".split("")));
