const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // Optional TLS debugging
      // tls: true,
      // tlsAllowInvalidCertificates: true,
    });
    // Optionally add these listeners
    mongoose.connection.on("error", (err) => console.error("Connection error:", err));
    mongoose.connection.on("disconnected", () => console.warn("MongoDB disconnected"));
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    throw err;  // Ensure error is propagated
  }
};

module.exports = connectDB;
