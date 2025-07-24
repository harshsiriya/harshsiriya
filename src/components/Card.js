"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Card = ({ image, title, description, date, link }) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -25;
    const rotateY = ((x - centerX) / centerX) * 25;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="flex flex-col h-96 w-64 rounded-xl p-4 border-2 border-white shadow-2xl text-white"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative w-full aspect-square rounded-md overflow-hidden">
        <Image src={image} alt="Card Image" fill />
      </div>

      <div className="flex flex-col gap-0 mt-4">
        <h1 className="text-xl font-semibold tracking-tight leading-tight">
          {title}
        </h1>
        <p className="text-sm font-mono mt-4 mb-4">{description}</p>
      </div>

      <div className="mt-auto flex justify-between items-center">
        <span className="text-[0.6rem] font-medium px-2 py-[3px] border-white border-[1px] rounded-sm">
          {date}
        </span>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="w-6 h-6 rounded-full border border-white flex items-center justify-center opacity-80 hover:opacity-100 transition">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="white"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default Card;

