// src/components/Navbar.js
"use client";
import Link from 'next/link';
import IconPNG from '../../public/icon.png';
import Image from 'next/image';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className={`fixed mt-2 w-full z-10 ${isDarkMode ? 'dark' : ''}`}>
      <div
        className={`max-w-4xl rounded-lg mx-auto px-4 border-b ${
          isDarkMode
            ? 'bg-gray-900 border-gray-700 text-white'
            : 'bg-white border-gray-300 text-black'
        }`}
      >
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <Image width={50} height={100} src={IconPNG} alt="ProfileImage" />
          </Link>
          <div className="flex space-x-8 items-center">
            <Link href="/" className="relative group">
              <span className="font-bold">Home</span>
              <span className="absolute left-0 bottom-0 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/projects" className="relative group">
              <span className="font-bold">Projects</span>
              <span className="absolute left-0 bottom-0 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="relative group">
              <span className="font-bold">About</span>
              <span className="absolute left-0 bottom-0 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/" className="relative group">
              <span className="font-bold">Blog</span>
              <span className="absolute left-0 bottom-0 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full hover:bg-opacity-20 ${
                isDarkMode
                  ? 'text-white hover:bg-gray-700'
                  : 'text-black hover:bg-gray-300'
              }`}
            >
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}