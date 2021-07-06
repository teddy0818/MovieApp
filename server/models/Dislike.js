const mongoose = require('mongoose');
const Schema = require('mongoose');

const dislikeSchema = mongoose.Schema({
   userId : {
    type: Schema.Types.ObjectId,
    ref: 'User'
   },
   movieId : {
    type: String
   },
   commentId : {
    type: Schema.Types.ObjectId,
    ref: 'Comment'
   },
}, {timestamps : true});

const Dislike = mongoose.model('Dislike', dislikeSchema);

module.exports = { Dislike }