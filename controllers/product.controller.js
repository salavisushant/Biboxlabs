const express = require('express');

const router = express.Router();

const Cartoon = require('../models/product.models');

router.get('/', async (req, res) => {
    try {
        const cartoon = await Cartoon.find().lean().exec();

        return res.status(201).send({cartoon});
    } catch (e) {
        return res.status(500).json({ status: 'Failed', message: e.message });
    }
});



router.get('/:id', async (req, res) => {
    try {
        const bookById = await Books.findById(req.params.id).lean().exec();
        return res.status(200).send(bookById)
    } catch (e) {
        return res.status(500).json({ status: 'Failed', message: e.message });
    }
})


module.exports = router