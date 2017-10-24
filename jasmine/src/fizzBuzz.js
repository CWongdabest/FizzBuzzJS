function FizzBuzz() {
}

FizzBuzz.prototype.transform = function(number) {
  if (number%3 == 0 && number%5 == 0) {
    return 'fizzbuzz';
  } else if (number%3 == 0) {
    return 'fizz';
  } else if (number%5 == 0) {
    return 'buzz';
  } else {
    return number;
  }
};

// FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
//   return number % divisor === 0;
// };
var fizzbuzz = new FizzBuzz();

for (num = 1; num <=100; num++) {
    console.log(fizzbuzz.transform(num));
}
