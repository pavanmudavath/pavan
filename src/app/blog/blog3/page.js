export default function Blog3() {
    return (
      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">Web Development Best Practices</h1>
        <div className="text-gray-400 mt-4 flex items-center space-x-2">
          <time>Feb 6, 2025</time>
          <span>•</span>
          <span>6 min read</span>
        </div>
        <div className="prose prose-invert mt-8">
          <p>Following best practices is crucial for building maintainable web applications...</p>
          {/* Add more content */}
        </div>
      </article>
    );
  }