import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold">Portfolio</Link>
          <div className="flex space-x-8">
            <Link href="/" className="hover:text-blue-400">Home</Link>
            <Link href="/about" className="hover:text-blue-400">About</Link>
            <Link href="/projects" className="hover:text-blue-400">Projects</Link>
            <Link href="/" className="hover:text-blue-400">Blog</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}