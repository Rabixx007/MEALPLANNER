// holds connection to mongo server
// const mongoose = require("mongoose");
import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const mongoURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/MealPlanner";

mongoose
  .connect(mongoURI, {
    //@ts-ignore
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.error("Mongoose connection error:", err);
  });

export default mongoose;
