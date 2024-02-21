const mongoose = require("mongoose");

const DB_URI = "mongodb+srv://berrioisaac15:gtvLy4g7WZ7YQUzY@ddbb.mzpatep.mongodb.net/"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(DB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB