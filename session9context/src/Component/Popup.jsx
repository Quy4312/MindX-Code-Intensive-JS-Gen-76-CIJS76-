import React from 'react'
import './Popup.css'
import { useContext } from 'react'
import { LoginContext } from '../Context/LoginContext'

export const Popup = () => {
    const logincontext=useContext(LoginContext)
    
  return (
    <div className='popup-ctn'>
        <div className='login-text'>{logincontext.eng==='en' ? 'Login':'Đăng nhập'}</div>
        <div>
        <input type="text" value={logincontext.inputvalue} onChange={logincontext.handlechangeInput} placeholder={logincontext.eng==='en' ? 'User Name....':'Tên đăng nhập....'}/>

        </div>
        <button className='login-btn' onClick={logincontext.handleLogin}>{logincontext.eng==='en' ? 'Login':'Đăng nhập'}</button>
    </div>
  )
}
