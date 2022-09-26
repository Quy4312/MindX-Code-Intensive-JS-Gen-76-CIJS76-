import React from 'react'
import "./Addexpense.css"
import { Modal } from './Modal'
import { useState } from "react";

export const Addexpense = (props) => {
  
  return (
    <div className='add-ctn'>
        <div className='add-content' onClick={props.handleOpenModal}>ADD NEW EXPENSE</div>
        <Modal 
        inputname={props.inputname}
        inputamount={props.inputamount}
        inputdate={props.inputdate}
        handleInputChangename={props.handleInputChangename}
        handleInputChangeamount={props.handleInputChangeamount}
        handleInputChangedate={props.handleInputChangedate}
        modalopen={props.modalopen}
        handleAddbtn={props.handleAddbtn}
        handleCancelbtn={props.handleCancelbtn}
        
         />
        
    </div>
  )
}
