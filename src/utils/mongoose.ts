import { connect, connection } from "mongoose";

async function dbConnect() {
  const db = await connect(process.env.MONGODB_URL as string);

  connection.on("connected", () => {
    console.log("Mongo DB is connected");
  });
  connection.on("error", (error: Error) => {
    console.error("The connection to MongoDB has an error: ", error);
  });
}
