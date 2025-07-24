"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import cloverLogo from "@/assets/cloverLogo.jpg";
import splogo from "@/assets/s2pLogo.jpg";

const workData = [
  {
    id: 1,
    company: "Clover Infotech",
    title: "Software Engineer",
    skills: "Adroit in - JS, TS, React, Next.js",
    description:
      "Corpex AU Bank Credit Card Management Application - Developed Corpex Application to manage the Life Cycle of Credit Card From Scratch in Next.JS",
    logo: cloverLogo,
    align: "left",
  },
  {
    id: 2,
    company: "S2P Edutech",
    title: "React Developer Intern",
    skills: "Adroit in - JS, React",
    description:
      "3 Verse - Developed high-performance Frontend modules for 3 Verse trading platform using React, enhancing trading functionalities.",
    logo: splogo,
    align: "right",
  },
];

const Work = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-20" id="work">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-semibold text-center mb-10 ">Work</h2>
      </motion.div>
      <div className="space-y-10 w-full max-w-5xl">
        {workData.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-between rounded-xl p-8 border shadow-md"
          >
            {job.align === "left" ? (
              <div className="flex flex-col gap-6 md:flex-row items-center w-full">
                <div className="w-22 h-20 rounded-full overflow-hidden border-2 border-black bg-white hover:border-2 hover:border-yellow-300">
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    width={80}
                    height={80}
                    className="object-contain w-full h-full "
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-xl">
                    {job.title} - {job.company}
                  </h3>
                  <p className="text-base mt-1">{job.skills}</p>
                  <p className="text-sm mt-2 text-white">{job.description}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col-reverse md:flex-row gap-6 items-center md:items-end w-full justify-end text-center md:text-right">
                <div>
                  <h3 className="font-semibold text-xl">
                    {job.title} - {job.company}
                  </h3>
                  <p className="text-base mt-1">{job.skills}</p>
                  <p className="text-sm mt-2 text-white">{job.description}</p>
                </div>

                <div className="w-20 h-20 rounded-full overflow-hidden border-2 bg-white border-black hover:border-2 hover:border-yellow-300">
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    width={80}
                    height={80}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
