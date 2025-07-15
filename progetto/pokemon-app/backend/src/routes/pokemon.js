const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/title', (req, res) => {
    res.json({ title: "Ricerca pokemn" });
});

router.get('/pokemon', async (req, res) => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=3');
        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Pokémon data' });
    }
});

module.exports = router;