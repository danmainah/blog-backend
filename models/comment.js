const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    message: {
      type: String,
      required: true,
    },
    blog:{
         type: mongoose.Schema.Types.String,
         ref: 'Blog',
         required: true
    },
    author:{
        type: mongoose.Schema.Types.String,
        ref: 'User',
        required: true
   },
   
},
{
  timestamps: true,
},
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
