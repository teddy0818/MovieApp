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

router.post("/getStarRate", (req, res) => {
    StarRate.find({ 'movieId' : req.body.movieId, 'userFrom': req.body.userFrom})
        .exec((err, info) => {
            if(err) return res.status(400).send(err)

            let result = false
            if(info.length !== 0) result = true

            res.status(200).json({ success: true, rate: info[0].rate })
        })
});



module.exports = router;
