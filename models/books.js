const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
  title: {type: String},
  author: {type: String},
  description: {type: String},
  image: {type:String},
  url: {type:String}
  
});

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;
