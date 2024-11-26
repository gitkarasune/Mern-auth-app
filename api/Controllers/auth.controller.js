import User from "../modals/user.modal.js"
import bcryptjs from "bcryptjs";
import { handleError } from "../utils/err.js";
import jwt from "jsonwebtoken";;

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10); // for hashing the password with bcryptjs
    const newUser = new User({ username, email, password: hashedPassword});
    try {
        await newUser.save();
        res.status(201).json({ message: "User created successfully"});
    } catch (error) {
        next(error);
    }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const correctUser = await User.findOne({ email });
        if (!correctUser) return next(handleError(404, "Invalid credentials"));
        const correctPassword = bcryptjs.compareSync(password, correctUser.password);
        if (!correctPassword) return next(handleError(401, "wrong credentials"));
        const jToken = jwt.sign({ id: correctUser._id}, process.env.JWT_SECRET);
        const { password: hashedPassword, ...rest } = correctUser._doc;
        const cookieExpiryDate = new Date(Date.now() + 3600000); // 1 Hour
        res.cookie("access_token", jToken, { httpOnly: true, expires: cookieExpiryDate }).status(200).json(rest); 
        // httpOnly is going to prevent some third party application to change this cookie
    } catch (error) {
        next(error);
    }
}