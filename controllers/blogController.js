const Blog = require('../models/blog');
const User = require('../models/user');

exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
};

exports.createBlog = async (req , res) => {
  const blog = new Blog({
    title: req.body.title,
    content: req.body.content,
    author: req.session.name, 
    reading_time: req.body.reading_time
  });
  await blog.save();
  const email = req.session.email
  const userBlogs = await User.findOne( { email } ); 
  // push the blogs created  into the user.blogs array 
  userBlogs.blogs.push(blog); 
  res.json(blog);
};

exports.getBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.json(blog);
};

exports.updateBlog = async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(blog);
};

exports.deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: 'Blog deleted' });
};
