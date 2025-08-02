const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS)
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// About route
app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1><p>This is a sample CI/CD deployed app on AWS ECS by AK.</p>");
});

// Contact route
app.get("/contact", (req, res) => {
  res.send("<h1>Contact</h1><p>Email us at support@example.com</p>");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 App running at http://localhost:${PORT}`);
});
