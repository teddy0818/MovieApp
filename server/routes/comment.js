const express = require('express');
const router = express.Router();
const { Comment } = require("../models/Comment");


//=================================
//             Comment
//=================================

router.post("/saveComment", (req, res) => {
    const comment = new Comment(req.body)
    comment.save((err, doc) => {
        if(err) return res.status(400).send(err)

        Comment.find({'_id' : comment._id})
            .populate('writer') 
            // _id 에 해당하는 writer(User)에 관환 정보를 object로 가져온다
            // join이랑 비슷한 개념 
            .exec((err, result) => {
                if(err) return res.status(400).send(err)
                res.status(200).json({success: true, result})
            })
        })
    });

router.post("/getComments", (req, res) => {
    Comment.find({ 'movieId' : req.body.movieId})
        .populate('writer') // 이걸 써줘야 writer에 user 오브젝트가 들어가서 client에서 사용가능
        .exec((err, comments) => {
            if(err) return res.status(400).send(err)
            res.status(200).json({ 
                success: true, 
                comments: comments // select 한 정보들이 배열형식으로 넣어짐
            })
    })
});

module.exports = router;
