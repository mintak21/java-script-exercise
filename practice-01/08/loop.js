const end = 100000

for (let i = 1; i < end; i++) {
  // ここは本来関数
  let fizzBuzz = null // これはなくてもいい
  if (i % 3 == 0 && i % 5 ==0) {
    fizzBuzz = 'FizzBuzz'
  } else if (i % 3 == 0) {
    fizzBuzz = 'Fizz'
  } else if (i % 5 == 0) {
    fizzBuzz = 'Buzz'
  } else {
    fizzBuzz = i
  }
  document.write(fizzBuzz + ' ')
}
