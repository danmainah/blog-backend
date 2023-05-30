const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author:{
         type: mongoose.Schema.Types.String,
         ref: 'User',
         required: true
    },
    reading_time: {
      type: String,
      select: true,
    },
},
{
  timestamps: true,
},
);

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;