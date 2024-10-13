const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = 5000;
// Corrected import statement
const app = express();
const blogRoutes=require('./routes/blogRoutes');
app.use(cors());
app.use(express.json());
app.use('/',blogRoutes);





// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });

// Uncomment this if you want to test the server is running
// app.get("/", (req, res) => {
//     res.send(`Server running on port ${PORT}`);
// });
