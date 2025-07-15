const express = require('express');
const cors = require('cors');
const pokemonRoutes = require('./routes/pokemon');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve la nuova app HTML/JS dal base path
app.use(express.static(__dirname + '/../public'));

app.use('/api', pokemonRoutes); // Use the pokemon routes


// Fallback: serve index.html per qualsiasi rotta non API
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/../public/index.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});