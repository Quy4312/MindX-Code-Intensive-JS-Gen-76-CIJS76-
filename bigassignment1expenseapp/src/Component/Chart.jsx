import React from 'react'
import "./Chart.css"
import { Year } from './Year'
import { Barchart } from './Barchart'
import { List } from './List'

export const Chart = (props) => {
  return (
    <div className='chart-ctn' style={{marginTop:props.modalopen?'240px':'50px'}}>
        <Year />
        <Barchart/>
        <List list={props.list}/>
    </div>
  )
}
