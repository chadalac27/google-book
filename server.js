const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/client/build"));
}

app.use(routes);

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
