// src/App.js
import React, { useState } from 'react';
import TicketForm from './components/TicketForm';
import TicketDisplay from './components/TicketDisplay';
import BusApp from './components/BusApp';

function App() {
  const [ticketData, setTicketData] = useState(null);

  const handleFormSubmit = (formData) => {
    setTicketData(formData);
  };

  const handleReset = () => {
    setTicketData(null);
  };

  return (
    // <div className="min-h-screen bg-pink-200  flex items-center justify-center">
    //   <div className="container mx-auto px-4 min-w-screen">
    //     {!ticketData ? (
    //       <TicketForm onSubmit={handleFormSubmit} />
    //     ) : (
    //       <TicketDisplay ticketData={ticketData} onReset={handleReset} />
    //     )}
    //   </div>
    // </div>
    <div className="min-h-screen bg-white">
      <BusApp />
    </div>
  );
}

export default App;