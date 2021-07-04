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
            res.status(200).json({ success: true, favoriteNumber: info.length })
        })
});

router.post("/favorited", (req, res) => {
    //내가 이 영화를 Favorite 리스트에 넣었는지 DB에서 정보 가져오기
    Favorite.find({ 'movieId' : req.body.movieId, 'userFrom': req.body.userFrom})
        .exec((err, info) => {
            if(err) return res.status(400).send(err)

            let result = false
            if(info.length !== 0) result = true

            res.status(200).json({ success: true, favorited: result })
        })
});

router.post("/removeFromFavorite", (req, res) => {
    Favorite.findOneAndDelete({ movieId: req.body.movieId, userFrom: req.body.userFrom})
    .exec((err, doc) => {
        if(err) return res.status(400).send(err)
        return res.status(200).json({ success: true })
    })
});

router.post("/addToFavorite", (req, res) => {
    const favorite = new Favorite(req.body)
    favorite.save((err, doc) => {
        if(err) return res.status(400).send(err)
        return res.status(200).json({ success: true })
    })
});

router.post("/getFavoriteMovie", (req, res) => {
    Favorite.find({ 'userFrom' : req.body.userFrom})
        .exec((err, favorites) => {
            if(err) return res.status(400).send(err)
            res.status(200).json({
                success: true, 
                favorites: favorites // select 한 정보들이 배열형식으로 넣어짐
            })
    })
});

router.post("/onClickDelFavorite", (req, res) => {
    Favorite.findOneAndDelete({ movieId: req.body.movieId, userFrom: req.body.userFrom})
    .exec((err, doc) => {
        if(err) return res.status(400).send(err)
        return res.status(200).json({ success: true })
    })
});


module.exports = router;
