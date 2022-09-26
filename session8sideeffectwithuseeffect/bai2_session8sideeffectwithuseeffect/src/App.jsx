import "./App.css";
import {useState,useEffect} from 'react'

function App() {
  const [inputValue,setInputValue]=useState('');
  const [inputLength,setInputLength]=useState('');
  const handleChangeInputValue=(e)=>{
    setInputValue(e.target.value)

  }
  useEffect(()=>{
   const timer= setTimeout(()=>{
      setInputLength(inputValue.length)
    },500)
    return ()=>{
      clearInterval(timer)

      
    }
  },[inputLength,inputValue.length])
  return <div className="App">
    <textarea name="" id="" cols="30" rows="10" onChange={handleChangeInputValue}></textarea>
    <div>Word(s):{inputLength}</div>
  </div>;
}

export default App;
