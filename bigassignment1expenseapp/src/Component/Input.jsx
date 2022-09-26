
import React, { useState } from 'react'
import "./Input.css"

export const Input = (props) => {

    // console.log(props.input)

  return (
    <>
    <input type='text' value={props.inputname} onChange={props.onChange} placeholder={props.placeholder}></input>
    </>
  )
}
