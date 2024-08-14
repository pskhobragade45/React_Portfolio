import React from 'react';

function Project() {
  const techs = [
    {
      id: 1,
      src: "./assets/portfolio.png",
      title: 'Portfolio Website',
      description: 'Welcome to my portfolio! Here you will find a collection of my work, including various projects I have worked on over the years',
      languages: 'React',
      languages1: 'Tailwind',
      languages2: 'JavaScript'
    },
    {
      id: 2,
      src: "./assets/women4.jpg",
      title: 'Signature App',
      description: 'A powerful tool designed to streamline the process of signing documents electronically. This application allows users to easily create, store, and manage digital signatures',
      languages: 'HTML',
      languages1: 'CSS',
      languages2: 'JavaScript'
    },
    {
      id: 3,
      src: "./assets/pan.png",
      title: 'Nsdl Pan Verification',
      description: 'Developed Nsdl Api to validate PAN card details against government records. We added the specific points and functions we wanted to project',
      languages: '.Net',
      languages1: 'Node.Js'

    },
    {
      id: 4,
      src: "./assets/img2.png",
      title: 'API HUB',
      description: 'Developed RESTful APIs with Node.js and Express.js to handle user requests and manage data flow.In an SQL database, we implemented CRUD operations.',
      languages: 'Node.js',
      languages1: 'Sql'
    },
    {
      id: 5,
      src: "./assets/finnaone.png",
      title: 'Finnone',
      description: 'Designed and implemented Java scripts to extend the capabilities of the Finnone platform. Implemented product-wise application status parameters and Auto-calculation charges for all modules.',
      languages: 'Java',
    },
  ];

  return (
    <div name="Project" className='h-auto w-full bg-gradient-to-b from-black via-black to-gray-800 text-gray-300'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full text-gray-300'>
        <div className='mt-44 mb-12 text-left'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-400 ml-4'>Project</p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 text-left py-6 px-3">
          {
            techs.map(({ id, src, title, description, languages, languages1, languages2 }) => (
              <div
                key={id}
                className="flex flex-col items-center p-4 border-b border-gray-600 bg-gray-900 rounded-lg"
              >
                <img src={src} alt={title} className='w-32 h-32 object-cover mb-4 lg:float-left md:float-left' />
                <div className='text-left'>
                  <p className='text-xl font-bold'>{title}</p>
                  <p className='mt-2'>{description}</p>
                  <div className='text-left mt-4 flex flex-wrap gap-2'>
                    {languages && <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>{languages}</button>}
                    {languages1 && <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>{languages1}</button>}
                    {languages2 && <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>{languages2}</button>}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Project;
