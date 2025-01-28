import express from 'express';
import initialize from './app/app.js';
import dotenv from 'dotenv';

dotenv.config();

// Define an express app
const app = express();

// Dynamically set the port based on the environment
const port =
  process.env.STATUS === 'Production'
    ? process.env.PROD_PORT || 8000 // Default to 8000 if PROD_PORT is not set
    : process.env.DEV_PORT || 3001; // Default to 3001 if DEV_PORT is not set

// Call the initialize function to initialize the app
initialize(app);

// Set the root API endpoint
app.get('/', (req, res) =>
  res.send('Hello world! Landing page of the app would be coming up here soon...')
);

// Start the server on the defined port
app.listen(port, () =>
  console.log(`${process.env.STATUS} Server Up and Running! Listening on port: ${port}`)
);
