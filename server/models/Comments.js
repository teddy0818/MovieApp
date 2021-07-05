const mongoose = require('mongoose');
const Schema = require('mongoose');


const commentSchema = mongoose.Schema({
   writer : {
    type: Schema.Types.ObjectId,
    ref: 'User'
   },
   postId : {
    type: Schema.Types.ObjectId,
    ref: 'Movie'
   },
   responseTo : {
    type: Schema.Types.ObjectId,
    ref: 'User'
   },
   content : {
    Type: String
   }
});

const Comment = mongoose.model('Comment', favoriteSchema);

module.exports = { Comment }