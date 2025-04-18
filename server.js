// filepath: c:\Users\Nicholas\Desktop\rental-costs-backend\server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

// Sample data
const costs = [
    { month: 'January', category: 'Utilities', amount: '$200' },
    { month: 'January', category: 'Maintenance', amount: '$150' },
    { month: 'February', category: 'Utilities', amount: '$180' },
    { month: 'February', category: 'Maintenance', amount: '$120' },
];

// API endpoint to get costs
app.get('/api/costs', (req, res) => {
    res.json(costs);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});