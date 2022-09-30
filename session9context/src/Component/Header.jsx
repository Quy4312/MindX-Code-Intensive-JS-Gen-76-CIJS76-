import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../Context/LoginContext'
import './Header.css'

export const Header = () => {
    const logincontext=useContext(LoginContext)
    if(!logincontext.login){
        return (
          <div className='header-ctn'>
              <div>Mindx</div>
              <div>{logincontext.eng==='en' ? 'login':'đăng nhập'}</div>
          </div>
        )

    }
    else{
        return (
            <div className='header-ctn'>
                <div>Mindx</div>
                <div>{logincontext.eng==='en' ? `hello ${logincontext.inputvalue}`:`xin chào ${logincontext.inputvalue}`}</div>
            </div>
          )
    }
}
