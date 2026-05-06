require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // <-- Mongoose imported

const manufacturerRoutes = require('./routes/manufacturerRoutes');
const pharmacyRoutes = require('./routes/pharmacyRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// --- DATABASE CONNECTION ---
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB Database'))
    .catch((err) => console.error('❌ MongoDB Connection Error:', err));
// ---------------------------

app.use('/api/manufacturer', manufacturerRoutes);
app.use('/api/pharmacy', pharmacyRoutes);

app.get('/', (req, res) => {
    res.send('MEDSURE-SMARTSHIELD API is active.');
});

app.listen(PORT, () => {
    console.log(`MEDSURE Backend running on http://localhost:${PORT}`);
});