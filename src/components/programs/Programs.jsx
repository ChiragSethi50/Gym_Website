import React from 'react'
import { programsData } from '../../data/programsData'
import './Programs.css'
import RightArrow from '../../assets/rightArrow.png'
const Programs = () => {
  return (
    <div className='Programs' id='programs'>
      
        <div className='program-head'>
            <span>Explore our programs</span>
            <span className='wordart'>to achieve</span>
            <span>your fitness goals</span>
        </div>

        <div className='program-cards'>
          {programsData.map((program)=>(
            <div className='categories'>
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className='join-now'>
                <span>Join Now</span>
                <img src={RightArrow} />
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Programs
