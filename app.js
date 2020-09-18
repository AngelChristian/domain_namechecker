const express = require('express');
require('dotenv').config();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;


// app.use(bodyParser.urlencoded({
//     extended: true
// }));

//DB Connection
// mongoose
//     .connect(process.env.DB, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true
//     })
//     .then(() => {
//         console.log("DB CONNECTED");
//     });

app.use(bodyParser.json());


// Routes
const checkerRoute = require('./routes/checker');

// middleware
app.use('/', checkerRoute);

app.use(express.static('public'));




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))