import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AddMedicineForm from '../components/forms/AddMedicineForm';

const DUMMY_MEDICINES = [
    { id: 1, name: 'Ivermectin', type: 'Antiparasitic', quantity: 50, expiryDate: '2025-12-31' },
    { id: 2, name: 'Penicillin', type: 'Antibiotic', quantity: 30, expiryDate: '2025-08-15' },
    { id: 3, name: 'Oxytetracycline', type: 'Antibiotic', quantity: 25, expiryDate: '2026-03-20' },
    { id: 4, name: 'Vitamin B Complex', type: 'Supplement', quantity: 100, expiryDate: '2026-06-30' },
    { id: 5, name: 'Dexamethasone', type: 'Anti-inflammatory', quantity: 15, expiryDate: '2025-10-10' },
    { id: 6, name: 'Albendazole', type: 'Dewormer', quantity: 40, expiryDate: '2026-01-25' },
];

const MedicinePage = () => {
    const [medicines, setMedicines] = useState(DUMMY_MEDICINES);
    const [showAddForm, setShowAddForm] = useState(false);

    const handleAddMedicine = (medicine) => {
        const newMedicine = {
            id: Math.max(...medicines.map((item) => item.id), 0) + 1,
            ...medicine
        };
        setMedicines((prev) => [...prev, newMedicine]);
    };

    return (
        <div className="medicine-page">
            <div style={{ marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ color: 'var(--color-primary)', margin: 0 }}>Medicine Inventory</h2>
                <Button variant="primary" onClick={() => setShowAddForm(true)}><Plus size={18} style={{ marginRight: '0.5rem' }} />Add Medicine</Button>
            </div>
            <Card>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                                <th className="sticky-col" style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Medicine Name</th>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Type</th>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Quantity</th>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Expiry Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medicines.map((medicine) => (
                                <tr key={medicine.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                    <td className="sticky-col" style={{ padding: '0.75rem', color: 'var(--color-text-main)', fontWeight: '500' }}>{medicine.name}</td>
                                    <td style={{ padding: '0.75rem', color: 'var(--color-text-main)' }}>{medicine.type}</td>
                                    <td style={{ padding: '0.75rem', color: 'var(--color-text-main)' }}>{medicine.quantity}</td>
                                    <td style={{ padding: '0.75rem', color: 'var(--color-text-main)' }}>{medicine.expiryDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
            <AddMedicineForm
                isOpen={showAddForm}
                onClose={() => setShowAddForm(false)}
                onSubmit={handleAddMedicine}
            />
        </div>
    );
};

export default MedicinePage;
