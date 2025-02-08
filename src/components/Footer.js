// src/components/Footer.js
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a href="https://github.com" className="hover:text-blue-400">
            <Github size={24} />
          </a>
          <a href="https://twitter.com" className="hover:text-blue-400">
            <Twitter size={24} />
          </a>
          <a href="https://linkedin.com" className="hover:text-blue-400">
            <Linkedin size={24} />
          </a>
        </div>
        <p className="text-gray-400">© 2025 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}