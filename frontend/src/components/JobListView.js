import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import JobForm from './JobForm';
import { API_URL } from '../config';
const JobListView = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        const response = await axios.get(`${API_URL}/jobs`);
        setJobs(response.data);
        console.log(response.data);
    };

    const handleDelete = async (id) => {
        await axios.delete(`${API_URL}/jobs/${id}`);
        await fetchJobs();
    };

    const handleEdit = (job) => {
        setSelectedJob(job);
    };

    return (
        <div>
            <JobForm fetchJobs={fetchJobs} selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Customer Name</TableCell>
                            <TableCell>Job Type</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Appointment Date</TableCell>
                            <TableCell>Technician</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {jobs.map((job) => (
                            <TableRow key={job.id}>
                                <TableCell>{job.id}</TableCell>
                                <TableCell>{job.customerName}</TableCell>
                                <TableCell>{job.jobType}</TableCell>
                                <TableCell>{job.status}</TableCell>
                                <TableCell>{new Date(job.appointmentDate).toLocaleString()}</TableCell>
                                <TableCell>{job.technician}</TableCell>
                                <TableCell>
                                    <Button onClick={() => handleEdit(job)}>Edit</Button>
                                    <Button onClick={() => handleDelete(job.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default JobListView;
