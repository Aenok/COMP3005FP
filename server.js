const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const path = require('path');
const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'FitnessAppDB'
});

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

app.post('/signup', (req, res) => {

    // Get data from req
    const { first_name, last_name, email, password} = req.body;

    console.log('Received data: ', {first_name, last_name, email, password})

    // Response message
    res.json({message: "Signup Successfull!"});
})


// Define a route to fetch data from the database
// app.get('/users', async (req, res) => {
//     try {
//         const client = await pool.connect();
//         const result = await client.query('SELECT * FROM test2');
//         const results = { 'results': (result) ? result.rows : null };

//         // Set response headers
//         res.setHeader('Content-Type', 'application/json');
//         res.status(200).json(results);

//         client.release();
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});