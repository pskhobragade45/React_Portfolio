import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4'>
        
        {/* Content Section */}
        <div className='mt-16 flex flex-col justify-center h-full md:w-1/2 md:order-1'>
          <h2 className='text-gray-300 font-bold py-4 text-3xl sm:text-4xl md:text-4xl lg:text-5xl'>
            Pooja Khobragade
          </h2>
          <h4 className='text-gray-300 font-bold text-lg sm:text-xl md:text-xl lg:text-2xl'>
            Full Stack Developer
          </h4>
          <p className='text-gray-400 py-4 max-w-md text-sm sm:text-base md:text-base lg:text-lg'>
            I have 6 months of internship experience as a full stack Developer.
            Currently, I am searching for new opportunities to learn new skills.
            Interested in technologies like:
            React, JavaScript, Tailwind, Node, SQL
          </p>
          <div>
            <button className='group text-white w-fit px-3 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-indigo-500 to-blue-600 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight size={25} className='ml-1'/>
              </span>
            </button>
          </div>
        </div>
        
        {/* Image Section */}
        <div className='mt-12 md:mt-0 md:w-1/2 md:order-2 flex justify-center items-center'>
          <img 
            src="../assets/women1.png" 
            alt="Profile"
            className="my-auto lg:float-right md:float-right rounded-2xl mx-auto w-500px h-400px md:w-3/4"></img>

        </div>
        
      </div>
    </div>
  );
}

export default Home;
