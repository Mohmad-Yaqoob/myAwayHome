const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/myAwayHome";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  const transformedData = initData.data.map((obj) => ({
    ...obj,
    owner: "670140f97288d909da07b399", // Owner ID you want to assign
  }));
    
  await Listing.insertMany(transformedData); // Insert transformed data
  console.log("Data was initialized");
};

initDB();