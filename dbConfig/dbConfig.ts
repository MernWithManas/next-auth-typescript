import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
  path: "../.env"
})


export default async function ConnectDb() {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI!);
    console.log(connectionInstance.connection.host);

  } catch (error) {
    console.log("Error while connecting to mongoDB Atlas server !", error);
    process.exit(1);
  }
}


