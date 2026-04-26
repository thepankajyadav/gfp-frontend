import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AddLocationForm from '../components/forms/AddLocationForm';

const DUMMY_LOCATION = [
    { id: 1, locationName: 'Kidding Shed', locationCode: 'L1', Purpose: 'Newborn kids' },
    { id: 2, locationName: 'Grower Shed', locationCode: 'L2', Purpose: '3–6 months' },
    { id: 3, locationName: 'Lactation Shed', locationCode: 'L3', Purpose: 'Milk-producing females' },
    { id: 4, locationName: 'Pregnancy Shed', locationCode: 'L4', Purpose: 'Pregnant does' },
    { id: 5, locationName: 'Breeding Pen', locationCode: 'L5', Purpose: 'Bucks & breeding' },
];

const LocationPage = () => {
    const [locations, setLocations] = useState(DUMMY_LOCATION);
    const [showAddForm, setShowAddForm] = useState(false);

    const handleAddLocation = (location) => {
        const newLocation = {
            id: Math.max(...locations.map((item) => item.id), 0) + 1,
            ...location
        };
        setLocations((prev) => [...prev, newLocation]);
    };

    return (
        <div className="location-page">
            <div style={{ marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ color: 'var(--color-primary)', margin: 0 }}>Locations</h2>
                <Button variant="primary" onClick={() => setShowAddForm(true)}><Plus size={18} style={{ marginRight: '0.5rem' }} />Add Location</Button>
            </div>
            <Card>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                                <th className="sticky-col" style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Location Name</th>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Location Type</th>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Date</th>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {locations.map((record) => (
                                <tr key={record.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                    <td className="sticky-col" style={{ padding: '0.75rem', color: 'var(--color-text-main)', fontWeight: '500' }}>{record.locationName}</td>
                                    <td style={{ padding: '0.75rem', color: 'var(--color-text-main)' }}>{record.locationCode}</td>
                                    <td style={{ padding: '0.75rem', color: 'var(--color-text-main)' }}>{record.Purpose}</td>
                                    <td style={{ padding: '0.75rem' }}>
                                        <span style={{
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: 'var(--radius-sm)',
                                            fontSize: '0.85rem',
                                            fontWeight: '500',
                                            backgroundColor: record.status === 'Successful' ? 'rgba(34, 197, 94, 0.1)' :
                                                record.status === 'Failed' ? 'rgba(239, 68, 68, 0.1)' :
                                                    'rgba(59, 130, 246, 0.1)',
                                            color: record.status === 'Successful' ? '#16a34a' :
                                                record.status === 'Failed' ? '#dc2626' :
                                                    '#2563eb'
                                        }}>
                                            {record.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
            <AddLocationForm
                isOpen={showAddForm}
                onClose={() => setShowAddForm(false)}
                onSubmit={handleAddLocation}
            />
        </div>
    );
};

export default LocationPage;
