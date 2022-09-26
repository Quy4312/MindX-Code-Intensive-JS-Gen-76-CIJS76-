import React from 'react'
import "./Year.css"

export const Year = () => {
  return (
    <div className='year-ctn'>
    <div style={{color:'white',fontWeight:'bold'}}>
        Filter by year
    </div>
    <div className='year-option'>
        2022
        <i class="fa-solid fa-caret-down"></i>

    </div>
</div>
  )
}
