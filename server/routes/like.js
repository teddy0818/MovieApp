const express = require('express');
const router = express.Router();
const { Like } = require("../models/Like");


//=================================
//             Like
//=================================

router.post("/getLikeNum", (req, res) => {

    let variable = {}

    if(req.body.movieId) {
        variable = {
            movieId : req.body.movieId
        }
    } else {
        variable = {
            commentId : req.body.commentId
        }
    }

    Like.find(variable)
        .exec((err, Likes) => {
            if(err) return res.status(400).send(err)
            res.status(200).json({ 
                success: true, 
                likesNum: Likes.length 
            })
    })

});

router.post("/getMeLike", (req, res) => {
    let variable = {}

    if(req.body.movieId) {
        variable = {
            movieId : req.body.movieId,
            userId : req.body.userId
        }
    } else {
        variable = {
            commentId : req.body.commentId,
            userId : req.body.userId
        }
    }

    Like.find(variable)
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
    let variable = {}

    if(req.body.movieId) {
        variable = {
            movieId : req.body.movieId,
            userId : req.body.userId
        }
    } else {
        variable = {
            commentId : req.body.commentId,
            userId : req.body.userId
        }
    }

    const like = new Like(variable)
    like.save((err, doc) => {
        if(err) return res.status(400).send(err)
        return res.status(200).json({ success: true })
    })
});

router.post("/removeLike", (req, res) => {
    let variable = {}

    if(req.body.movieId) {
        variable = {
            movieId : req.body.movieId,
            userId : req.body.userId
        }
    } else {
        variable = {
            commentId : req.body.commentId,
            userId : req.body.userId
        }
    }

    Like.findOneAndDelete(variable)
    .exec((err, doc) => {
        if(err) return res.status(400).send(err)
        return res.status(200).json({ success: true })
    })
});

module.exports = router;
