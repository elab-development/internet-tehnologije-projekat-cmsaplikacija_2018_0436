const express = require("express");
const router = express.Router();

// Import middlewares
const { requireSignin, isAdmin } = require("../middlewares");

// Import controllers
const {
  create,
  categories,
  removeCategory,
  updateCategory,
  postsByCategory,
} = require("../controllers/category");

router.post("/category", requireSignin, isAdmin, create);
router.get("/categories", categories);
router.delete("/category/:slug", requireSignin, isAdmin, removeCategory);
router.put("/category/:slug", requireSignin, isAdmin, updateCategory);
router.get("/posts-by-category/:slug", postsByCategory);

module.exports = router;
