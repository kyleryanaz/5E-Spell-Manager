const express = require("express");
const router = express.Router();
const shortid = require('shortid');

const Spell = require("../models/Spell");
const Material = require("../models/Material");
const Class = require("../models/Class");

// READ
router.get("/classes", (req, res, next) => {
  Class.find(function(err, classes) {
    res.json(classes);
  });
});

router.get("/class/:id", (req, res, next) => {
  Class.find({ _id: req.params.id }, function(err, returnedClass) {
    res.json(returnedClass[0]);
  });
});

router.get("/spells", (req, res, next) => {
  Spell.find({})
    .populate({
      path: 'classes',
      model: 'Class'
  })
    .populate({
      path: 'materials',
      model: 'Material'
    }).exec(function (error, doc) {
      if (doc) {
        res.json(doc);
      } else if (error) {
        console.log(error);
      } else {
        console.log(null);
      }
    });
});

// Original spell by id route
// router.get("/spell/:id", (req, res, next) => {
//   Spell.find({ _id: req.params.id }, function(err, spell) {
//     res.json(spell[0]);
//   });
// });

router.get("/spell/:id", (req, res, next) => {
  Spell.findOne({ shortId: req.params.id })
    .populate({
      path: 'classes',
      model: 'Class'
  })
    .populate({
      path: 'materials',
      model: 'Material'
    }).exec(function (error, doc) {
      if (doc) {
        res.json(doc);
      } else if (error) {
        console.log(error);
      } else {
        console.log(null);
      }
    });
})

router.get("/materials", (req, res, next) => {
  Material.find(function(err, materials) {
    res.json(materials);
  });
});

router.get("/material/:id", (req, res, next) => {
  Material.find({ shortId: req.params.id }, function(err, material) {
    res.json(material[0]);
  });
});

// CREATE
router.post("/spell", (req, res, next) => {
  let newSpell = new Spell({
    shortId: shortid.generate(),
    name: req.body.name,
    level: req.body.level,
    school: req.body.school,
    castingTime: req.body.castingTime,
    range: req.body.range,
    components: req.body.components,
    duration: req.body.duration,
    effect: req.body.effect,
    classes: req.body.classes,
    materials: req.body.materials,
    consumes: req.body.consumes,
    concentration: req.body.concentration
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
    shortId: shortid.generate(),
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

// router.post("/class", (req, res, next) => {
//   let newClass = new Class({
//     shortId: shortid.generate(),
//     name: req.body.name
//   });
//   newClass.save((err, returnedClass) => {
//     if (err) {
//       console.log(err);
//       res.json({ msg: "Failed to add class" });
//     } else {
//       res.json({ msg: "Class added successfully" });
//     }
//   });
// });

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
