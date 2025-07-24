'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

const achievements = [
  {
    id: 1,
    text: 'Within three months of joining as a Software Engineer at Clover Infotech, I was transitioned from the Delivery Team to the Center of Excellence (COE) team based on performance💡.',
  },
  {
    id: 2,
    text: 'Received appreciation for mentoring 10 junior students during a Web Development Workshop by offering technical guidance and hands-on support 📚.',
  },
  {
    id: 3,
    text: 'Served as the Secretary of the ISTE (Indian Society for Technical Education) committee, organizing technical events and student engagement initiatives 🌐.',
  },
  {
    id: 4,
    text: 'Worked as the Media Head of the ISF (IETE Student Forum), managing content creation, event coverage, and digital outreach for the committee 📱.',
  },
  {
    id: 5,
    text: 'Volunteered as the Treasurer of the NSS (National Service Scheme) committee, responsibly managing finances and contributing to social initiatives and community service programs 💰.',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Achievements = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="flex justify-center items-center min-h-screen px-4 py-10 sm:px-6 lg:px-8"
      id='achievements'
    >
     <motion.div
  variants={itemVariants}
  className="border-2 border-white rounded-3xl p-6 sm:p-10 w-full max-w-5xl shadow-xl "
>
        <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-10 font-handwritten">
          Achievements
        </h2>

        <div className="relative ml-6 sm:ml-10">
          {/* Vertical line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-6 sm:left-8 w-0.5 bg-black" />

          {achievements.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start mb-8 relative z-10"
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-black bg-white text-black text-lg sm:text-xl font-bold flex items-center justify-center z-20">
                {item.id}
              </div>
              <p className="ml-0 sm:ml-6 mt-4 sm:mt-0 text-base sm:text-lg font-handwritten">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Achievements;
