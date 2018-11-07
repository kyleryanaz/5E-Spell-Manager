const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SpellSchema = new Schema({

  shortId: {
    type: String,
    required: true
  },
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
  castingTime: {
    type: String,
    required: true
  },
  effect: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  range: {
    type: String,
    required: true
  },
  classes: [{
    type: Schema.Types.ObjectId,
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
  },
  concentration: {
    type: Boolean,
    required: true
  }
});

const Spell = (module.exports = mongoose.model("Spell", SpellSchema));
