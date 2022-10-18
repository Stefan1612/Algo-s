function fibonacci(n) {
    if (n < 2){
        return 1;
    }else{
        return fibonacci(n-2) + fibonacci(n-1);
    }
}

console.log(fibonacci(7));
//Returns 21


// Using Memoization
function fib(n) {
  const memorize = {};

  function helper(n) {
    if (n in memorize) return memorize[n];
      //this might be n < 2
    if (n < 3) return 1;
    return memorize[n] = helper(n - 1) + helper(n - 2);
  }

  return helper(n);
}
