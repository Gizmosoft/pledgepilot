import { response } from "express";
import { MongoClient } from "mongodb";

export const statsHandler = async () => {
  const mongoURL =
    "mongodb+srv://vijayakumarhebbark:2AeWNGNkb3k0MNeK@info6150db.5uhtxqa.mongodb.net/";
  const dbName = "pledgepilotdb";
  let client;

  let statsObj = {
    'campaignCount': 0,
    'paymentCount': 0,
    'rewardCount': 0
  }

  try {
    client = new MongoClient(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    const db = client.db(dbName);
    // call for campaignStats
    const campaignCount = await getCampaignStats(db);
    // call for payment Stats
    const paymentCount = await getPaymentStats(db);
    // call for reward stats
    const rewardCount = await getRewardStats(db);

    // update the statsObj with the received values
    statsObj.campaignCount = campaignCount;
    statsObj.paymentCount = paymentCount;
    statsObj.rewardCount = Number(rewardCount.toFixed(2));;
    // return the statsObj to be consumed by UI
    return statsObj    
  } finally {
    if (client) {
      await client.close();
    }
  }
};

async function getCampaignStats(db) {
    const collectionName = "campaigns";
    const collection = db.collection(collectionName);
    const count = await collection.countDocuments();
    return count;
}

async function getPaymentStats(db) {
    const collectionName = "payments";
    const collection = db.collection(collectionName);
    // Find all documents in the collection
    const cursor = collection.find({});
    // initialize a paymentSum var to 0
    let paymentSum = 0;
    // Iterate through the cursor and extract the values of the specified field
    await cursor.forEach(document => {
        if(document.amount !== undefined) {
            paymentSum += document.amount;
        }
    })
    return paymentSum;
}

async function getRewardStats(db) {
    const collectionName = "rewards";
    const collection = db.collection(collectionName);
    // Find all documents in the collection
    const cursor = collection.find({});
    // initialize a paymentSum var to 0
    let rewardSum = 0;
    // Iterate through the cursor and extract the values of the specified field
    await cursor.forEach(document => {
        if(document.rewardAmt !== undefined) {
            rewardSum += document.rewardAmt;
        }
    })
    return rewardSum;
}
