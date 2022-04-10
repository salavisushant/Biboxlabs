const express = require('express');

const router = express.Router();

const Bag = require('../models/bag.model');

router.post("/", async (req, res) => {
    try {
        const bag = await Bag.create(req.body);
        return res.status(201).send(bag);
    } catch (e) {
        return res.status(500).send({ status: "Failed", message: e.message })
    }
});

router.get('/', async (req, res) => {
    try {
        const bag = await Bag.find().lean().exec();

        return res.status(201).send({bag});
    } catch (e) {
        return res.status(500).json({ status: 'Failed', message: e.message });
    }
});




router.delete("/:id", async (req, res) => {
  try {
    const bag = await Bag.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send(bag);
  } catch (e) {
    return res.status(500).send({ message: e.message, status: "Failed" });
  }
});


module.exports = router