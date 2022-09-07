const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.LOCAL_DB_URL);

    const dbInfo = mongoose.connection;

    console.log(`Database started with host ${dbInfo.host} `);

    dbInfo.on("error", (error) => console.error(error));
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDatabase;
