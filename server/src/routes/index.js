const express = require("express");
const flashcardRoutes = require("./flashCards");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.use("/flashcards", flashcardRoutes);

module.exports = router;
