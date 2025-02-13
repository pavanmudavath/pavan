
import React from 'react';
import ProjectCard from '@/components/ProjectCard';

const page = () => {
      const featuredProjects = [
    {
      title: "Project 1",
      description: "A cool project description",
      image: "/images/project1.jpg",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Project 1",
      description: "A cool project description",
      image: "/images/project1.jpg",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Project 1",
      description: "A cool project description",
      image: "/images/project1.jpg",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Project 1",
      description: "A cool project description",
      image: "/images/project1.jpg",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    // Add more projects...
  ];


  return (
    <div  className="max-w-4xl mx-auto px-4 py-12">
      <section className="mt-20">
        <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default page