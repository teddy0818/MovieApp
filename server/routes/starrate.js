const express = require('express');
const router = express.Router();
const { StarRate } = require("../models/StarRate");


//=================================
//             StarRate
//=================================
router.post("/addToStarRate", (req, res) => {
    const starrate = new StarRate(req.body)
    starrate.save((err, doc) => {
        if(err) return res.status(400).send(err)
        return res.status(200).json({ success: true })
    })
});


module.exports = router;
