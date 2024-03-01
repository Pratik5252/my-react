const fs = require('fs');
const path = require('path');

const audioFolderPath = path.join(__dirname, '../public/audio'); // Adjust the path based on your project structure

function getAudioFiles() {
  const audioFiles = [];

  try {
    const files = fs.readdirSync(audioFolderPath);
    for (const file of files) {
      if (file.endsWith('.wav') || file.endsWith('.mp3')) {
        audioFiles.push(file);
      }
    }
    console.log('Inserted audio files:', audioFiles);
  } catch (error) {
    console.error('Error reading audio files:', error);
  }

  return audioFiles;
}

module.exports = getAudioFiles;
