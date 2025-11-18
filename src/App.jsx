// src/App.js
import React, { useState } from 'react';
import TicketForm from './components/TicketForm';
import TicketDisplay from './components/TicketDisplay';
import BusApp from './components/BusApp';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [ticketData, setTicketData] = useState(null);

  const handleFormSubmit = (formData) => {
    setTicketData(formData);
  };

  const handleReset = () => {
    setTicketData(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BusApp />} />
        <Route path="/ticket-form" element={<TicketForm />} />
        <Route path="/view-ticket" element={<div className="min-h-screen bg-yellow-300 flex items-center justify-center">
          <div className="container mx-auto px-4 min-w-screen">
            <TicketDisplay onReset={handleReset} />
          </div>
        </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;