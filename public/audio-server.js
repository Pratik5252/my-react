const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001; // Use a different port than your React app

// Serve audio files from the 'audio' directory
app.use(express.static(path.join(__dirname, 'audio')));

// Start the server
app.listen(PORT, () => {
  console.log(`Audio server is running on port ${PORT}`);
});
