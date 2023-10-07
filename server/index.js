const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const sroutes = require('./routes/stripeRoute');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/stripe', sroutes);

app.listen(5000, () => {
    console.log("Server listening on port 5000")
})