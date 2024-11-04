import React from 'react';

const Hero = () => {
  return (
    <div className='p-10 bg-black text-white mx-auto rounded-b-2xl'>
      <div className='flex flex-col md:flex-row justify-between items-center p-10 rounded-b-lg bg-black'>
        <div className='text-center md:text-left'>
          <h1 className='text-4xl md:text-6xl font-mono'>Welcome</h1>
          <h2 className='text-lg md:text-xl font-mono'>This is the Hall of Fame</h2>
        </div>
        <div className='flex-shrink-0 mt-6 md:mt-0'>
          <img src="runner.gif" alt="Runner" className='w-48 md:w-60' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
