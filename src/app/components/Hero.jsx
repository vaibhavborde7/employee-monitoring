import React from 'react';
import Image from 'next/image';
const Hero = () => {
  return (
    <div className='p-10 bg-black text-white mx-auto rounded-b-2xl'>
      <div className='flex justify-between items-center p-10 rounded-b-lg bg-black'>
        <div> 
          <h1 className='text-6xl font-mono'>Welcome</h1> 
          <h2 className='text-xl font-mono'>This is the Hall of Fame</h2>
        </div>
        <div className='flex-shrink-0'>
          <Image src="runner.gif" alt="Runner" className='w-60' />
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
