import { response } from 'express'
import { MongoClient } from 'mongodb'

export const getCampaignStats = async () => {
  const mongoURL = "mongodb+srv://vijayakumarhebbark:2AeWNGNkb3k0MNeK@info6150db.5uhtxqa.mongodb.net/";
  const dbName = "pledgepilotdb";
  const collectionName = "campaigns";

  let client;

  try {
    client = new MongoClient(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const count = await collection.countDocuments();
    return count;
  } finally {
    if (client) {
      await client.close();
    }
  }
};
