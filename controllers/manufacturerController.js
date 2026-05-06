const registerDrug = (req, res) => {
    // Extract data sent from the frontend
    const { name, batch, generic, mfgDate, expDate, form, strength, qty, barcode, storage, composition } = req.body;

    console.log(`[Manufacturer] Registering new batch: ${batch} for ${name}`);

    // Send a success response back to the frontend
    res.status(200).json({
        success: true,
        message: "Drug registered successfully",
        batchId: batch
    });
};

module.exports = { registerDrug };