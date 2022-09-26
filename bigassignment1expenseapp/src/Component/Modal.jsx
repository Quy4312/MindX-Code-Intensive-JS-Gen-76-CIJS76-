import React from 'react'
import { useState } from 'react'
import "./Modal.css"
import { Input } from './Input'

export const Modal = (props) => {
  
  return (
    
    <div className='modal-ctn' style={{display:props.modalopen? 'flex':'none'}}>
        <div className='modal-item'>
            Name
            <Input   inputname={props.inputname} onChange={props.handleInputChangename} placeholder='Enter name here...' />
        </div>
        <div className='modal-item'>
            Amount
            <Input inputamount={props.inputamount} onChange={props.handleInputChangeamount} placeholder='Enter amount here...' />
        </div>
        <div className='modal-item'>
            Date
            <Input  inputdate={props.inputdate} onChange={props.handleInputChangedate} placeholder='dd/mm/yy' />
            
        </div>
    <button className='add-btn' onClick={props.handleAddbtn}>ADD</button>
    <button className='cancel-btn' onClick={props.handleCancelbtn}>CANCEL</button>
    </div>
    
  )
}
