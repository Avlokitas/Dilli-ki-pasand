import React from 'react'
import clothh from './images/clothh.png'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <img src={clothh} alt='clothh' />
                <div className='col-2'>
                    <h2>Cloth</h2>
                    <span className='line'></span>
                   <p>----------</p>
                    <p>cloth cloth cloth</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default Testimonials