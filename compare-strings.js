let A = "abcd aabc bd".split(" ");
let B = "aaa aa".split(" ");
{
  0: {
    a: 3
  },
  1: {
    a: 2
  }
}

let mapForB = B.forEach(element => element.split("").reduce((mapB, ele, key) => {
  mapB[key] = {}
  mapB[key][ele] = (mapB[key][ele] != undefined) ? parseInt(mapB[key][ele]) + 1 : 1;
  console.log(mapB[key]);
  return mapB;
}, {}));

console.log(mapForB)