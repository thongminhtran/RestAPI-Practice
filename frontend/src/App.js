import React from 'react';
import { Container } from '@mui/material';
import JobListView from './components/JobListView';

const App = () => {
  return (
      <Container>
        <h1>Job Management Dashboard</h1>
        <JobListView />
      </Container>
  );
};

export default App;
