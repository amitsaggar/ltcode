x = 4;
r = x;
while (r*r > x) {
  r = Math((r + x/r) / 2) | 0;
  console.log(r + ' - ' + x);
}
console.log(r);