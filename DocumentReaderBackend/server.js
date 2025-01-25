const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Set up Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Endpoint to upload a document
app.post('/upload', upload.single('document'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    console.log(req.file); // Log file info
    res.send({ message: 'File uploaded successfully!', fileName: req.file.originalname });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});