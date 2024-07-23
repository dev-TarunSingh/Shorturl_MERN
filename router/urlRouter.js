const express = require("express");
const { getUrlAndShort, getShortIdAndredirect } = require("../controller/urlController");

const router = express.Router();

router.post("/", getUrlAndShort);

module.exports = router;