
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Contact API Rate Limiter
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 5, // Maximum 5 requests
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many messages. Please try again after 15 minutes."
  }
});

// Routes
const contactRoutes = require("./routes/contact");

app.use("/api/contact", contactLimiter, contactRoutes);

// Home API
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Sheikh Fahad Portfolio Backend is running!"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
