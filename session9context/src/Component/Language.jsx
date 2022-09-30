import React from 'react'
import './Language.css'
import { useContext } from 'react'
import { LoginContext } from '../Context/LoginContext'
export const Language = () => {
    const logincontext=useContext(LoginContext)
  return (
    <div className='language-ctn'>
        <select value={logincontext.eng} onChange={logincontext.handleSelectChange}>
            <option value="vi" >VI</option>
            <option value="en">EN</option>
        </select>
    </div>
  )
}
