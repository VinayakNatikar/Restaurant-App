import mongoose from "mongoose";

export const dbconnection = () => {
    mongoose
      .connect(process.env.MONGO_URI, {
        dbName: "RESTUARANT",
      })
      .then(() => {
        console.log("connected to database successfully!");
      })
      .catch((err) => {
        console.log(`some error occured while connecting database${err}`);
      });
};