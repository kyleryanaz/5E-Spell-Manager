const express = require("express");
const router = express.Router();

const Spell = require("../models/Spell");
const Material = require("../models/Material");

// READ
router.get("/spells", (req, res, next) => {
  Spell.find(function(err, spells) {
    res.json(spells);
  });
});

router.get("/spell/:id", (req, res, next) => {
  Spell.find({ _id: req.params.id }, function(err, spell) {
    res.json(spell[0]);
  });
});

// CREATE
router.post("/spell", (req, res, next) => {
  let newSpell = new Spell({
    name: req.body.name,
    school: req.body.school,
    level: req.body.level,
    classes: req.body.classes,
    components: req.body.components,
    materials: req.body.materials,
    consumes: req.body.consumes
  });

  newSpell.save((err, spell) => {
    if (err) {
      console.log(err);
      res.json({ msg: "Failed to add spell" });
    } else {
      res.json({ msg: "Spell added successfully" });
    }
  });
});

router.post("/material", (req, res, next) => {
  let newMaterial = new Material({
    name: req.body.name,
    value: req.body.value
  });

  newMaterial.save((err, material) => {
    if (err) {
      console.log(err);
      res.json({ msg: "Failed to add material" });
    } else {
      res.json({ msg: "Material added successfully" });
    }
  });
});

// DELETE
router.delete("/spell/:id", (req, res, next) => {
  Spell.deleteOne({ _id: req.params.id }, function(err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
