// import React from 'react'
// import { Link } from 'react-router-dom'
// import {arrow} from '../assets/icons'

// const InfoBox= ({text,link,btnText})=>{
//     <div className='info-box'>
//         <p className='font-medium sm:text-l text-center'>{text}</p>
//         <Link to ={link} className='neo-brutalism-white neo-btn'>
//         {btnText}
//         <img src={arrow} className='w-4 h-4 object-contain' />
//         </Link>

//     </div>
// }
// const renderContent={
//     1:(
//         <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
//         Hi, I'm
//         <span className='font-semibold mx-2 text-white'>Prisha Bhasin</span>
//         👋
//         <br />
//         A Computer Engineering Student from India 🇮🇳
//       </h1>

//     ),
//     2:(
//         <InfoBox 
//         text="worked on many projects and learnt many skills along the way"
//         link="/about"
//         btnText="Learn more"
//         />
//     ),
//     3:(
//         <InfoBox 
//         text="💡 Take a look at some of the real-world projects I’ve built — from responsive websites to functional full-stack applications."
//         link="/projects"
//         btnText="Visit my portfolio"
//         />
//     ),
//     4:(
//         <InfoBox 
//         text="Need a project done or looking for a dev? I'm just a few keystrokes away"
//         link="/contact"
//         btnText="Let's talk"
//         />
//     )
// }


// const HomeInfo = ({currentStage}) => {
    
//       return renderContent[currentStage] || null;
    
  
// }

// export default HomeInfo
import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Prisha</span>
        👋
        <br />
        A Computer Engineering student from India
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Worked on many projects <br /> and learnt many skills along the way
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          💡 Take a look at some of the real-world projects I’ve built — from responsive websites to functional full-stack applications.
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;