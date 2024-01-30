const mongoose = require('mongoose');

const uri = 'mongodb://0.0.0.0:27017/chat_socket'

mongoose.connect(uri)
    .then(() => {
        console.log('connect mongoose successfully');
    })
    .catch(err => console.log(err))

module.exports = mongoose