import User from "../modals/user.modal.js"
import bcryptjs from "bcryptjs";

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
}