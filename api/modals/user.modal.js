import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { // For the Username
        type: String,
        require: true,
        unique: true,
    },
    email: { // For the Emails
        type: String,
        require: true,
        unique: true,
    },
    password: { // For the Password
        type: String,
        require: true,
    },
}, { timestamps: true});

const User = mongoose.model("User", userSchema);
export default User;