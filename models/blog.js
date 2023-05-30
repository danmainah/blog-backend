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
    comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Comment'
      }
   ],
    reading_time: {
      type: String,
      select: true,
    },
},
{
  timestamps: true,
},
);
blogSchema.virtual('url').get(function(){
  return '/blog/' + this._id
})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
