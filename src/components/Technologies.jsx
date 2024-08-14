import React from 'react';
import styled from 'styled-components';

// Define a styled component with dynamic shadow
const TechCard = styled.div`
  box-shadow: ${props => props.shadow}; /* Dynamic shadow style */
  transition: transform 0.5s;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }
`;

function Project() {
  const techs = [
    {
      id: 1,
      src: "./assets/html.png",
      title: 'HTML',
      shadow: '0px 4px 6px rgba(249, 115, 22, 0.6)', // Example shadow style
    },
    {
      id: 2,
      src: "./assets/css.png",
      title: 'CSS',
      shadow: '0px 4px 6px rgba(37, 99, 235, 0.6)', // Example shadow style
    },
    {
      id: 3,
      src: "./assets/javascript.png",
      title: 'JAVASCRIPT',
      shadow: '0px 4px 6px rgba(252, 211, 77, 0.6)', // Example shadow style
    },
    {
      id: 4,
      src: "./assets/react.png",
      title: 'REACT',
      shadow: '0px 4px 6px rgba(37, 99, 235, 0.6)', // Example shadow style
    },
    {
      id: 5,
      src: "./assets/tailwind.png",
      title: 'TAILWIND',
      shadow: '0px 4px 6px rgba(129, 140, 248, 0.6)', // Example shadow style
    },
    {
      id: 6,
      src: "./assets/node.png",
      title: 'NODE',
      shadow: '0px 4px 6px rgba(16, 185, 129, 0.6)', // Example shadow style
    },
    {
      id: 7,
      src: "./assets/mysql.png",
      title: 'MYSQL',
      shadow: '0px 4px 6px rgba(249, 115, 22, 0.6)', // Example shadow style
    },
    {
      id: 8,
      src: "./assets/github.png",
      title: 'GITHUB',
      shadow: '0px 4px 6px rgba(255, 255, 255, 0.6)', // Example shadow style
    },
  ];

  return (
    <div name="Project" className='h-screen w-full bg-gradient-to-b from-gray-800 via-black to-black text-gray-300'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-gray-300'>
        <div className='mt-10 pb-8 justify-center items-center'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Technologies</p>
        </div>

        <h2 className='pt-1 pb-4 font-semibold -mt-1'>These are the technologies I've worked with.</h2>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-6 px-3 sm:px-0">
          {techs.map(({ id, src, title, shadow }) => (
            <TechCard
              key={id}
              shadow={shadow} // Pass the shadow style as a prop
            >
              <img src={src} alt={title} className='w-16 mx-auto' />
              <p className='mt-4'>{title}</p>
            </TechCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
