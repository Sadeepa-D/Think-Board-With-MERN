const { model } = require("mongoose");
const sadeepamodel = require("../Moduels/SadeepaModuel.js");

// get all notes from database

const getallnotes = async (req, res) => {
  try {
    const notes = await sadeepamodel.find();
    res.status(200).json(notes);
  } catch (error) {
    console.log("Erro get sadeepamodel details", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// save note to database

const savenote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newnote = new sadeepamodel({ title, content });
    await newnote.save();
    res.status(201).json({ message: "note created sucessfuly" });
  } catch (error) {
    console.error("Note creation failed", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// update note

const updatenote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newnote = await sadeepamodel.findByIdAndUpdate(req.params.id, {
      title,
      content,
    });
    res.status(200).json({ message: "Note Updated sucessfully" });
  } catch (error) {
    console.error("Note update failled", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { getallnotes, savenote, updatenote };
