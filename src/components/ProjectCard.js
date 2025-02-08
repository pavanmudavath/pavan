// src/components/ProjectCard.js
import Image from 'next/image';
import projectImage from './../../public/mern.jpg';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ title, description, image, github, demo }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={projectImage}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
        <div className="flex space-x-4 mt-4">
          <a href={github} className="hover:text-blue-400">
            <Github size={20} />
          </a>
          <a href={demo} className="hover:text-blue-400">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}