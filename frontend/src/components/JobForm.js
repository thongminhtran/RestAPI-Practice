import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper } from '@mui/material';
import axios from 'axios';
import {API_URL} from "../config";

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

    const handleSubmit = async () => {
        if (selectedJob) {
            await axios.put(`${API_URL}/jobs/${selectedJob.id}`, formData);
            setSelectedJob(null);
        } else {
            await axios.post(`${API_URL}/jobs/`, formData);
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
                    required
                />
                <TextField
                    name="jobType"
                    label="Job Type"
                    value={formData.jobType}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    name="status"
                    label="Status"
                    value={formData.status}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
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
                    required
                />
                <TextField
                    name="technician"
                    label="Technician"
                    value={formData.technician}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary">
                    {selectedJob ? 'Update Job' : 'Add Job'}
                </Button>
            </form>
        </Paper>
    );
};

export default JobForm;
