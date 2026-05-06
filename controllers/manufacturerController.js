const Drug = require('../models/Drug'); // Import your new database model

const registerDrug = async (req, res) => {
    try {
        const { name, batch, generic, mfgDate, expDate, form, strength, qty, barcode, storage, composition } = req.body;

        // 1. Check if this batch number already exists in the database
        const existingDrug = await Drug.findOne({ batch: batch });
        if (existingDrug) {
            return res.status(400).json({ success: false, message: "Batch number already exists!" });
        }

        // 2. Create the new drug using the data from the frontend
        const newDrug = new Drug({
            name, batch, generic, mfgDate, expDate, form, strength, qty, barcode, storage, composition
        });

        // 3. Save it permanently to MongoDB
        await newDrug.save();

        console.log(`[Manufacturer] Saved new batch to MongoDB: ${batch}`);

        // 4. Send success message back to frontend
        res.status(200).json({
            success: true,
            message: "Drug securely saved to database",
            batchId: batch
        });

    } catch (error) {
        console.error("Database Error:", error);
        res.status(500).json({ success: false, message: "Server error saving drug" });
    }
};

module.exports = { registerDrug };