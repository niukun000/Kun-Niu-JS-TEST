export function Reduce(array, reducer, initialValue) {

  var result = initialValue;

  for (let i=0; i<array.length; i++){
    result = reducer(result, array[i]);
  }
  return result;
  
}
