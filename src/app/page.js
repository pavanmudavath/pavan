// src/app/page.js
import BlogCard from '@/components/BlogCard';
import ProjectCard from '@/components/ProjectCard';


export default function Home() {
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

  const blogPosts = [
    {
      title: "Building a CRUD Application with Node.js, Express, and MongoDB: A Step-by-Step Guide",
      description: "Learn how to build CRUD Operations in NodeJS , Express , and  MongoDB",
      date: "Feb 8, 2025",
      readTime: "5",
      link: "/blog/blog1"
    },
    {
      title: "Getting Started with Next.js",
      description: "Learn how to build modern web applications with Next.js",
      date: "Feb 8, 2025",
      readTime: "5",
      link: "/blog/blog1"
    },
    {
      title: "Getting Started with Next.js",
      description: "Learn how to build modern web applications with Next.js",
      date: "Feb 8, 2025",
      readTime: "5",
      link: "/blog/blog1"
    },
    // Add more blog posts...
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        {/* <Image width={120}  height={100}  src={ProfilePic} alt="ProfileImage"/> */}
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-xl text-gray-300">
          I build amazing web experiences
        </p>
      </section>

      {/* Projects Section */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold mb-8">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </section>
    </div>
  );
}