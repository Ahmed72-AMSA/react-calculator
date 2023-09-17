import './App.css';
import {useState,setState} from 'react';


function App() {
  const[calc,setCalc]=useState("");
  const [result,setResult]=useState("");
  const ops = ['/','*','+','-','.'];


  const log = () => {
    const logValue = Math.log(eval(calc));
    setResult(logValue.toFixed(4).toString());
    setCalc(`Math.log(${calc})`);
  }
  

  const sin = () => {
    const degrees = eval(calc);
    const radians = degrees * (Math.PI / 180);
    const sinValue = Math.sin(radians);
    setResult(sinValue.toFixed(4).toString());
    setCalc(`sin(${degrees})=${sinValue.toFixed(4).toString()}`);
  }
  
  const cos = () => {
    const degrees = eval(calc);
    const radians = degrees * (Math.PI / 180);
    const cosValue = Math.cos(radians);
    setResult(cosValue.toFixed(4).toString());
    setCalc(`cos(${degrees})=${cosValue.toFixed(4).toString()}`);

  }
  
  const tan = () => {
    const degrees = eval(calc);
    const radians = degrees * (Math.PI / 180);
    const tanValue = Math.tan(radians);
    setResult(tanValue.toFixed(4).toString());
    setCalc(`tan(${degrees})=${tanValue.toFixed(4).toString()}`);

  }










  const createDigits = ()=>{
  const digits = [];
  for(let i =1 ; i<10 ; i++){
  digits.push(
  <button key={i} onClick={()=> updateCalc(i.toString())}>{i}</button>
  )
  }
  return digits;
  }





  const updateCalc = value =>{
    if(ops.includes(value) && calc === '' || 
      ops.includes(value) && ops.includes(calc.slice(-1)))
    {
      return;
    }


    
    
    if (calc==="" && (value === 'log' || value === 'sin' || value === 'cos' || value === 'tan') ) {
     return;
    }

  
  
    setCalc(calc.slice(0,4)+value);
  
    if(!ops.includes(value)){
      setResult(eval(calc+value).toString());
    }
  }






  

  const calculate = () => {
    setCalc(eval(calc).toString());

  }





  const deleteLst = ()=>{
    if(calc === ""){
    return;
    }
    const value = calc.slice(0,-1);
    setCalc(value);
  }





const clearAll = () => {
  setCalc("");
  setResult("");
}











  return (
    <div className="App">
    
    <div className="calculator">
    <div className="display">
    {result? <span>({result})</span> : ""} 
    &nbsp;
    {calc || "0"}
    </div>



    <div className="operators">
    <button onClick={()=> updateCalc('/')}>/</button>
    <button onClick={()=> updateCalc('*')}>*</button>
    <button onClick={()=> updateCalc('+')}>+</button>
    <button onClick={()=> updateCalc('-')}>-</button>
    <span><button id="del" onClick={deleteLst}>DEL</button></span>
    </div>

  <div className="math">

  <button onClick={log}>log</button>
  <button onClick={sin}>sin</button>
  <button onClick={cos}>cos</button>
  <button onClick={tan}>tan</button>

  </div>


    <div className="digits">
    {createDigits()}
    <button onClick={()=> updateCalc('0')}>0</button>
    <button onClick={()=> updateCalc('.')}>.</button>
    <button onClick={clearAll} >AC</button>
    
    </div>


    <div className="equal">
    <button onClick={calculate}>=</button>

    </div>



    </div>
    </div>
  );
}

export default App;