const mongoose = require('mongoose');
const Schema = require('mongoose');


const starRateSchema = mongoose.Schema({
    userFrom: {
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    rate: {
        type: Number
    },
    movieId: {
        type: String
    },
    movieTitle: {
        type: String
    },
    moviePost: {
        type: String
    },
    movieRunTime: {
        type: String
    }}, {timestamps : true}

)
const StarRate = mongoose.model('StarRate', starRateSchema);

module.exports = { StarRate }