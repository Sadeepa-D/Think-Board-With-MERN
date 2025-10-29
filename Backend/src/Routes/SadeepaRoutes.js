const express = require("express");
const {
  getallnotes,
  savenote,
  updatenote,
  deletenote,
} = require("../Controllers/SadeepaController.js");

const router = express.Router();

router.get("/", getallnotes);
router.post("/notes", savenote);
router.put("/:id", updatenote);
router.delete("/delete/:id", deletenote);

module.exports = router;
