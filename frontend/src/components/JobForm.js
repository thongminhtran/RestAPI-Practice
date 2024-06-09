import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper } from '@mui/material';
import axios from 'axios';

const JobForm = ({ fetchJobs, selectedJob, setSelectedJob }) => {
    const [formData, setFormData] = useState({
        customerName: '',
        jobType: '',
        status: '',
        appointmentDate: '',
        technician: ''
    });

    useEffect(() => {
        if (selectedJob) {
            setFormData(selectedJob);
        }
    }, [selectedJob]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedJob) {
            await axios.put(`http://localhost:3001/jobs/${selectedJob.id}`, formData);
            setSelectedJob(null);
        } else {
            await axios.post('http://localhost:3001/jobs', formData);
        }
        fetchJobs();
        setFormData({
            customerName: '',
            jobType: '',
            status: '',
            appointmentDate: '',
            technician: ''
        });
    };

    return (
        <Paper style={{ padding: '16px', marginBottom: '16px' }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="customerName"
                    label="Customer Name"
                    value={formData.customerName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="jobType"
                    label="Job Type"
                    value={formData.jobType}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="status"
                    label="Status"
                    value={formData.status}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="appointmentDate"
                    label="Appointment Date"
                    type="datetime-local"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    name="technician"
                    label="Technician"
                    value={formData.technician}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    {selectedJob ? 'Update Job' : 'Add Job'}
                </Button>
            </form>
        </Paper>
    );
};

export default JobForm;
