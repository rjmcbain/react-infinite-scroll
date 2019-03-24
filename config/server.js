module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    "fc666c8260d25a36f47b11fca0618d93653b752f983ed2c535af5a11bc6005aa",
  SECRET:
    process.env.SECRET ||
    "9c55ab4d533aa3057902cfe0ccb322d98b2d32d83d5915424e488f54edbd0ffb",
  CALLBACK_URL: process.env.CALLBACK_URL || "http://localhost:3000"
};
