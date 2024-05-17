const mongoose = require("mongoose");

const connectionString = "mongodb+srv://LIU:A1234567@cluster0.okwfnx4.mongodb.net/project_web?retryWrites=true&w=majority";

mongoose.connect(connectionString);

const db = mongoose.connection;

module.exports = db;
