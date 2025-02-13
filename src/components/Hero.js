"use client";
import ProfilePic from '../../public/ProfilePic.png';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Github, Twitter } from 'lucide-react';

export const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="max-w-4xl mx-auto px-2 py-2 sm:py-1">
      <section className="space-y-2">
        {/* Top Section - Image and Name side by side */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Image */}
          <div className="flex-shrink-0">
            <div className={`relative w-32 h-32 overflow-hidden ring-4 ${
              isDarkMode ? 'ring-blue-500/40' : 'ring-blue-500/20'
            }`}>
              <Image
                src={ProfilePic}
                alt="Pavan Mudavath"
                fill
                className="object-cover transition-transform duration-300"
                priority
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="flex flex-row justify-top h-36">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <h1 className={`text-3xl sm:text-4xl font-bold ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  Pavan Mudavath 
                </h1>
                <a href="https://twitter.com" className={`${
                  isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                }`}>
                  <Twitter size={24} />
                </a>
              </div>
              <div className='flex gap-6'>
                <p className={`text-lg font-medium ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  Software Engineer 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Section - Full width below */}
        <div className="max-w-3xl ">
          <p className={`text-lg leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Hello, I{`'`}m a  Engineer with passion for creating user-friendly 
            and complex web applications. I{`'`}m also an avid open-source contributor 
            and trying to learn from best minds out there through open source.
          </p>

          {/* CTA Link */}
          <div className="mt-8">
            <Link 
              href="/projects" 
              className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white ${
                isDarkMode 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-blue-600 hover:bg-blue-700'
              } rounded-lg transition-colors duration-300`}
            >
              Discover My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};