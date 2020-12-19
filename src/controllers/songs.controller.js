// Database connection
import { connect } from "../database";
import { ObjectId } from "mongodb";

const getNumberOfWords = async (req, res) => {
  //console.log(req.body);
  const { lyric } = req.params;
  let words = lyric.split(" ");
  let lines = lyric.split("\n");
  console.log("lyric: ", lyric, "words: ", words);
  let numberOfWords;
  let numberOfLines;
  try {
    if (words) {
      numberOfWords = words.length;
    }
    if (lines) {
      numberOfLines = lines.length;
    }
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }

  res.send({ words: numberOfWords, lines: numberOfLines });
  //res.json(result);
};

module.exports = {
  getNumberOfWords,
};
