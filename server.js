const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000; // You can change this to any port you like

// MongoDB connection URI
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware to parse JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Endpoint to handle form submission
app.post('/submit', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('details'); 
        const collection = database.collection('users');

        // Insert form data into MongoDB
        await collection.insertOne(req.body);

        res.send('Data saved successfully!');
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
