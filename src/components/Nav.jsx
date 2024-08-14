import React, { useState } from 'react';
import { FaBars, FaTimes, FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

function Nav() {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 'Home', text: 'Home' },
    { id: 'About', text: 'About' },
    { id: 'Experience', text: 'Experience' },
    { id: 'Technologies', text: 'Technologies' },
    { id: 'Project', text: 'Project' },
    { id: 'Contact', text: 'Contact' },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 bg-black text-gray-400 px-6 fixed top-0">
      <div className="flex-shrink-0">
        <h1 className="text-5xl font-semibold font-logo ml-4">PK</h1>
      </div>

      <div className="flex-grow flex items-center justify-center">
        <ul className="hidden md:flex space-x-8 text-center">
          {links.map(({ id, text }) => (
            <li
              key={id}
              className="cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 hover:text-gray-500 duration-200"
            >
              <Link
                to={id}
                smooth
                duration={500}
                spy
                exact="true"
                offset={-70} // Adjust as needed
                className="cursor-pointer"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:hidden space-x-4 items-center">
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.linkedin.com/in/pooja-khobragade-6108151ab/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:pskhobragade45@gmail.com" className="text-gray-300 hover:text-gray-500">
          <FaEnvelope size={24} />
        </a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500">
          <FaGithub size={24} />
        </a>
        <a href="./assets/resume.pdf" target="_blank" rel="noopener noreferrer" download className="text-gray-300 hover:text-gray-500">
          <BsFillPersonLinesFill size={24} />
        </a>
      </div>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-600 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-black to-gray-700'>
          {links.map(({ id, text }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl"
            >
              <Link
                to={id}
                smooth
                duration={500}
                onClick={() => setNav(false)}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Nav;
