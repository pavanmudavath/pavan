"use client";
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function BlogCard({ title, description, date, readTime, link }) {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`rounded-lg p-6 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'
    }`}>
      <div className={`text-sm flex items-center space-x-2 ${
        isDarkMode ? 'text-gray-400' : 'text-gray-500'
      }`}>
        <span>{date}</span>
        <span>•</span>
        <span>{readTime} min read</span>
      </div>
      <h3 className={`text-xl font-bold mt-2 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>{title}</h3>
      <p className={`mt-2 ${
        isDarkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>{description}</p>
      <Link 
        href={link} 
        className={`mt-4 inline-block ${
          isDarkMode 
            ? 'text-blue-400 hover:text-blue-300' 
            : 'text-blue-600 hover:text-blue-500'
        }`}
      >
        Read more →
      </Link>
    </div>
  );
}