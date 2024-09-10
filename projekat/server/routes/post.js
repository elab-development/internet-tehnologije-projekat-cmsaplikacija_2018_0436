const express = require("express");
const formidable = require("express-formidable");
const router = express.Router();

// Import middlewares
const {
  requireSignin,
  isAdmin,
  canCreateRead,
  canUpdateDeletePost,
  canDeleteMedia,
  canUpdateDeleteComment,
} = require("../middlewares");

// Import controllers
const {
  uploadImage,
  createPost,
  posts,
  uploadImageFile,
  media,
  removeMedia,
  singlePost,
  removePost,
  editPost,
  postsByAuthor,
  postCount,
  postsForAdmin,
  createComment,
  comments,
  userComments,
  commentCount,
  updateComment,
  removeComment,
  getNumbers,
} = require("../controllers/post");

router.post("/upload-image", requireSignin, canCreateRead, uploadImage);
router.post(
  "/upload-image-file",
  formidable(),
  requireSignin,
  canCreateRead,
  uploadImageFile
);
router.post("/create-post", requireSignin, canCreateRead, createPost);
router.get("/posts/:page", posts);
router.get("/post/:slug", singlePost);
router.delete("/post/:postId", requireSignin, canUpdateDeletePost, removePost);
router.put("/edit-post/:postId", requireSignin, canUpdateDeletePost, editPost);
router.get("/posts-by-author", requireSignin, postsByAuthor);
router.get("/post-count", postCount);
router.get("/posts-for-admin", requireSignin, isAdmin, postsForAdmin);

// Media routes
router.get("/media", requireSignin, canCreateRead, media);
router.delete("/media/:id", requireSignin, canDeleteMedia, removeMedia);

// Comment routes
router.post("/comment/:postId", requireSignin, createComment);
router.get("/comments/:page", requireSignin, isAdmin, comments);
router.get("/user-comments", requireSignin, userComments);
router.get("/comment-count", commentCount);
router.put(
  "/comment/:commentId",
  requireSignin,
  canUpdateDeleteComment,
  updateComment
);
router.delete(
  "/comment/:commentId",
  requireSignin,
  canUpdateDeleteComment,
  removeComment
);
router.get("/numbers", getNumbers);

module.exports = router;
