"use client";
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { 
  GraduationCap, 
  Briefcase, 
  Code, 
  Trophy,
  Mail,
  Phone,
  Github,
  Linkedin,
  Globe,
  Calendar,
  MapPin
} from 'lucide-react';
import Link from 'next/link';

const ResumePage = () => {
  const { isDarkMode } = useTheme();

  const baseCardClass = `rounded-lg p-6 transition-all duration-300 ${
    isDarkMode ? 'bg-gray-800/50 hover:bg-gray-800/70' : 'bg-white shadow-lg hover:shadow-xl'
  }`;

  const headingClass = `text-2xl font-bold mb-4 flex items-center gap-2 ${
    isDarkMode ? 'text-white' : 'text-gray-900'
  }`;

  const textClass = `${
    isDarkMode ? 'text-gray-300' : 'text-gray-600'
  }`;

  return (
    <div className={`min-h-screen py-16 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <div className={`${baseCardClass} mb-8`}>
          <h1 className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Mudavath Pavan
          </h1>
          <p className={`${textClass} mb-4`}>
            Hi, I{`'`}m Pavan, a passionate Software Engineer with a strong foundation in the MERN stack and a knack for solving complex problems. I thrive in collaborative environments and am always eager to learn and grow. Let{`'`}s build something amazing together!
          </p>
          <div className={`flex flex-wrap gap-4 ${textClass}`}>
            <Link href="mailto:mudavathpavankumar822@gmail.com" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <Mail size={18} />
              <span>mudavathpavankumar822@gmail.com</span>
            </Link>
            <Link href="tel:+919391981527" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <Phone size={18} />
              <span>+91 9391981527</span>
            </Link>
            <Link href="https://github.com" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <Github size={18} />
              <span>GitHub</span>
            </Link>
            <Link href="https://linkedin.com" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </Link>
            <Link href="https://portfolio.com" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <Globe size={18} />
              <span>Portfolio</span>
            </Link>
          </div>
        </div>

        {/* Education Section */}
        <div className={`${baseCardClass} mb-8`}>
          <h2 className={headingClass}>
            <GraduationCap className="text-blue-500" />
            Education
          </h2>
          <div className="space-y-6">
            <TimelineItem 
              title="Master of Engineering in Electronics and Communication"
              organization="Osmania University"
              date="2024 - 2026"
              location="Hyderabad"
              isDarkMode={isDarkMode}
              current
            />
            <TimelineItem 
              title="Bachelor of Engineering in Electronics and Communication"
              organization="CMR Institute of Technology"
              date="Aug 2019 - Aug 2023"
              location="Hyderabad"
              isDarkMode={isDarkMode}
            />
            <TimelineItem 
              title="Intermediate (MPC)"
              organization="Royal Junior College"
              date="Aug 2017 - Aug 2019"
              location="Hyderabad"
              isDarkMode={isDarkMode}
            />
          </div>
        </div>

        {/* Experience Section */}
        <div className={`${baseCardClass} mb-8`}>
          <h2 className={headingClass}>
            <Briefcase className="text-blue-500" />
            Experience
          </h2>
          <div className="space-y-6">
            <TimelineItem 
              title="Software Engineer, Intern"
              organization="ZIDIO"
              date="04/2024 - Current"
              location="Remote"
              isDarkMode={isDarkMode}
              description={[
                "Developed dynamic web applications using the MERN stack",
                "Contributed to various project phases, including design, development, and testing",
                "Utilized agile methodologies and version control systems"
              ]}
              current
            />
            <TimelineItem 
              title="Teaching Assistant (TA)"
              organization="100xDev"
              date="10/2023 - 12/2023"
              location="Remote"
              isDarkMode={isDarkMode}
              description={[
                "Assisted students in the MERN Stack and Open Source Course",
                "Provided guidance and supported students in their learning journey",
                "Enhanced teaching and communication skills"
              ]}
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className={`${baseCardClass} mb-8`}>
          <h2 className={headingClass}>
            <Code className="text-blue-500" />
            Skills
          </h2>
          <div className="space-y-4">
            <SkillCategory 
              title="Languages"
              skills={["JavaScript", "Java"]}
              isDarkMode={isDarkMode}
            />
            <SkillCategory 
              title="Development"
              skills={["NextJs", "React", "NodeJS", "Express", "MongoDB", "Tailwind CSS", "Material UI", "CSS", "HTML"]}
              isDarkMode={isDarkMode}
            />
            <SkillCategory 
              title="Developer Tools"
              skills={["VS Code", "GitHub", "Git", "Vercel", "PostMan", "mongoDBCompass"]}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>

        {/* Certifications Section */}
        <div className={`${baseCardClass}`}>
          <h2 className={headingClass}>
            <Trophy className="text-blue-500" />
            Certifications & Achievements
          </h2>
          <ul className={`list-disc pl-5 space-y-2 ${textClass}`}>
            <li>Solved 200+ DSA Problems on LeetCode, GeeksForGeeks, and CodeChef</li>
            <li>Participated in ANVESHANA Science and Engineering Fair at GNITS (AGASTYA)</li>
            <li>Certificate in JavaScript - Udemy</li>
            <li>Certificate in Data Structures and Algorithms (DSA) in Java - ApnaCollage</li>
            <li>Certificate in Full Stack Development (MERN) - 100xDev</li>
            <li>GitHub Certificate: Proficient in GitHub through Eddie Hub</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ title, organization, date, location, description, isDarkMode, current }) => (
  <div className={`relative pl-6 ${current ? 'border-l-2 border-blue-500' : ''}`}>
    <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
    <p className={`text-lg font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{organization}</p>
    <div className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
      <Calendar size={14} />
      <span>{date}</span>
      <MapPin size={14} />
      <span>{location}</span>
    </div>
    {description && (
      <ul className={`mt-2 space-y-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {description.map((item, index) => (
          <li key={index} className="list-disc ml-4">{item}</li>
        ))}
      </ul>
    )}
  </div>
);

const SkillCategory = ({ title, skills, isDarkMode }) => (
  <div>
    <h3 className={`font-medium mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default ResumePage;