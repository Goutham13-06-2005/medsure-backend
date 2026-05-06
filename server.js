require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Import Routes
const manufacturerRoutes = require('./routes/manufacturerRoutes');
const pharmacyRoutes = require('./routes/pharmacyRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allows cross-origin requests from your frontend
app.use(express.json()); // Parses incoming JSON data

// Use Routes
app.use('/api/manufacturer', manufacturerRoutes);
app.use('/api/pharmacy', pharmacyRoutes);

// Base route to check if server is running
app.get('/', (req, res) => {
    res.send('MEDSURE-SMARTSHIELD API is active.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`MEDSURE Backend running on http://localhost:${PORT}`);
});