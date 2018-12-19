const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost:27017/project3"
);

const adminSeed = [
    {
        username: "admin1",
        password: "password1",
        
    }
]