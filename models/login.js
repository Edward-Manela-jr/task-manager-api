const mongoose = require('mongoose');

// Define the Users schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    // requir/ed: true,
  }
//   role: {
//     type: String,
//     enum: ['admin', 'user'], // Only 'admin' or 'user' are allowed
//     default: 'user',
//   },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;