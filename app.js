const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/api/instagram', async (req, res) => {
    try {
        const IGACT = proccess.env.IGACT
        if (!accessToken) throw new Error("Access token error");
        const instagramApiUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${IGACT}`
        const response = await axios.get(instagramApiUrl);
        res.json(response.data);
    } catch (error) {
        console.error("Fetching error: ", error.message);
        res.status(500).json({ error: "Failed to fetch posts"});
    }
});

app.get('/', (req, res) => {
    res.send('Backend is operational!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 
