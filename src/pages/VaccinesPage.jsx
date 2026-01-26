import React from 'react';
import { Plus } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const DUMMY_VACCINES = [
    { id: 1, animalTag: 'GT-001', vaccineName: 'CDT Vaccine', date: '2025-11-15', nextDue: '2026-11-15' },
    { id: 2, animalTag: 'GT-002', vaccineName: 'Rabies Vaccine', date: '2025-10-20', nextDue: '2026-10-20' },
    { id: 3, animalTag: 'GT-003', vaccineName: 'CDT Vaccine', date: '2025-12-01', nextDue: '2026-12-01' },
    { id: 4, animalTag: 'GT-004', vaccineName: 'Foot & Mouth Disease', date: '2025-09-10', nextDue: '2026-03-10' },
    { id: 5, animalTag: 'GT-005', vaccineName: 'CDT Vaccine', date: '2025-11-25', nextDue: '2026-11-25' },
    { id: 6, animalTag: 'GT-006', vaccineName: 'Rabies Vaccine', date: '2025-10-05', nextDue: '2026-10-05' },
];

const VaccinesPage = () => {
    return (
        <div className="vaccines-page">
            <div style={{ marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ color: 'var(--color-primary)', margin: 0 }}>Vaccine Records</h2>
                <Button variant="primary"><Plus size={18} style={{ marginRight: '0.5rem' }} />Add Vaccine Record</Button>
            </div>
            <Card>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                                <th className="sticky-col" style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Animal Tag</th>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Vaccine Name</th>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Date Given</th>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Next Due</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DUMMY_VACCINES.map((vaccine) => (
                                <tr key={vaccine.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                    <td className="sticky-col" style={{ padding: '0.75rem', color: 'var(--color-text-main)', fontWeight: '500' }}>{vaccine.animalTag}</td>
                                    <td style={{ padding: '0.75rem', color: 'var(--color-text-main)' }}>{vaccine.vaccineName}</td>
                                    <td style={{ padding: '0.75rem', color: 'var(--color-text-main)' }}>{vaccine.date}</td>
                                    <td style={{ padding: '0.75rem', color: 'var(--color-text-main)' }}>{vaccine.nextDue}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default VaccinesPage;
