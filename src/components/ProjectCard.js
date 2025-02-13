"use client";
import Image from 'next/image';
import projectImage from './../../public/mern.jpg';
import { Github, ExternalLink } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function ProjectCard({ title, description, image, github, demo }) {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`rounded-lg overflow-hidden ${
      isDarkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'
    }`}>
      <div className="relative h-48">
        <Image
          src={projectImage}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-bold ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>{title}</h3>
        <p className={`mt-2 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>{description}</p>
        <div className="flex space-x-4 mt-4">
          <a href={github} className={`${
            isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
          }`}>
            <Github size={20} />
          </a>
          <a href={demo} className={`${
            isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
          }`}>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}