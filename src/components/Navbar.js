"use client"
import Link from 'next/link';
import IconPNG from '../../public/icon.png';
import Image from 'next/image';
import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Icons for light and dark mode

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <nav className={`fixed w-full z-10 ${isDarkMode ? 'dark' : ''}`}>
      <div className={`max-w-4xl bg-gray-50 rounded-lg mx-auto px-4`}>
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <Image width={50} height={100} src={IconPNG} alt="ProfileImage" />
          </Link>
          <div className="flex space-x-8 items-center">
            <Link href="/" className="relative group">
              <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Home</span>
              <span className="absolute left-0 bottom-0 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="relative group">
              <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>About</span>
              <span className="absolute left-0 bottom-0 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/projects" className="relative group">
              <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Projects</span>
              <span className="absolute left-0 bottom-0 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/" className="relative group">
              <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Blog</span>
              <span className="absolute left-0 bottom-0 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full hover:bg-opacity-20 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-300'}`}
            >
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}