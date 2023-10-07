const express = require("express");
const stripe = require("stripe")(process.env.STRIPE);


const { v4: uuidv4 } = require("uuid");

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("Get request");
    res.json({ message: "Hello from the other side" });
})

router.post('/pay', (req, res, next) => {
    console.log(req.body.token);
    const { token, amount } = req.body;
    const key = uuidv4();

    return stripe.customers.create({
        email: token.email,
        source:token
    }).then(customer => {
        stripe.charges.create({
            amount: amount * 100,
            currency: 'usd',
            customer: customer.id,
            recipt_email:token.email
        }, {key})
    }).then(result => {
        res.status(200).json(result)
    }).catch(err => {
        console.log(err.message);
        res.status(400).json(err.message);
    })
})

module.exports = router;