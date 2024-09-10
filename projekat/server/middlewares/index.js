const expressJwt = require("express-jwt");
const User = require("../models/user");
const Post = require("../models/post");
const Media = require("../models/media");
const Comment = require("../models/comment");
require("dotenv").config();

// Middleware for requiring sign-in
exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});

// Middleware to check if the user is an Admin
exports.isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.role !== "Admin") {
      return res.status(403).send("Unauthorized");
    }
    next();
  } catch (err) {
    console.log(err);
  }
};

// Middleware to check if the user is an Author
exports.isAuthor = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.role !== "Author") {
      return res.status(403).send("Unauthorized");
    }
    next();
  } catch (err) {
    console.log(err);
  }
};

// Middleware for checking create/read permissions
exports.canCreateRead = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.role === "Admin" || user.role === "Author") {
      next();
    } else {
      return res.status(403).send("Unauthorized");
    }
  } catch (err) {
    console.log(err);
  }
};

// Middleware for checking update/delete permissions for posts
exports.canUpdateDeletePost = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    const post = await Post.findById(req.params.postId);
    if (
      user.role === "Admin" ||
      (user.role === "Author" &&
        post.postedBy.toString() === user._id.toString())
    ) {
      next();
    } else {
      return res.status(403).send("Unauthorized");
    }
  } catch (err) {
    console.log(err);
  }
};

// Middleware for checking delete permissions for media
exports.canDeleteMedia = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    const media = await Media.findById(req.params.id);
    if (
      user.role === "Admin" ||
      (user.role === "Author" &&
        media.postedBy.toString() === req.user._id.toString())
    ) {
      next();
    } else {
      return res.status(403).send("Unauthorized");
    }
  } catch (err) {
    console.log(err);
  }
};

// Middleware for checking update/delete permissions for comments
exports.canUpdateDeleteComment = async (req, res, next) => {
  try {
    const { commentId } = req.params;
    const comment = await Comment.findById(commentId);
    const user = await User.findById(req.user._id);
    if (
      user.role === "Admin" ||
      (user.role === "Author" &&
        comment.postedBy.toString() === req.user._id.toString()) ||
      (user.role === "Subscriber" &&
        comment.postedBy.toString() === req.user._id.toString())
    ) {
      next();
    } else {
      return res.status(403).send("Unauthorized");
    }
  } catch (err) {
    console.log(err);
  }
};
