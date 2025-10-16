require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path=require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes")

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || "*",
  methods: ["GET","PUT", "OPTIONS" ,"DELETE"],
  allowedHeaders: ["Content-Type","Authorization"],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function start() {
  try {
    console.log("🌐 Connecting to MongoDB…");
    await connectDB();
    console.log("✅ MongoDB connected");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err);
    process.exit(1);
  }
}
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/income",incomeRoutes);
app.use("/api/v1/expense",expenseRoutes);
app.use("/api/v1/dashboard",dashboardRoutes);
// Server uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


start();
