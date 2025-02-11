export default function Blog1() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Building a CRUD Application with Node.js, Express, and MongoDB: A Step-by-Step Guide</h1>
      <div className="text-gray-400 mt-4 flex items-center space-x-2">
        <time>Feb 8, 2025</time>
        <span>•</span>
        <span>5 min read</span>
      </div>
      <div className="prose prose-invert mt-8">
        <h2 className="text-2xl font-bold">What You'll Learn</h2>
        <p>By the end of this Blog, you'll have a solid understanding of:</p>
        <ul className="list-disc pl-5">
          <li>Setting up a Node.js project.</li>
          <li>Connecting to a MongoDB database.</li>
          <li>Basic Server SetUp in Express</li>
          <li>About Nodemon.</li>
          <li>About Mongoose.</li>
          <li>Creating RESTful APIs for CRUD operations.</li>
          <li>About Postman</li>
        </ul>
      </div>
      <div className="prose prose-invert mt-8">
        <h2 className="text-2xl font-bold">Prerequisites</h2>
        <p>Before we begin, make sure you have the following installed:</p>
        <ul className="list-disc pl-5">
          <li>Node.js (Download from nodejs.org)</li>
          <li>MongoDB (Install locally or use MongoDB Atlas for a cloud-based database)</li>
          <li>A code editor like VS Code</li>
          <li>Basic knowledge of JavaScript and REST APIs</li>
        </ul>
      </div>
      <div className="prose prose-invert mt-8">
        <h2 className="text-2xl font-bold">Step 1: Set Up Your Project</h2>
        <p>To start, create a new directory for your project and initialize a Node.js project:</p>
        <pre className="bg-gray-800 p-4 rounded-md">
          <code>
            {`mkdir my-crud-app
cd my-crud-app
npm init -y`}
          </code>
        </pre>
        <p>This will generate a `package.json` file, which will keep track of your project's dependencies and scripts.</p>
      </div>
      <div className="prose prose-invert mt-8">
        <h2 className="text-2xl font-bold">Step 2: Install Required Dependencies</h2>
        <p>Next, install the necessary packages:</p>
        <pre className="bg-gray-800 p-4 rounded-md">
          <code>
            {`npm install express mongoose body-parser cors nodemon`}
          </code>
        </pre>
        <ul className="list-disc pl-5">
          <li><strong>Express</strong>: A web framework for Node.js.</li>
          <li><strong>Mongoose</strong>: An ODM (Object Data Modeling) library for MongoDB.</li>
          <li><strong>Body-parser</strong>: Middleware to parse incoming request bodies.</li>
          <li><strong>CORS</strong>: Middleware to enable Cross-Origin Resource Sharing.</li>
          <li><strong>Nodemon</strong>: A utility to automatically restart the server during development.</li>
        </ul>
      </div>
      <div className="prose prose-invert mt-8">
        <h2 className="text-2xl font-bold">Step 3: Set Up a Basic Express Server</h2>
        <p>Create a file named `server.js` and set up a basic Express server:</p>
        <pre className="bg-gray-800 p-4 rounded-md">
          <code>
            {`const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, CRUD App!');
});

app.listen(PORT, () => {
  console.log(\`Server is running on http://localhost:\${PORT}\`);
});`}
          </code>
        </pre>
        <p>Run the server using Nodemon:</p>
        <pre className="bg-gray-800 p-4 rounded-md">
          <code>
            {`nodemon server.js`}
          </code>
        </pre>
        <p>Visit `http://localhost:5000` in your browser to see the message "Hello, CRUD App!".</p>
      </div>
      <div className="prose prose-invert mt-8">
        <h2 className="text-2xl font-bold">Step 4: Connect to MongoDB</h2>
        <p>Create a `config` folder and add a `db.js` file to handle the MongoDB connection:</p>
        <pre className="bg-gray-800 p-4 rounded-md">
          <code>
            {`const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/my-crud-app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;`}
          </code>
        </pre>
        <p>Update `server.js` to connect to the database when the server starts:</p>
        <pre className="bg-gray-800 p-4 rounded-md">
          <code>
            {`const connectDB = require('./config/db');

connectDB();`}
          </code>
        </pre>
      </div>
      <div className="prose prose-invert mt-8">
        <h2 className="text-2xl font-bold">Step 5: Define a Mongoose Model</h2>
        <p>Create a `models` folder and add a `Post.js` file to define a schema for your data:</p>
        <pre className="bg-gray-800 p-4 rounded-md">
          <code>
            {`const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Post', PostSchema);`}
          </code>
        </pre>
      </div>
      <div className="prose prose-invert mt-8">
        <h2 className="text-2xl font-bold">Step 6: Create RESTful APIs</h2>
        <p>Now, let's create routes for CRUD operations. Add a `routes` folder and create a `postRoutes.js` file:</p>
        <pre className="bg-gray-800 p-4 rounded-md">
          <code>
            {`const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

// Create a new post
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  try {
    const post = new Post({ title, content });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error creating post' });
  }
});

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts' });
  }
});

// Get a single post by ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching post' });
  }
});

// Update a post
router.put('/:id', async (req, res) => {
  const { title, content } = req.body;
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error updating post' });
  }
});

// Delete a post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post' });
  }
});

module.exports = router;`}
          </code>
        </pre>
        <p>Update `server.js` to use the routes:</p>
        <pre className="bg-gray-800 p-4 rounded-md">
          <code>
            {`const postRoutes = require('./routes/postRoutes');

app.use('/api/posts', postRoutes);`}
          </code>
        </pre>
      </div>
      <div className="prose prose-invert mt-8">
        <h2 className="text-2xl font-bold">Step 7: Test Your APIs with Postman</h2>
        <p>Use Postman to test your CRUD operations:</p>
        <ul className="list-disc pl-5">
          <li>Create a new post using a POST request to `http://localhost:5000/api/posts`.</li>
          <li>Fetch all posts using a GET request to `http://localhost:5000/api/posts`.</li>
          <li>Fetch a single post by ID using a GET request to `http://localhost:5000/api/posts/:id`.</li>
          <li>Update a post using a PUT request to `http://localhost:5000/api/posts/:id`.</li>
          <li>Delete a post using a DELETE request to `http://localhost:5000/api/posts/:id`.</li>
        </ul>
      </div>
      <div className="prose prose-invert mt-8">
        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p>Congratulations! You've successfully built a CRUD application using Node.js, Express, and MongoDB. You've learned how to set up a project, connect to a database, define models, and create RESTful APIs. This foundation can be extended to build more complex applications.</p>
      </div>
    </article>
  );
}