<<<<<<< HEAD
var num = 17;
var counte = 0;
for (var i = 1; i < num; i++) {
  if (num % i == 0) {
    counte++;
=======
const primeCalulate = (number) => {
  if(number == 2) {return true;}
  for(var i = 2; i < number/2; ++ i) {
    if(number % i == 0) {
      return false;
    }
>>>>>>> 73dba6bd424eafdb1790c593179faf1a35246de9
  }
  return false;
}
<<<<<<< HEAD
if (counte == 2) {
  console.log(" Prime Number");
}
else {
  console.log("not a Prime");
}
=======

console.log(primeCalulate(17));
var j = 0;
console.log(j);
var i = 0;
console.log(i);
>>>>>>> 73dba6bd424eafdb1790c593179faf1a35246de9
