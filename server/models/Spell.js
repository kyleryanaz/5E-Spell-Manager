const mongoose = require("mongoose");

const SpellSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  school: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  }
});

const Spell = (module.exports = mongoose.model("Spell", SpellSchema));
