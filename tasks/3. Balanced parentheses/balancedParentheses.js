export function areParenthesesBalanced(inputString) {

  var left = 0, right = 0;
  for (let i=0; i <= inputString.length; i++){
    if (right>left){
      return false
    }
    else if (inputString[i] == "("){
        left++;  
    }
    else if (inputString[i]==")"){
        right++;
    }
    
    }        
  

  if (left==right){
    return true;
  }
  else{
    return false;
  }

}

areParenthesesBalanced("(()())")