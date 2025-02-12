"use client"
import ProfilePic from '../../public/ProfilePic.png';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="max-w-4xl mx-auto px-2 py-2 sm:py-5">
      <section className="space-y-2">
        {/* Top Section - Image and Name side by side */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Image */}
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 overflow-hidden ring-4 ring-blue-500/20 dark:ring-blue-500/40">
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
          <div className="flex flex-col justify-top h-56">
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-gray-100">
                Pavan Mudavath
              </h1>
              <p className="text-xl font-medium text-blue-600 dark:text-blue-400">
                Software Engineer @ Auzmor
              </p>
            </div>
          </div>
        </div>

        {/* Bio Section - Full width below */}
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Hello, I'm a Software Engineer with passion for creating user-friendly 
            and complex web applications. I'm also an avid open-source contributor 
            and trying to learn from best minds out there through open source.
          </p>

          {/* CTA Link */}
          <div className="mt-8">
            <Link 
              href="/about" 
              className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
            >
              Learn more about me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};