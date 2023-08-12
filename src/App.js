import React, { useState } from 'react'
import './index.css' ;

import { Calculate } from './functions/calculate';
const App = () => {
  const[num1,setNum1] = useState("") ;
  const[num2,setNum2] = useState("") ;
  const[operator,setOperator] = useState("") ;
  const[result,setResult] = useState() ;
  const[message,setMessage] = useState("") ;
  const[check,setCheck] = useState(false) ;

  function getData(e){
    e.preventDefault() ;
    
    const str1 = num1;
    const number1 = Number(str1);

    const str2 = num2;
    const number2 = Number(str2);

    console.log(number1+"  "+number2) ;

    if(num1==="" || num2===""){
      setMessage('nums cant be empty') ;
      setCheck(false) ;
      return ;
    }
    setNum1("") ;
    setNum2("") ;
    
    if(isNaN(number1) || isNaN(number2)){
      setMessage("plese add number only") ;
      setCheck(false) ;
      return ;
    }

    let result = Calculate(operator,number1,number2) ;
    setCheck(true) ;
    setResult(result) ;

 
  }
  return (
    <div className='card'>
      <h2 className='react-heading'>React Component</h2>
      <form onSubmit={getData}>
        <input type='text' placeholder='num1' value={num1} onChange={(e)=>setNum1(e.target.value)}/>
        <input type='text' placeholder='num2' value={num2} onChange={(e)=>setNum2(e.target.value)}/>

        <div className='btns'>
          <button type='submit' onClick={()=>setOperator("+")}>+</button>
          <button type='submit' onClick={()=>setOperator("-")}>-</button>
          <button type='submit' onClick={()=>setOperator("*")}>*</button>
          <button type='submit' onClick={()=>setOperator("/")}>/</button>
        </div>
      </form>
      <h3 className={check ? 'success' : 'error'}>{
          check ? 'success' : 'error'
        }</h3>
      <h3>  {check ? `Result: ${result}` : message}</h3>
    </div>
  )
}

export default App ;