const Comment = require('../models/comment');
const Blog = require('../models/blog');
const User = require('../models/user');

exports.getComments = async (req, res) => {
  const comments = await Comment.find();
  res.json(comments);
};

exports.createComment = async (req , res) => {
  const blog = await Blog.findById(req.params.id)
  const comment = new Comment({
    message: req.body.message,
    blog: blog._id, 
    author: req.session.id
  });
  await comment.save();
  const email = req.session.email
  const userComments = await User.findOne( { email } ); 
  // push the comments created  into the user.comments array 
  userComments.comments.push(comment); 
  // push the comments created  into the blog.comments array 
  blog.comments.push(comment); 
  res.json(comment);
};


exports.updateComment = async (req, res) => {
  const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(comment);
};

exports.deleteComment = async (req, res) => {
  await Comment.findByIdAndDelete(req.params.id);
  res.json({ message: 'comment deleted' });
};
