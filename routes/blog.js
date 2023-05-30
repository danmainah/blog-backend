const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const commentController = require('../controllers/commentController');

router.post('/', blogController.createBlog);
router.get('/', blogController.getBlogs);
router.get('/:id', blogController.getBlog);
router.put('/:id', blogController.updateBlog);
router.delete('/:id', blogController.deleteBlog);
router.post('/:id/comment', commentController.createComment);
router.get('/:id/comment', commentController.getComments);
router.put(':id/comment/:id', commentController.updateComment);
router.delete(':id/comment/:id', commentController.deleteComment);

module.exports = router;
