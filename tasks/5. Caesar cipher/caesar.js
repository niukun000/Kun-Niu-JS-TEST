export function encryptCaesar(inputString, key) {
  var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  if (key==0){
    return inputString;
  }
  var result = "";
  for (let i=0; i<inputString.length; i++){
    let index = alphabets.indexOf(inputString[i]);
    index += key;
    if (index>26){
      index-=26;
    }
    result = result+alphabets[index];   
  }
  return result;
}
console.log(encryptCaesar("A", 2));
