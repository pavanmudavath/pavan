// src/app/layout.js
"use client";
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import { useTheme } from '@/context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

// Separate client component for the themed body
function ThemedBody({ children }) {
  const { isDarkMode } = useTheme();
  
  return (
    <body 
      className={`${inter.className} transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-900 text-white' 
          : 'bg-white text-gray-900'
      }`}
    >
      <Navbar />
      <main className="pt-16 min-h-screen px-4">
        {children}
      </main>
      <Footer />
    </body>
  );
}

// Root layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <ThemedBody>{children}</ThemedBody>
      </ThemeProvider>
    </html>
  );
}