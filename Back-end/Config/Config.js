const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://slasheu1992:qpQzBri2YqMDh79k@mrabetdatabase.bl6qupt.mongodb.net/Database"
    );
    console.log("Database is connected");
  } catch (error) {
    if (error) throw error;
  }
};

module.exports = ConnectDB;
