import React from 'react';
import RequestForm from './components/RequestForm';
import DashboardCard from './components/DashboardCard';
import './App.css';

function App() {
  const handleSubmit = (request) => {
    // For now, just log the request. In a real app, this would send to a backend.
    console.log('Submitted request:', request);
    alert('Request submitted successfully!');
  };

  return (
    <div className="App">
      <h1 className="portal-title">Taylorsville Public Works Portal</h1>
      <DashboardCard>
        <RequestForm onSubmit={handleSubmit} />
      </DashboardCard>
    </div>
  );
}

export default App;
