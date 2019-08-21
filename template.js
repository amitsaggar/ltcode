var templateHashCount = function(S = "ABC") {
  let hashMap = S.split("").reduce((obj, item) => {
    obj[item] = obj.hasOwnProperty(item) ? obj[item] + 1: 1;
    return obj;
  }, {});
  return hashMap;
}

const objArr = (array) => array.reduce((obj, item) => {
    obj[item] = obj.hasOwnProperty(item) ? obj[item] + 1: 1;
    return obj;
  }, {});

console.log(objArr(["A", "B", "C"]));
console.log(templateHashCount("ABC"));