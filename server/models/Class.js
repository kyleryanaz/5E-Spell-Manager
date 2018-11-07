const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ClassSchema = new Schema({
  shortId: {
    type: String,
    requied: true
  },
  name: {
    type: String,
    required: true
  }
});

const Class = (module.exports = mongoose.model("Class", ClassSchema));
