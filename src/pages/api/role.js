import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  try {
    // Connection URI
    const uri =
      "mongodb+srv://borneelphukan:borneel1999@cluster0.wze4ltn.mongodb.net/?retryWrites=true&w=majority";

    // Connect to MongoDB
    const client = await MongoClient.connect(uri);
    const db = client.db("text-data");

    // Fetch data from the team-data collection
    const roleDataCollection = db.collection("role-data");
    const roleData = await roleDataCollection.find({}).toArray();

    // Close the connection
    client.close();

    // Send the data as JSON response
    res.status(200).json({ roleData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
