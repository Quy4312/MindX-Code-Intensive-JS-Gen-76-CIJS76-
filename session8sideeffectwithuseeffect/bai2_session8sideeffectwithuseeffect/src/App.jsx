import "./App.css";
import {useState,useEffect} from 'react'

function App() {
  const [inputValue,setInputValue]=useState('');
  const [inputLength,setInputLength]=useState(0);
  const [word,setWord]=useState([])
  const handleChangeInputValue=(e)=>{
    setInputValue(e.target.value)

  }
  useEffect(()=>{
   const timer= setTimeout(()=>{

      setWord(inputValue.split(" "))
     setInputLength(word.filter((item)=>(item!=="")).length)
    },500)
    return ()=>{
      clearInterval(timer)
      
      
    }
  },[inputLength,inputValue,word])
  console.log(word);
  return <div className="App">
    <textarea name="" id="" cols="30" rows="10" onChange={handleChangeInputValue} value={inputValue}></textarea>
    <div>Word(s):{inputLength}</div>
  </div>;
}

export default App;
