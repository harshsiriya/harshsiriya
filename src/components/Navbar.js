'use client';
import Image from "next/image";
import logo from "@/assets/logoBgOrange.png";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Icons with links
  const iconLinks = [
    {
      Icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/harsh-siriya-19b218224/", // replace with your actual LinkedIn
      label: "LinkedIn",
    },
    {
      Icon: HiOutlineMail,
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=siriyaharsh@gmail.com",
      label: "Email",
    },
    {
      Icon: FaTwitter,
      url: "https://x.com/SiriyaHarsh01?t=MX3qPuomyKJqnFPYigIC1g&s=08", // replace with your actual Twitter
      label: "Twitter",
    },
  ];

  return (
    <div className="bg-[#ff5e41] p-4 flex justify-center">
      <div className="bg-[#ff5e41] max-w-7xl w-full rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.3)] px-4 py-2 border border-[#ff5e41]">

        {/* Top Bar: Logo + Hamburger */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center bg-white rounded-l-xl px-4 py-2">
            <Image src={logo} alt="logo" width={60} height={60} />
            <div className="ml-2 text-[#ff5e41] font-semibold leading-tight text-sm">
              <div className="text-lg font-bold">HS</div>
              <div className="text-xs tracking-widest">HARSH SIRIYA</div>
            </div>
          </div>

          {/* Hamburger (Mobile Only) */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <HiX className="text-white text-2xl" />
              ) : (
                <HiMenu className="text-white text-2xl" />
              )}
            </button>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <a href="#work" className="text-white font-semibold text-base mx-4 hover:text-yellow-300">WORK</a>
            <a href="#about" className="text-white font-semibold text-base mx-4 hover:text-yellow-300">ABOUT</a>
            <a href="#achievements" className="text-white font-semibold text-base mx-4 hover:text-yellow-300">ACHIEVEMENTS</a>
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex gap-4 items-center text-white">
            {iconLinks.map(({ Icon, url, label }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-full hover:border-2 hover:border-yellow-300 transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Dropdown (Nav Links + Socials) */}
        {menuOpen && (
          <div className="flex flex-col items-center gap-3 mt-4 md:hidden">
            <a href="#work" className="text-white font-semibold text-sm hover:underline">WORKS</a>
            <a href="#about" className="text-white font-semibold text-sm hover:underline">ABOUT</a>
            <a href="#achievements" className="text-white font-semibold text-sm hover:underline">ACHIEVEMENTS</a>
            <div className="flex gap-4 mt-2">
              {iconLinks.map(({ Icon, url, label }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-full hover:border-2 hover:border-yellow-300 transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;
