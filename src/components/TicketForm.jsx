// src/components/TicketForm.jsx
import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp, query, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const TicketForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        route: '',
        originating: '',
        destination: '',
        ticketsCount: '',
        fare: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        try {
            // Validate all fields are filled
            if (!formData.route || !formData.originating || !formData.destination || !formData.ticketsCount || !formData.fare) {
                setError('Please fill in all fields');
                setLoading(false);
                return;
            }

            // Step 1: Update all existing tickets to 'inactive'
            const ticketsQuery = query(collection(db, 'tickets'));
            const querySnapshot = await getDocs(ticketsQuery);

            querySnapshot.forEach(async (doc) => {
                if (doc.data().status === 'active') {
                    await updateDoc(doc.ref, { status: 'inactive' });
                }
            });

            // Step 2: Add the new ticket as 'active'
            const docRef = await addDoc(collection(db, 'tickets'), {
                route: formData.route,
                originating: formData.originating,
                destination: formData.destination,
                ticketsCount: parseInt(formData.ticketsCount),
                fare: parseFloat(formData.fare),
                createdAt: serverTimestamp(),
                status: 'active'
            });

            setSuccess(`✓ Payment Done!\nTicket saved successfully! ID: ${docRef.id}`);

            // Reset form
            setFormData({
                route: '',
                originating: '',
                destination: '',
                ticketsCount: '',
                fare: ''
            });

            // Call parent onSubmit if provided
            if (onSubmit) {
                onSubmit(formData);
            }

            // Clear success message after 3 seconds
            setTimeout(() => setSuccess(''), 3000);
        } catch (err) {
            setError(`Error saving ticket: ${err.message}`);
            console.error('Firestore error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center text-green-400">PMPML Ticket Booking</h2>

                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md text-sm">
                        {success}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Route Number</label>
                        <input
                            type="text"
                            name="route"
                            value={formData.route}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="e.g., 228"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Originating Stop</label>
                        <input
                            type="text"
                            name="originating"
                            value={formData.originating}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="e.g., Sushind Phata"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Destination Stop</label>
                        <input
                            type="text"
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="e.g., Katraj"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Number of Tickets</label>
                        <input
                            type="number"
                            name="ticketsCount"
                            value={formData.ticketsCount}
                            onChange={handleChange}
                            min="1"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="e.g., 3"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Fare (₹)</label>
                        <input
                            type="number"
                            name="fare"
                            value={formData.fare}
                            onChange={handleChange}
                            min="1"
                            step="0.01"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="e.g., 50.00"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={` w-full ${loading ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'} text-white mt-2 py-2 px-4 rounded-md transition duration-200 font-medium`}
                    >
                        {loading ? 'Saving...' : 'Pay'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TicketForm;