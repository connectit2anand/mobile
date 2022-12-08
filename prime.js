var num = 17;
var counter = 0;
for (var i = 1; i <= num; i++) {
  if (num % i == 0) {
    counter++;
  }
}
if (counter == 2) {
  console.log(" Prime Number");
}
else {
  console.log("not a Prime");
}

for(var i = 0; i < 10; ++ i) {
  console.log(i);
}
