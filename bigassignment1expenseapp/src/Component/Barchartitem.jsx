import React from 'react'
import './Barchartitem.css'

export const Barchartitem = (props) => {
  return (
    <div className='barchartitem-ctn'>
        <div className='barchartitem-progress'>
            <div className='progress-bar'></div>
        </div>
        <div>{props.month}</div>
    </div>
  )
}
