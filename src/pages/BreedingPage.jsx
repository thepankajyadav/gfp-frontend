import React from 'react';
import { Plus } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const DUMMY_BREEDING = [
    { id: 1, maleTag: 'GT-001', femaleTag: 'GT-002', date: '2025-10-15', status: 'Successful' },
    { id: 2, maleTag: 'GT-004', femaleTag: 'GT-003', date: '2025-11-20', status: 'Pending' },
    { id: 3, maleTag: 'GT-006', femaleTag: 'GT-005', date: '2025-09-10', status: 'Successful' },
    { id: 4, maleTag: 'GT-008', femaleTag: 'GT-007', date: '2025-12-01', status: 'Pending' },
    { id: 5, maleTag: 'GT-001', femaleTag: 'GT-007', date: '2025-11-05', status: 'Failed' },
];

const BreedingPage = () => {
    return (
        <div className="breeding-page">
            <div style={{ marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ color: 'var(--color-primary)', margin: 0 }}>Breeding Records</h2>
                <Button variant="primary"><Plus size={18} style={{ marginRight: '0.5rem' }} />Add Breeding Record</Button>
            </div>
            <Card>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Male Tag</th>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Female Tag</th>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Date</th>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DUMMY_BREEDING.map((record) => (
                                <tr key={record.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                    <td style={{ padding: '0.75rem', color: 'var(--color-text-main)', fontWeight: '500' }}>{record.maleTag}</td>
                                    <td style={{ padding: '0.75rem', color: 'var(--color-text-main)' }}>{record.femaleTag}</td>
                                    <td style={{ padding: '0.75rem', color: 'var(--color-text-main)' }}>{record.date}</td>
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
        </div>
    );
};

export default BreedingPage;
