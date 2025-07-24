"use client";
import Image from "next/image";
import heroimg from "@/assets/newHeroImg.png";
import { motion } from "framer-motion";

const Hero = () => {
  const name = "Harsh Siriya";

  return (
    <section className="flex items-center justify-center px-6 md:px-12 pb-[50px]">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl w-full">
        {/* Left Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="w-full md:w-1/2 flex flex-col items-center justify-center text-center md:text-center space-y-6 mt-8 md:mt-0"
        >
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight flex flex-wrap justify-center">
            {name.split("").map((char, index) => (
              <span
                key={index}
                className="transition duration-300 ease-in-out hover:text-yellow-400"
                style={{
                  display: "inline-block",
                  transition: "all 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.target.style.textShadow = "0 0 8px #facc15"; // Tailwind's yellow-300 hex
                }}
                onMouseLeave={(e) => {
                  e.target.style.textShadow = "none";
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <p className="text-lg max-w-md md:max-w-full">
            A passionate developer turning ideas into reality. I build web and
            mobile applications using modern technologies 💡.
          </p>
          <div className="flex justify-center gap-4 mt-4">
      <a
        href="https://github.com/harshsiriya"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-[#e84e34] border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-[#ff5e41] hover:text-yellow-300 hover:border-yellow-300 transition">
          View Projects 👀
        </button>
      </a>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=siriyaharsh@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-[#e84e34] border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-[#ff5e41] hover:text-yellow-300 hover:border-yellow-300 transition">
          Contact Me 📲
        </button>
      </a>
    </div>

        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image src={heroimg} alt="hero img" height={660} width={600} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
