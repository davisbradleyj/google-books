const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BookSchema = new Schema({
    title : {
        type: String,
        require : true
    },
    authors: {
        type: String,
    },
    description: {
        type: Text
    },
    image: {
        type: String
    },
    link: {
        type: String
    },

})

const Book = mongoose.model("Book", BookSchema)
module.exports = Book;