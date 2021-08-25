export function fib(n) {
  var result = [];
  function fibonacci(n){
    if (n == 0){      
     return 0;
    } else if (n == 1) {
      result.push(0);
      return 0
    } else if (n == 2) {
      result.push()
    }else return fibonacci
  }
  
  const arr = fib(n - 1)
  return [...arr, arr[n-1] + arr[n-2]]
}
console.log(fib(7));