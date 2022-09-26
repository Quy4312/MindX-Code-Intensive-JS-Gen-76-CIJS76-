import React from 'react'
import './Barchart.css'
import { Barchartitem } from './Barchartitem'

export const Barchart = (props) => {
  return (
    <div className='barchart-ctn'>
        <Barchartitem month='Jan' />
        <Barchartitem month='Feb' />
        <Barchartitem month='Mar' />
        <Barchartitem month='Apr' />
        <Barchartitem month='May' />
        <Barchartitem month='Jun' />
        <Barchartitem month='Jul' />
        <Barchartitem month='Aug' />
        <Barchartitem month='Sep' />
        <Barchartitem month='Oct' />
        <Barchartitem month='Nov' />
        <Barchartitem month='Dec' />
        
    </div>
  )
}
