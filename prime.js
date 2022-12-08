var num = 17;
var counte = 0;
for (var i = 1; i < num; i++) {
  if (num % i == 0) {
    counte++;
  }
}
if (counte == 2) {
  console.log(" Prime Number");
}
else {
  console.log("not a Prime");
}