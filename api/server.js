import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();

mongoose.connect(process.env.MERN_AUTH_KEY).then(() => {
    console.log("Connected to MongoDB"); // If connected to MongoDB, we displaying on the console
}).catch((err) => {
    console.log(err); // If not, we are catching the error and see whats wrong
});

const app = express();

app.use(express.json()); // Allows for testing apis

app.listen(3000, () => {
    console.log('Server Running on Port 3000');
    // were listening on port 3000
});

// app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes); // Here we are using the name export from auth.route.js

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message  = err.message || "Internal erver Error";
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});