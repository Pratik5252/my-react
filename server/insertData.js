//Run this to enter data in database using json file before running react application

const insertMongoose = require("mongoose");
const { Sound } = require("./server");
const dotenv = require("dotenv");

dotenv.config();

insertMongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferTimeoutMS: 60000,
});

const dbConnection = insertMongoose.connection;

dbConnection.on("error", (error) => {
  console.error("Database connection error:", error);
});

dbConnection.once("open", () => {
  console.log("Connected to the database");
});

const soundData = require("./soundData.json");

async function insertData() {
  try {
    for (const soundItem of soundData) {
      const existingSound = await Sound.findById(soundItem._id);
      if (!existingSound) {
        const soundDocument = new Sound(soundItem);
        console.log("Inserting sound:", soundDocument);
        await soundDocument.save();
        console.log(`Inserted sound: ${soundItem.Name}`);
      } else {
        console.log(`Skipping existing: ${soundItem.Name}`);
      }
    }
    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    insertMongoose.connection.close();
  }
}

insertData();
