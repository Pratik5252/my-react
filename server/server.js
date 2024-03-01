const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const getAudioFiles = require("./getAudioFiles");

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbConnection = mongoose.connection;

dbConnection.on("error", (error) => {
  console.error("Database connection error:", error);
});

dbConnection.once("open", () => {
  console.log("Connected to the database");
});

const soundSchema = new mongoose.Schema({
  _id: String,
  Name: String,
  sound: mongoose.Schema.Types.Mixed, // Store the path to the sound file
  Key: mongoose.Schema.Types.Mixed,
  Bpm: mongoose.Schema.Types.Mixed,
});
const Sound = mongoose.model("Sound", soundSchema);

app.get("/api/sounds", async (req, res) => {
  try {
    const sounds = await Sound.find();
    res.json(sounds);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.use(express.static(path.join(__dirname, "../public")));

// app.get('/audio-list', (req, res) => {
//   const audioFiles = getAudioFiles();
//   res.json(audioFiles);
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { Sound };
