import express from "express";
import mongoose from "mongoose";
import path from "path";
import morgan from "morgan";
const PORT = process.env.PORT || 3001;
const app = express();

require('dotenv').config();

app.use(morgan("common"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/client/build"));
}
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Established connection with MongoDB database.')
})


app.listen(PORT, function() {
    console.log(`http://localhost:${PORT} Server Running on port ${PORT}!`);
});
