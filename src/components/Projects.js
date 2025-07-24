'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';
import { AnimatePresence, motion } from 'framer-motion';

import arrow1 from '@/assets/arrow_11.svg';
import arrow2 from '@/assets/arrow_21.svg';

import img1 from '@/assets/portfolio-next.png';
import img2 from '@/assets/portfolio-react.png';
import img3 from '@/assets/login.png';
import img4 from '@/assets/chatbot.png';

const policies = [
  {
    title: 'Personal Portfolio - Next JS',
    image: img1,
    description1:
      'Tech Stack - Next JS, Tailwind, Framer Motion, GSAP, Matter.js',
    description2:
      'This is my revamped personal portfolio project, migrated from React.js to Next.js. The frontend is built using Next.js, Tailwind CSS, Matter.js, Framer Motion, and GSAP for a dynamic and responsive user experience. The backend is handled using Next.js API routes. The project is deployed on Vercel for seamless hosting. Additionally, the “Get in Touch” form captures user input and stores the data in a Google Drive-hosted Excel sheet, enabling efficient and organized virtual data management.',
  },
  {
    title: 'Personal Portfolio - React JS',
    image: img2,
    description1:
      'Tech Stack - React JS, MUI, Framer Motion',
    description2:
      'This is my personal portfolio project built with React.js (v17), featuring a fully responsive frontend interface. The design leverages Material-UI (MUI) for consistent styling and Framer Motion for smooth animations. A standout feature is the dynamic navigation bar, designed with a modern glassmorphism effect to enhance visual appeal. The project demonstrates strong UI/UX principles and is optimized for various screen sizes, offering a clean and engaging presentation of my professional profile and technical skills.',
  },
  {
    title: 'Login Authentication - Next JS',
    image: img3,
    description1:
      'Tech Stack - Next JS, Tailwind, JWT Session, MongoDB Atlas',
    description2:
      'This is a login authentication project built using Next.js, handling both frontend and backend functionality. Tailwind CSS is used for responsive and modern styling. The project implements secure authentication using JWT tokens and session management via cookies. Server components are utilized to handle API logic efficiently on the frontend. It includes fully functional Login and Sign Up features, with user data dynamically stored in MongoDB Atlas, ensuring a scalable and secure database solution for authentication workflows.',
  },
  {
    title: 'Chatbot - React',
    image: img4,
    description1:
      'Tech Stack - React JS, Botpress',
    description2:
      'This is my chatbot project developed using React (v19), featuring seamless integration with Botpress. The chatbot is designed by configuring custom instructions to handle user interactions effectively. It is embedded directly into the React frontend, ensuring a smooth and responsive user experience. The project demonstrates the implementation of conversational AI within a web application, showcasing my ability to work with third-party chatbot platforms and integrate them into modern frontend frameworks for enhanced interactivity and engagement.',
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const observerRef = useRef(null);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? policies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === policies.length - 1 ? 0 : prev + 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: false,
  });

 return (
    <div ref={observerRef} className='h-auto lg:h-[700px] w-full'>
      <div className='container mx-auto flex flex-col items-center justify-center px-4'>
        <h1 className='text-xl sm:text-2xl lg:text-5xl font-medium text-center mb-6 mt-6 swapper-main-title'>
          Projects
        </h1>

        <div className='flex items-center justify-center gap-4 w-full'>
          <button onClick={handlePrev} className='hidden lg:block'>
            <Image src={arrow1} alt='left arrow' className='cursor-pointer' />
          </button>

          <div
            {...handlers}
            className='relative flex bg-white w-full shadow md:w-[90%] lg:w-[85%] justify-center items-center shadow-lg rounded-lg p-4 md:p-6 overflow-hidden swapper-mq1'
          >
            <AnimatePresence mode='wait' initial={false}>
              <motion.div
                key={currentIndex}
                className='flex w-full flex-col md:flex-row items-center gap-6 h-auto lg:h-[450px]'
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <div className='w-full md:w-[100%] lg:w-[45%] flex justify-center items-center'>
                  <Image
                    src={policies[currentIndex].image}
                    alt={policies[currentIndex].title}
                    width={500}
                    height={500}
                    className='object-contain rounded-xl'
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>

                <div className='w-full lg:w-[55%] swapper-mq text-left'>
                  <h2 className='font-semibold text-[#282828] text-xl md:text-2xl pb-3 swapper-title'>
                    {policies[currentIndex].title}
                  </h2>
                  <p className='text-[#282828] text-sm md:text-base swapper-d1 pb-2'>
                    {policies[currentIndex].description1}
                  </p>
                  <p className='text-[#282828] text-sm md:text-base swapper-d2'>
                    {policies[currentIndex].description2}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={handleNext} className='hidden lg:block'>
            <Image src={arrow2} alt='right arrow' className='cursor-pointer' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
