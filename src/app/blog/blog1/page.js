export default function Blog1() {
    return (
      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">Getting Started with Next.js</h1>
        <div className="text-gray-400 mt-4 flex items-center space-x-2">
          <time>Feb 8, 2025</time>
          <span>•</span>
          <span>5 min read</span>
        </div>
        <div className="prose prose-invert mt-8">
          <p>Next.js is a powerful framework for building React applications...</p>
          {/* Add more content */}
        </div>
      </article>
    );
  }