const verifyDrug = (req, res) => {
    const { qrId, otp } = req.body;

    console.log(`[Pharmacy] Verification requested for QR: ${qrId} | OTP: ${otp}`);

    // Basic validation check (Approves any 6 digit code for testing)
    if (otp && otp.length === 6) { 
        res.status(200).json({ 
            status: "AUTHENTIC", 
            message: "QR code validated and destroyed on blockchain. Safe to dispense.",
            // Mock data to send back to the frontend UI
            drugData: {
                name: "Verified Medicine", 
                batch: "BT-LIVE",
                strength: "Standard Dose",
                mfgDate: new Date().toISOString().split('T')[0],
                expDate: "2027-12-31"
            }
        });
    } else {
        res.status(400).json({ 
            status: "FAKE", 
            errorType: "INVALID OTP",
            message: "The OTP you entered is incorrect or the QR is invalid." 
        });
    }
};

module.exports = { verifyDrug };