// index.js  
const express = require('express');  
const mongoose = require('mongoose');  
const cors = require('cors');  
const dotenv = require('dotenv');  

// Load env variables  
dotenv.config();  

const app = express();  

// Middleware  
app.use(cors());  
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  

// Connect to MongoDB  
mongoose.connect(process.env.MONGODB_URI, {  
    useNewUrlParser: true,  
    useUnifiedTopology: true,  
}).then(() => console.log("MongoDB connected"))  
  .catch(err => console.log(err));  

// Import routes  
const userRoutes = require('./routes/userRoutes');  
const postRoutes = require('./routes/postRoutes');  

// Define routes  
app.use('/api/users', userRoutes);  
app.use('/api/posts', postRoutes);  

// Start server  
const PORT = process.env.PORT || 5000;  
app.listen(PORT, () => {  
    console.log(`Server is running on port ${PORT}`);  
});