const mongoose = require('mongoose');
const Schema = require('mongoose');

const likeSchema = mongoose.Schema({
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

const Like = mongoose.model('Like', likeSchema);

module.exports = { Like }