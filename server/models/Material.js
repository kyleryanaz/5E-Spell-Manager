const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MaterialSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: false
  }
});

const Material = (module.exports = mongoose.model("Material", MaterialSchema));
