function TrieNode() {
  this.children = {};
  this.isEnd = false;
}

var WordDictionary = function() {
  this.root = new TrieNode();
}

WordDictionary.prototype.addWord = function(word) {
  let current = this.root;

  for(let i = 0; i < word.length; i++ ) {
    let char = word.charAt(i);
    if(!(char in current.children)) {
      current.children[char] = new TrieNode();
    }
    current = current.children[char];
  }
  current.isEnd = true;
}

WordDictionary.prototype.search = function(word) {
  var search = function(current, level) {
    if(!current || (word.length == level && current.isEnd == false)) {
      return false;
    }

    if(level === word.length && current.isEnd) {
      return true;
    }

    if(word[level] == ".") {
      for (let i = 0; i < 26; i++) {
        var ch = String.fromCharCode(97 + i);
        
        if (search(current.children[ch], level + 1)) {
            return true;
        }
      }
      return false;      
    }

    return search(current.children[word[level]], level + 1);
  };

  return search(this.root, 0);
}

WordDictionary.prototype.print = function() {
  console.log(JSON.stringify(this.root));
}

let dict = new WordDictionary();
dict.addWord("add");
dict.addWord("bad");
// dict.print();
console.log(dict.search("baa"));