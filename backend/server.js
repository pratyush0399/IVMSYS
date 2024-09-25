const express = require('express');
//const MongoDB = require('mongo');
const mongoose = require('mongoose');
//const connectDB = require('./config/db');
const visitRoutes = require('./routes/visitRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/bookingRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

require('dotenv').config();

const app = express();

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1); // Exit process with failure
    }
  };
  
  // Connect to MongoDB
  connectDB();


// Middleware
app.use(express.json()); // for parsing application/json

// Routes
app.use('/api', visitRoutes);
app.use('/api', authRoutes);
app.use('/api', userRoutes);

// Error handling middleware
app.use(errorMiddleware);

// const PORT = process.env.PORT || 5000;
//app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// // server.js
// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');
// const authConfig = require('./config/auth');
// require('dotenv').config();

// // Initialize the Express app
// const app = express();

// // Connect to the MongoDB database
// connectDB();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Routes
app.use('/api/auth', authRoutes);
app.use('/api/visits', require('./routes/visitRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));

// // Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
