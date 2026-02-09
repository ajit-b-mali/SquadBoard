// backend/models/User.js

import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: ""
    },
    settins: {
        theme: {
            type: String,
            default: "light",
            enum: ["light", "dark"]
        },
        notifications: {
            type: Boolean,
            default: true
        }
    }
}, {
    timestamps: true    // Adds 'createdAt' and 'updateAt' automatically
});

export default mongoose.model('User', UserSchema);
