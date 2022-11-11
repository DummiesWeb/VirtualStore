const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 8081;

//middleware
app.use(express.json());
app.use('/api', userRoutes);

// routes
app.get("/", (req, res) => {
    res.send("Welcome to my API");
})

//mongodb connection
mongoose
    .connect(process.env.MONGODB_MONGO)
    .then(() => console.log("Connect to MongoDB Atlas"))
    .catch((error) => console.error(error));


app.listen(port, () => console.log('server listening on port', port));