import React from 'react'

function Experience() {
  return (
    <div name="About" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-gray-300'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center px-4 w-full h-full'>

          {/* <div className='mt-20 pb-8 justify-center items-center'> */}
          <div className='pb-8'>

            <p className='text-4xl font-bold inline border-b-4 border-gray-400 justify-center items-center'>Experience</p>
           </div>


          <h2 className='font-bold mb-9'>Full Stack dveloper,Intern - Electronica Finance Limited</h2>
          <p className='-mt-6'> Dec 2023 - Jun 2024</p>

          <p className=' text-gray-400 text-xl mt-16'>
          I have Developed responsive front-end components using HTML, CSS, and JavaScript, 
          Bootstrap enhancing user experience and engagement.
          It is built and maintains backend APIs using Node.js for efficient data processing and 
          Java for robust application logic.
          Implemented and optimized SQL queries for MySQL databases to ensure quick data 
          retrieval and storage efficiency.
        </p>
        </div>

      </div>
  )
}

export default Experience