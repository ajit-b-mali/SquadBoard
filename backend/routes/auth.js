// backend/routes/auth.js

import express from 'express';
import bcrypt from 'bcryptjs';

import User from '../models/User.js';

const router = express.Router();

// REGISTER
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({message: 'User already exists'});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        const user = await newUser.save();

        const { password: _, ...otherDetails } = user._doc;
        res.status(201).json(otherDetails);
    } catch(err) {
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: "Wrong password" });
        }

        const { password: _, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;
