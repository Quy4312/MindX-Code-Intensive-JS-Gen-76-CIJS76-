import React from "react";
import { useState, createContext } from "react";
const LoginContext=createContext();
function LoginProvider({children}){
const [login,setLogin]=useState(false);
const [eng,setEng]=useState('vi');
const [inputvalue,setInputvalue]=useState('');
const handleSelectChange=(e)=>{
    setEng(e.target.value);
}
const handlechangeInput=(e)=>{
    setInputvalue(e.target.value)
}
const handleLogin=()=>{
    setLogin(!login)
}
const handleEng=()=>{
    setEng(!eng)
}
const value={
    login,
    eng,
    handleLogin,
    handleEng,
    inputvalue,
    handlechangeInput,
    handleSelectChange,

}
return(
    <LoginContext.Provider value={value} >   
        {children}
    </LoginContext.Provider>
)
}
export {LoginContext,LoginProvider}

