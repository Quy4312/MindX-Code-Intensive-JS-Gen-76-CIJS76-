import React from 'react'
import { Listitem } from './Listitem'
import './List.css'

export const List = (props) => {
    return(
        <div className='list-ctn'>
            {props.list.map((item)=>(
        <Listitem key={item.name+item.price} name={item.name} date={item.date} price={item.price} />

    ))}
        </div>
    )
  
}
