const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SpellSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  school: {
    type: String,
    required: true
  },
  classes: [{
    type: String,
    required: true
  }],
  components: [{
    type: String,
    required: true
  }],
  materials: [{
    type: Schema.Types.ObjectId,
    required: false
  }],
  consumes: {
    type: Boolean,
    required: false
  }
});

const Spell = (module.exports = mongoose.model("Spell", SpellSchema));
