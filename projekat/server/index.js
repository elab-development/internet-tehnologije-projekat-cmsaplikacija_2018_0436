require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

// Import middleware functions
const {
  requireSignin,
  isAdmin,
  isAuthor,
  canCreateRead,
  canUpdateDeletePost,
  canDeleteMedia,
  canUpdateDeleteComment,
} = require("./middlewares/index"); // Update this path to the correct one

const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/category");
const postRoutes = require("./routes/post");
const websiteRoutes = require("./routes/website");

const app = express();
const http = require("http").createServer(app);

// Database connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR: ", err));

// Middleware setup
app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// Route middlewares
app.use("/api", authRoutes);
app.use("/api", categoryRoutes);
app.use("/api", postRoutes);
app.use("/api", websiteRoutes);

// Example usage of middleware in routes
app.get("/api/protected", requireSignin, isAdmin, (req, res) => {
  res.send("This route is protected and requires an admin.");
});

const port = process.env.PORT || 8000;

http.listen(port, () => console.log(`Server running on port ${port}`));
