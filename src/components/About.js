import React from 'react'
import john from './images/john-doe.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} alt='john' />
                <div className='col-2'>
                    <h2>Food</h2>
                    <span className='line'></span>
                   <p>----------</p>
                    <p>Food food food food</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About
