//Run this to enter data in JSON file before running react application

const fs = require("fs");
const path = require("path");

const audioFolder = "../public/audio";

const soundData = [];

const minBpm = 50;
const maxBpm = 200;

const keyValuesToMatch = [
  "C Maj",
  "C# Maj",
  "D Maj",
  "D# Maj",
  "E Maj",
  "F Maj",
  "F# Maj",
  "G Maj",
  "G# Maj",
  "A Maj",
  "A# Maj",
  "B Maj",
  "C Min",
  "C# Min",
  "D Min",
  "D# Min",
  "E Min",
  "F Min",
  "F# Min",
  "G Min",
  "G# Min",
  "A Min",
  "A# Min",
  "B Min",
];

fs.readdirSync(audioFolder).forEach((filename) => {
  const soundName = path.basename(filename, path.extname(filename));

  const formattedSoundName = soundName.toLowerCase().replace(/\s/g, "");
  // const matchedKey = keyValuesToMatch.find((key) =>
  //   formattedSoundName.includes(key.toLowerCase().replace(/\s/g, ''))
  // ) || '-';

  let matchedKey = "-";
  for (const key of keyValuesToMatch) {
    if (formattedSoundName.includes(key.toLowerCase().replace(/\s/g, ""))) {
      matchedKey = key;
      break;
    }
  }

  const bpmRegex = /(\d+)\s*/i; // Regular expression to match BPM value
  const matchBpm = soundName.match(bpmRegex);
  const bpmValue = matchBpm ? parseInt(matchBpm[1]) : null;
  const isBpmInRange = bpmValue && bpmValue >= minBpm && bpmValue <= maxBpm;

  const soundItem = {
    _id: soundName,
    sound: `/audio/${filename}`,
    Name: soundName,
    Key: matchedKey,
    Bpm: isBpmInRange ? bpmValue : "-",
  };

  const isDuplicate = soundData.some(
    (existingSound) => existingSound._id === soundItem._id
  );
  if (!isDuplicate) {
    soundData.push(soundItem);
  }
});

const soundDataJson = JSON.stringify(soundData, null, 2);

fs.writeFileSync("soundData.json", soundDataJson, "utf8");

console.log("soundData.json generated successfully.");
