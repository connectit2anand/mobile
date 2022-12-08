const primeCalulate = (number) => {
  if(number == 2) {return true;}
  for(var i = 2; i < number/2; ++ i) {
    if(number % i == 0) {
      return false;
    }
  }
  return false;
}

console.log(primeCalulate(17));
var j = 0;
console.log(j);
var i = 0;
console.log(i);
