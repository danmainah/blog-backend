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
  // get the user id
//   const blogRelated = await User.findById(req.params.id);
//   // push the comments created  into the user.comments array
//   blogRelated.comments.push(comment); 
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
