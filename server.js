// filepath: c:\Users\Nicholas\Desktop\rental-costs-backend\server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

// Sample data
const costs = [
    { month: 'January', category: 'Mortgage', amount: '$2362' },
    { month: 'January', category: 'Utilities- Natural Gas', amount: '$376' },
    { month: 'January', category: 'Utilities- Water/Sewer', amount: '$0' },    
    { month: 'February', category: 'Mortgage', amount: '$2362' },
    { month: 'February', category: 'Utilities- Natural Gas', amount: '$267' },
    { month: 'February', category: 'Utilities- Water/Sewer', amount: '$0' }, 
    { month: 'March', category: 'Mortgage', amount: '$2362' },
    { month: 'March', category: 'Utilities- Natural Gas', amount: '$260' },
    { month: 'March', category: 'Utilities- Water/Sewer', amount: '$287' },
];

// API endpoint to get costs
app.get('/api/costs', (req, res) => {
    res.json(costs);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
