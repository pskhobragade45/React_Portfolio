import React from 'react';

function Contact() {
  return (
    <div name="Contact" className='w-full bg-gradient-to-b from-gray-800 via-black to-black text-gray-300 p-4'>
      <div className='flex flex-col justify-between max-w-screen-lg mx-auto text-gray-300'>
        
        {/* "Contact Us" Section */}
        <div className='mt-10 pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Contact Us</p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        {/* Form Section */}
        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/bgdyqdoa" method='POST'  className='flex flex-col w-full md:w-1/2'>
            <input 
              type="text"
              name='name'
              placeholder='Enter your name'
              className='p-3 bg-transparent border-2 rounded-md border-gray-600 placeholder-gray-400 focus:outline-none'
            />
            <input 
              type="email"
              name='email'
              placeholder='Enter your email'
              className='my-4 p-3 bg-transparent border-2 rounded-md border-gray-600 placeholder-gray-400 focus:outline-none'
            />
            <textarea 
              name="message"
              rows="10"
              placeholder='Enter your message'
              className='p-3 bg-transparent border-2 rounded-md border-gray-600 placeholder-gray-400 focus:outline-none'
            ></textarea>
            <button 
              type="submit"
              className='m-4 text-white px-6 py-3 mx-auto flex items-center rounded-md bg-gradient-to-t from-indigo-500 to-blue-600 cursor-pointer hover:scale-110 duration-300'
            >
              Let's talk
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;
