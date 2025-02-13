"use client";
import { Github, Twitter, Linkedin } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function Footer() {
  const { isDarkMode } = useTheme();
  
  return (
    <footer className={`py-8 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a href="https://github.com" className={`${
            isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
          }`}>
            <Github size={24} />
          </a>
          <a href="https://twitter.com" className={`${
            isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
          }`}>
            <Twitter size={24} />
          </a>
          <a href="https://linkedin.com" className={`${
            isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
          }`}>
            <Linkedin size={24} />
          </a>
        </div>
        <p className={`${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>© 2025 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}