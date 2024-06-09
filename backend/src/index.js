const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001;
app.use(cors());
app.use(bodyParser.json());

const dataFilePath = path.join(__dirname, 'jobs.json');

// Function to read data from the JSON file
function readDataFromFile() {
    if (fs.existsSync(dataFilePath)) {
        const rawData = fs.readFileSync(dataFilePath);
        return JSON.parse(rawData);
    }
    return [];
}

// Function to write data to the JSON file
function writeDataToFile(data) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

// Load initial data from the JSON file
let jobs = readDataFromFile();
let nextId = jobs.length > 0 ? Math.max(...jobs.map(job => job.id)) + 1 : 1;

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Job Management API');
});

// GET /jobs - Retrieves all jobs
app.get('/jobs', (req, res) => {
    res.json(jobs);
});

// GET /jobs/:id - Retrieves a specific job by ID
app.get('/jobs/:id', (req, res) => {
    const job = jobs.find(j => j.id == req.params.id);
    if (job) {
        res.json(job);
    } else {
        res.status(404).send('Job not found');
    }
});

// POST /jobs - Adds a new job record
app.post('/jobs', (req, res) => {
    const newJob = { id: nextId++, ...req.body };
    jobs.push(newJob);
    writeDataToFile(jobs);
    res.status(201).json(newJob);
});

// PUT /jobs/:id - Updates an existing job record
app.put('/jobs/:id', (req, res) => {
    const jobIndex = jobs.findIndex(j => j.id == req.params.id);
    if (jobIndex !== -1) {
        jobs[jobIndex] = { ...jobs[jobIndex], ...req.body };
        writeDataToFile(jobs);
        res.json(jobs[jobIndex]);
    } else {
        res.status(404).send('Job not found');
    }
});

// DELETE /jobs/:id - Deletes a job record
app.delete('/jobs/:id', (req, res) => {
    const jobIndex = jobs.findIndex(j => j.id == req.params.id);
    if (jobIndex !== -1) {
        jobs.splice(jobIndex, 1);
        writeDataToFile(jobs);
        res.status(204).send();
    } else {
        res.status(404).send('Job not found');
    }
});

app.listen(port, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
    } else {
        console.log(`Server is running on http://localhost:${port}`);
    }
});
