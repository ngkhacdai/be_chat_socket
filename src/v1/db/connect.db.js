const mongoose = require('mongoose');

const uri = 'mongodb+srv://ngkhacdai:a012675921@assignmentmob402.mbfbglm.mongodb.net/chat_app'

mongoose.connect(uri)
    .then(() => {
        console.log('connect mongoose successfully');
    })
    .catch(err => console.log(err))

module.exports = mongoose