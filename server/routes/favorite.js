const express = require('express');
const router = express.Router();
const { Favorite } = require("../models/Favorite");

//=================================
//             Favorite
//=================================

router.post("/favoriteNumber", (req, res) => {

    //mongoDB에서 숫자 정보 가져오기
    Favorite.find({ 'movieId' : req.body.movieId})
        .exec((err, info) => {
            if(err) return res.status(400).send(err)
            // Front에 다시 숫자 정보 전달하기
            res.status(200).json({ success: true, favortieNumber: info.length })
        })


});


module.exports = router;
