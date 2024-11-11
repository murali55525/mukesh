// db.js
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const connectDB = async () => {
  try {
    // Get the Mongo URI from the .env file
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Log success message
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    // Log error and exit the process
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Export the connectDB function to be used in other parts of your app
module.exports = connectDB;
