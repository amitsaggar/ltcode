class Permutation 
{
  constructor() {
    this.result = [];
    this.lookup = {};
  } 

  swap(a, i, j) 
	{ 
    let temp = null;
		let charArray = a.split(""); 
		temp = charArray[i] ; 
		charArray[i] = charArray[j]; 
		charArray[j] = temp; 
		return charArray.join(""); 
	} 

	permute(str, l, r) 
	{ 
		if (l == r && this.lookup[str] == undefined) { 
      this.lookup[str] = 0;
      this.result.push(str);
    } else
		{ 
			for (let i = l; i <= r; i++) 
			{ 
				str = this.swap(str,l,i); 
				this.permute(str, l+1, r); 
				str = this.swap(str,l,i); 
			}
    }
    return this.result; 
	} 

} 

let str = "112"; 
const n = str.length; 
permutation = new Permutation(); 
let res = permutation.permute(str, 0, n-1, []); 
console.log(res);