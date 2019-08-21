function Trie() {

  let Node = function() {
    this.keys = new Map();
    this.end = false;
    this.setEnd = function() {
      return this.end = true;
    }
    this.isEnd = function() {
      return this.end;
    }
  }

  this.root = new Node();

  this.add = function(input, node = this.root) {

    if(input.length == 0) {
      node.setEnd();
      // console.log(node);
      return;
    } else if(!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else { // if char from input is a key - recurse with one char less for add.
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  }

  this.isWord = function(word){
    let node = this.root;
    while(word.length != 0) {
      if(!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      }
    }
    return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true: false;
  }
}

let n = new Trie();
n.add("apple");
console.log(n.isWord("apple"));
console.log(n.isWord("app"));

/*
let Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    return this.end = true;
  }
  this.isEnd = function() {
    return this.end;
  }
}

class Trie {

  constructor(){
    this.root = new Node();
  }

  add(input, node = this.root) {
    if(input.length == 0) {
      node.setEnd();
      return;
    } else if(!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else { // if char from input is a key - recurse with one char less for add.
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  }

  isWord(word){
    let node = this.root;
    while(word.length != 0) {
      if(!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      }
    }
    return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true: false;
  }
}

let n = new Trie();
n.add("apple");
console.log(n.isWord("apple"));
console.log(n.isWord("app"));
*/
