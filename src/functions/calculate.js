
export function Calculate(operator,number1,number2){
    switch(operator){
        case "+" :
          return (number1 + number2) ;
        case "-" :
          return (number1 - number2) ;
        case "*" :
          return (number1 * number2) ;
        case "/" :
          return (number1 / number2) ;
        default :
          return  ;
      }
}