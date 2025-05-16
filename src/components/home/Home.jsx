import Header from '../Header/Header'
import './Home.css'
import '../Header/Header'
import Banner from '../../assets/home_image.png'
import Banner_Back from '../../assets/home_image_back.png'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'
import { Link } from 'react-scroll'

const Home = () => {
    const transition = { type: 'spring', duration: 3 }
    return (
        <div className='home' id='home'>
            <div className='blur blur-home'></div>
            <div className='left-h'>
                {/* header */}
                <Header />

                {/* advertisement */}
                <div className='ad'>
                    <motion.div
                        initial={{ left: '145px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>The Club for Achievers</span>
                </div>

                {/* heading */}
                <div className='heading'>
                    <div>
                        <span className='wordart'>Achieve </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Best Shape</span>
                    </div>
                    <div className='slogan'>
                        <span>
                            Fall in love with taking care of your body.<br></br>
                            We will help you achieve your best shape.
                        </span>

                    </div>
                </div>

                {/* data */}
                <div className='data'>
                    <div>
                        <span className='data-span1'><NumberCounter end={100} start={60} delay='4' preFix='+' /></span>
                        <span className='data-span2'>Trainers</span>
                    </div>
                    <div>
                        <span className='data-span1'><NumberCounter end={2500} start={2400} delay='4' preFix='+' /></span>
                        <span className='data-span2'>Members</span>
                    </div>
                    <div>
                        <span className='data-span1'><NumberCounter end={40} start={20} delay='4' preFix='+' /></span>
                        <span className='data-span2'>Fitness Programs</span>
                    </div>
                    <div>
                        <span className='data-span1'><NumberCounter end={20} start={10} delay='4' preFix='+' /></span>
                        <span className='data-span2'>Franchises</span>
                    </div>
                </div>
            </div>


            <div className='right-h'>
                <button className='btn join'>
                    <Link to='plans'
                        span={true}
                        smooth={true}
                    > 
                        Join Now
                    </Link>
                </button>
                <img className='banner' src={Banner} />
                <motion.img
                    initial={{ right: '-11rem' }}
                    whileInView={{ right: '0rem' }}
                    transition={transition}
                    className='banner_back' src={Banner_Back} />
            </div>
        </div>
    )
}

export default Home
