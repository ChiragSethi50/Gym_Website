import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpeg'
import image3 from '../../assets/image3.jpg'
import image5 from '../../assets/image5.jpg'
import tick from '../../assets/arrow.png'
import MB from '../../assets/MBlogo.png'
import lining from '../../assets/lining.png'
import adidas from '../../assets/adidas.png'

const Reasons = () => {
  return (
    <div>
      <div className='reasons' id='reasons'>
         <div className='left-s'>
            <img src={image1} />
            <img src={image2} />
            <img src={image3} />
            <img src={image5} />
         </div>
         <div className='right-s'>
            <span className=''>some reasons</span>
             <div >
                <span>what does this</span>
                <span className='wordart'> club</span>
                <span> offers you?</span>
             </div>
            <div className='answers'>
                <div>
                    <img src={tick}></img>
                    <span>Over 100+ expert coaches</span>
                </div>
                <div>
                    <img src={tick}></img>
                    <span>Clean & tidy with always well maintained equipments</span>
                </div>
                <div>
                    <img src={tick}></img>
                    <span>programs for all body types</span>
                </div>
                <div>
                    <img src={tick}></img>
                    <span>Reliable Partners</span>
                </div>
                <span 
                    style={{
                        color: "var(--gray)",
                        fontWeight:"normal", }}>
                    OUR PARTNERS 
                </span>
                <div className='partners'>
                    <img src={MB} />
                    <img src={lining} />
                    <img src={adidas} />
                </div>
            </div>


         </div>
      </div>
    </div>
  )
}

export default Reasons
