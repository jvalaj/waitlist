const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const CSV_FILE_PATH = path.join(__dirname, 'submissions.csv');

// Middleware to parse JSON body requests
app.use(express.json());

// Serve static assets from the current directory (index.html, style.css, app.js, public/)
app.use(express.static(__dirname));

// Serve files under public directory explicitly just in case
app.use('/public', express.static(path.join(__dirname, 'public')));

// Fallback to index.html for main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint to handle waitlist submissions
app.post('/api/waitlist', (req, res) => {
    const { email } = req.body;
    
    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ error: 'Please provide a valid email address.' });
    }
    
    try {
        let lineCount = 0;
        const exists = fs.existsSync(CSV_FILE_PATH);
        
        if (exists) {
            // Read file and count lines to determine next queue number
            const content = fs.readFileSync(CSV_FILE_PATH, 'utf-8');
            const lines = content.trim().split('\n');
            lineCount = lines.length - 1; // Subtract 1 for header line
        } else {
            // Initialize CSV file with headers
            fs.writeFileSync(CSV_FILE_PATH, 'Email,Timestamp,QueueNumber\n', 'utf-8');
        }
        
        // Calculate queue position starting at #1,432
        const baseQueueNum = 1432;
        const queueNumber = baseQueueNum + lineCount;
        
        // Sanitize email content to prevent CSV injection
        const sanitizedEmail = email.replace(/["\n\r]/g, '');
        const timestamp = new Date().toISOString();
        
        // Append row
        fs.appendFileSync(CSV_FILE_PATH, `"${sanitizedEmail}",${timestamp},#${queueNumber}\n`, 'utf-8');
        
        console.log(`[Waitlist] New signup: ${sanitizedEmail} (Queue Spot #${queueNumber})`);
        
        res.status(200).json({ 
            success: true, 
            message: 'Successfully added to waitlist.',
            queueNumber: `#${queueNumber.toLocaleString()}`
        });
        
    } catch (error) {
        console.error('Error writing to submissions CSV:', error);
        res.status(500).json({ error: 'Internal server error occurred.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log('\n=============================================');
    console.log(`🚀 Ticker Waitlist Server is running!`);
    console.log(`👉 Access website at: http://localhost:${PORT}`);
    console.log(`📁 CSV database path: ${CSV_FILE_PATH}`);
    console.log('=============================================\n');
});
