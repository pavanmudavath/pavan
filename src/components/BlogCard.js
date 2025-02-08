import Link from 'next/link';

export default function BlogCard({ title, description, date, readTime, link }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="text-sm text-gray-400 flex items-center space-x-2">
        <span>{date}</span>
        <span>•</span>
        <span>{readTime} min read</span>
      </div>
      <h3 className="text-xl font-bold mt-2">{title}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
      <Link 
        href={link} 
        className="text-blue-400 hover:text-blue-300 mt-4 inline-block"
      >
        Read more →
      </Link>
    </div>
  );
}