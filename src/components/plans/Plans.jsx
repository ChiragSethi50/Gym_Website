import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className='plans' id='plans'>
    <div className='blur plans-blur1'></div>
    <div className='blur plans-blur2'></div>
        <div className='plan-head'>
            <span className='wordart'>START</span>
            <span> YOUR JOURNEY</span>
            <span className='wordart'> TODAY</span>
        </div>
        <div className='plan-card'>
            {plansData.map((plan, i)=> (
            <div className='plan' key={i}>
                {plan.icon}
                <span>{plan.name}</span>
                <span>$ {plan.price}</span>
            
                <div className='features'>
                    {plan.features.map((feature, i)=>(
                    <div className='feature'>
                    <img src={whiteTick} />
                    <span key={i}>{feature}</span>
                    </div>
                    ))}
                </div>
                <div>
                    <span>Know more</span>
                </div>
                <button className='btn'>Join Now</button>
            
            </div>
            ))}
            
        </div>
        
    </div>
  )
}

export default Plans
