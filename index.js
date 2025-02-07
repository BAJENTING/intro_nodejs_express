const express = require('express');
const app = express();
const port = 3000;

//post
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static('public'));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
// Define a route for the home page
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
// Define a new route
app.get('/about', (req, res) => {
    res.send('About Us');
});

app.post('/submit', (req, res) => {
    const data = req.body;
    req.send(`Received: ${JSON.stringify(data)}`);
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
