'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const hobbies = [
  'Coding',
  'Reading',
  'Gaming',
  'Cricket',
  'Traveling',
  'Drawing',
  'Music',
];

const softSkills = [
  'Communication',
  'Teamwork',
  'Adaptability',
  'Creativity',
  'Problem Solving',
  'Leadership',
  'Time Management',
];

const Hobbies = () => {
  const hobbiesTrackRef = useRef(null);
  const softSkillsTrackRef = useRef(null);
  const hobbiesTweenRef = useRef(null);
  const softSkillsTweenRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const hobbiesTrack = hobbiesTrackRef.current;
      const hobbiesWidth = hobbiesTrack.scrollWidth / 2;

      const softTrack = softSkillsTrackRef.current;
      const softWidth = softTrack.scrollWidth / 2;

      // Hobbies scroll left
      hobbiesTweenRef.current = gsap.fromTo(
        hobbiesTrack,
        { x: 0 },
        {
          x: -hobbiesWidth,
          duration: 20,
          ease: 'none',
          repeat: -1,
          onRepeat: () => gsap.set(hobbiesTrack, { x: 0 }),
        }
      );

      // Soft skills scroll right
      softSkillsTweenRef.current = gsap.fromTo(
        softTrack,
        { x: -softWidth },
        {
          x: 0,
          duration: 20,
          ease: 'none',
          repeat: -1,
          onRepeat: () => gsap.set(softTrack, { x: -softWidth }),
        }
      );

      // Shared ScrollTrigger for both
      ScrollTrigger.create({
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          const velocity = Math.abs(self.getVelocity());
          const scale = 1 + velocity / 300;

          // Apply same speed factor to both
          hobbiesTweenRef.current.timeScale(scale);
          softSkillsTweenRef.current.timeScale(scale);
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-[50vh] md:h-[50vh] w-full flex flex-col justify-center items-center gap-12 text-white">

      {/* Hobbies Marquee */}
      <div className=" w-full overflow-hidden flex items-center">
        <div ref={hobbiesTrackRef} className="flex whitespace-nowrap">
          {[...hobbies, ...hobbies].map((hobby, index) => (
            <div key={index} className="text-4xl font-bold px-12">
              {hobby}
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills Marquee (opposite direction) */}
      <div className=" w-full overflow-hidden flex items-center mt-6">
        <div ref={softSkillsTrackRef} className="flex whitespace-nowrap">
          {[...softSkills, ...softSkills].map((skill, index) => (
            <div key={index} className="text-4xl font-bold px-12 text-yellow-300">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
