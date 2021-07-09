const express = require('express');
const router = express.Router();
const { Like } = require("../models/Like");


//=================================
//             Like
//=================================

router.post("/getLikeNum", (req, res) => {
    Like.find({ 'movieId' : req.body.movieId})
        .exec((err, Likes) => {
            if(err) return res.status(400).send(err)
            res.status(200).json({ 
                success: true, 
                likesNum: Likes.length 
            })
    })
});

router.post("/getMeLike", (req, res) => {
    Like.find({ 'movieId' : req.body.movieId, 'userId': req.body.userId})
        .populate('userId') 
        .exec((err, Likes) => {
            if(err) return res.status(400).send(err)
            res.status(200).json({ 
                success: true, 
                likesNum: Likes.length 
            })
    })
});

router.post("/saveLike", (req, res) => {
    const like = new Like(req.body)
    like.save((err, doc) => {
        if(err) return res.status(400).send(err)
        return res.status(200).json({ success: true })
    })
});

module.exports = router;
