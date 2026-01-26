import React from 'react';
import { Plus } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const DUMMY_BREEDS = [
    { id: 1, name: 'Boer', description: 'Meat goat breed', origin: 'South Africa', count: 45 },
    { id: 2, name: 'Saanen', description: 'Dairy goat breed', origin: 'Switzerland', count: 32 },
    { id: 3, name: 'Alpine', description: 'Dairy goat breed', origin: 'France', count: 28 },
    { id: 4, name: 'Nubian', description: 'Dual-purpose breed', origin: 'Africa/Middle East', count: 19 },
    { id: 5, name: 'LaMancha', description: 'Dairy goat breed', origin: 'USA', count: 15 },
];

const BreedPage = () => {
    return (
        <div className="breed-page">
            <div style={{ marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ color: 'var(--color-primary)', margin: 0 }}>Breed Management</h2>
                <Button variant="primary"><Plus size={18} style={{ marginRight: '0.5rem' }} />Add New Breed</Button>
            </div>
            <Card>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                                <th className="sticky-col" style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Breed Name</th>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Description</th>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Origin</th>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DUMMY_BREEDS.map((breed) => (
                                <tr key={breed.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                    <td className="sticky-col" style={{ padding: '0.75rem', color: 'var(--color-text-main)', fontWeight: '500' }}>{breed.name}</td>
                                    <td style={{ padding: '0.75rem', color: 'var(--color-text-main)' }}>{breed.description}</td>
                                    <td style={{ padding: '0.75rem', color: 'var(--color-text-main)' }}>{breed.origin}</td>
                                    <td style={{ padding: '0.75rem', color: 'var(--color-text-main)' }}>{breed.count}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default BreedPage;
