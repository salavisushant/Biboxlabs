const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors())

const cartoonController = require("./controllers/product.controller");

const bagController = require("./controllers/bag.controller");

app.use("/cartoon", cartoonController);

app.use("/bag", bagController);

module.exports = app;