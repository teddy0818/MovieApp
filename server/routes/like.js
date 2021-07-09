const express = require('express');
const router = express.Router();
const { Like } = require("../models/Like");


//=================================
//             Like
//=================================

router.post("/getLikeNum", (req, res) => {
    Like.find({ 'movieId' : req.body.movieId})
        .populate('writer') 
        .exec((err, Likes) => {
            if(err) return res.status(400).send(err)
            res.status(200).json({ 
                success: true, 
                likesNum: Likes.length 
            })
    })
});

module.exports = router;
