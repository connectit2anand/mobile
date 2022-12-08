var num = 17;
var isPrime = true;
for(i = 2; i < num; ++ i) {
  if(num % 2 == 0) {
    isPrime = false;
    break;
   }
}

console.log(isPrime);
