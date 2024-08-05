const express = require("express");
const app = express();

// Middleware for JSON requests
app.use(express.json());

// Route for testing
app.get('/', (req, res) => {
    res.send("It is working");
});

// Route to fetch package details
app.get("/package/fetch/:id", (req, res) => {
    const packageId = req.params.id;
    const responseObject = {
        "package": {
            "package_id": packageId,
            "tag_id": 54215761,
            "type": "furniture",
            "package_condition": "new",
            "destination": "colombo",
            "price": 13200,
            "tracking_device_id": 1
        },
        "sender": {
            "email": "jhon.co@m.am",
            "first_name": "jhon",
            "last_name": "cina",
            "mobile_number": 771885421
        },
        "receiver": {
            "email": "brayan@g.com",
            "first_name": "brayan",
            "last_name": "adams",
            "mobile_number": 771234567
        }
    };

    res.json(responseObject);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Set the port from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
