const express = require('express');
const router = express.Router();
const { Dislike } = require("../models/Dislike");


//=================================
//             dislike
//=================================

router.post("/getDisLikeNum", (req, res) => {
    Dislike.find({ 'movieId' : req.body.movieId})
        .exec((err, Dislikes) => {
            if(err) return res.status(400).send(err)
            res.status(200).json({ 
                success: true, 
                dislikesNum: Dislikes.length 
            })
    })
});

router.post("/getMeDislike", (req, res) => {
    Dislike.find({ 'movieId' : req.body.movieId, 'userId': req.body.userId})
        .populate('userId') 
        .exec((err, Dislikes) => {
            if(err) return res.status(400).send(err)
            res.status(200).json({ 
                success: true, 
                dislikesNum: Dislikes.length 
            })
    })
});

router.post("/saveDislike", (req, res) => {
    const dislike = new Dislike(req.body)
    dislike.save((err, doc) => {
        if(err) return res.status(400).send(err)
        return res.status(200).json({ success: true })
    })
});

router.post("/removeDislike", (req, res) => {
    Dislike.findOneAndDelete({ 'movieId': req.body.movieId, 'userId': req.body.userId})
    .exec((err, doc) => {
        if(err) return res.status(400).send(err)
        return res.status(200).json({ success: true })
    })
});

module.exports = router;
