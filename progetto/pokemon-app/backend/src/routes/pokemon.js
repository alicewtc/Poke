const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/title', (req, res) => {
    res.json({ title: "Ricerca pokemn" });
});

router.get('/pokemon', async (req, res) => {
    const offset = parseInt(req.query.offset) || 0;
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=3&offset=${offset}`);
        const results = await Promise.all(
            response.data.results.map(async (poke) => {
                const pokeData = await axios.get(poke.url);
                return {
                    name: pokeData.data.name,
                    image: pokeData.data.sprites.front_default,
                    types: pokeData.data.types.map(t => t.type.name)
                };
            })
        );
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Pokémon data' });
    }
});

module.exports = router;