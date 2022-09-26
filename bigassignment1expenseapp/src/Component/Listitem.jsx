import React from 'react'
import './Listitem.css'

export const Listitem = (props) => {
  return (
    <div className='listitem-ctn'>
        <div className='date'>{props.date}</div>
        <div className='name'>{props.name}</div>
        <div className='price'>{props.price}</div>
    </div>
  )
}
