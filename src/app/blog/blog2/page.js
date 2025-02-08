export default function Blog2() {
    return (
      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">Mastering Tailwind CSS</h1>
        <div className="text-gray-400 mt-4 flex items-center space-x-2">
          <time>Feb 7, 2025</time>
          <span>•</span>
          <span>7 min read</span>
        </div>
        <div className="prose prose-invert mt-8">
          <p>Tailwind CSS is a utility-first CSS framework...</p>
          {/* Add more content */}
        </div>
      </article>
    );
  }