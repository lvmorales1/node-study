const express = require('express');

const app = express();

app.get('/first-route', (req, res) => {
    return res.json({
        message: 'First route',
    });
});

app.listen(4002, () => console.log("Server running on port 4002"));