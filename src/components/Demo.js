import React from 'react'
//import { Link } from 'react-router-dom'; 
import john from './images/john-doe.png'
import './Demo.css'

const Demo = () => {
    return (
        <div className='Demo' id='Demo'>
            <div className='container'>
                <img src={john} alt='john' />
                <div className='col-2'>
                    <h2>Places</h2>
                    <span className='line'></span>
                    <p>----------</p>
                    <p>place place place place</p>
                   
                    <button className='button'>Explore More</button>
                   
                </div>
            </div>
        </div>
    )
}

export default Demo