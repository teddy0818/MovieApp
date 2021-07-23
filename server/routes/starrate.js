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

router.post("/ModifyToStarRate", (req, res) => {
    StarRate.update({
        'movieId' : req.body.movieId,
        'userFrom': req.body.userFrom
    },{
        $set:{
            'rate': req.body.rate
        }
    }).exec((err, doc) => {
        if(err) return res.status(400).send(err)
        return res.status(200).json({ success: true })
    })
});

router.post("/DelToStarRate", (req, res) => {
    StarRate.findOneAndDelete({ movieId: req.body.movieId, userFrom: req.body.userFrom})
    .exec((err, doc) => {
        if(err) return res.status(400).send(err)
        return res.status(200).json({ success: true })
    })
});

router.post("/getStarRate", (req, res) => {
    StarRate.find({ 'movieId' : req.body.movieId, 'userFrom': req.body.userFrom})
        .exec((err, info) => {
            if(err) return res.status(400).send(err)

            let rate = 0
            if(info.length !== 0) rate = info[0].rate

            res.status(200).json({ success: true, rate })
        })
});



module.exports = router;
