import React from 'react';
import Background from './background';
import Body from './body';

const About = () => {
  return (
    <div className='lg:h-[1044px] h-[1340px] w-full flex justify-end items-center overflow-hidden relative'>
      <Background/>
      <Body/>
    </div>
  )
}

export default About
