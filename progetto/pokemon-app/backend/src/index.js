const express = require('express');
const cors = require('cors');
const pokemonRoutes = require('./routes/pokemon');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('frontend/dist/frontend')); // Serve the Angular app

app.use('/api', pokemonRoutes); // Use the pokemon routes

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/frontend/dist/frontend/index.html'); // Serve the Angular index.html for any other route
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});