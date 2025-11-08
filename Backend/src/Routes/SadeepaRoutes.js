const express = require("express");
const {
  getallnotes,
  savenote,
  updatenote,
  deletenote,
  findnote,
} = require("../Controllers/SadeepaController.js");

const router = express.Router();

router.get("/viewnotes", getallnotes);
router.post("/addnotes", savenote);
router.put("/updatenotes/:id", updatenote);
router.delete("/deletenotes/:id", deletenote);
router.get("/viewnotes/:id", findnote);

module.exports = router;
