const mogoose = require('mongoose')

const { DB_CON_STRING } = process.env

module.exports = () => {
    mogoose.connect("mongodb+srv://equipdoor:Doorbell2023@cluster0.h6ndqo7.mongodb.net/?retryWrites=true&w=majority")
        .then(() => console.log('DB Connection Successfull'))
        .catch(err => console.log(err.message))
}