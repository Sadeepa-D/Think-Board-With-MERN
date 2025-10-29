const express = require("express");
const {
  getallnotes,
  savenote,
  updatenote,
} = require("../Controllers/SadeepaController.js");

const router = express.Router();

router.get("/", getallnotes);
router.post("/notes", savenote);
router.put("/:id",updatenote);

module.exports = router;
