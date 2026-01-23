import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AddAnimalForm from '../components/forms/AddAnimalForm';

const DUMMY_ANIMALS = [
    { id: 1, tagId: 'GT-001', breed: 'Boer', gender: 'Male', status: 'Active', age: '2 years' },
    { id: 2, tagId: 'GT-002', breed: 'Saanen', gender: 'Female', status: 'Active', age: '3 years' },
    { id: 3, tagId: 'GT-003', breed: 'Boer', gender: 'Female', status: 'Pregnant', age: '4 years' },
    { id: 4, tagId: 'GT-004', breed: 'Alpine', gender: 'Male', status: 'Active', age: '1 year' },
    { id: 5, tagId: 'GT-005', breed: 'Nubian', gender: 'Female', status: 'Active', age: '2 years' },
    { id: 6, tagId: 'GT-006', breed: 'Boer', gender: 'Male', status: 'Sick', age: '3 years' },
    { id: 7, tagId: 'GT-007', breed: 'LaMancha', gender: 'Female', status: 'Active', age: '1 year' },
    { id: 8, tagId: 'GT-008', breed: 'Saanen', gender: 'Male', status: 'Active', age: '2 years' },
    { id: 9, tagId: 'GT-009', breed: 'Saanen', gender: 'Male', status: 'Active', age: '2 years' },
    { id: 10, tagId: 'GT-010', breed: 'Boer', gender: 'Male', status: 'Active', age: '2 years' },
    { id: 11, tagId: 'GT-011', breed: 'Boer', gender: 'Male', status: 'Active', age: '2 years' },
    { id: 12, tagId: 'GT-012', breed: 'Boer', gender: 'Male', status: 'Active', age: '2 years' },
    { id: 13, tagId: 'GT-013', breed: 'Boer', gender: 'Male', status: 'Active', age: '2 years' },
    { id: 14, tagId: 'GT-014', breed: 'Boer', gender: 'Male', status: 'Active', age: '2 years' },
    { id: 15, tagId: 'GT-015', breed: 'Boer', gender: 'Male', status: 'Active', age: '2 years' },
    { id: 16, tagId: 'GT-016', breed: 'Boer', gender: 'Male', status: 'Active', age: '2 years' },
    { id: 17, tagId: 'GT-017', breed: 'Boer', gender: 'Male', status: 'Active', age: '2 years' },
    { id: 18, tagId: 'GT-018', breed: 'Boer', gender: 'Male', status: 'Active', age: '2 years' },
    { id: 19, tagId: 'GT-019', breed: 'Boer', gender: 'Male', status: 'Active', age: '2 years' },
    { id: 20, tagId: 'GT-020', breed: 'Boer', gender: 'Male', status: 'Active', age: '2 years' },
    { id: 21, tagId: 'GT-021', breed: 'Boer', gender: 'Male', status: 'Active', age: '2 years' },
    { id: 22, tagId: 'GT-022', breed: 'Boer', gender: 'Male', status: 'Active', age: '2 years' },
    { id: 23, tagId: 'GT-023', breed: 'Boer', gender: 'Male', status: 'Active', age: '2 years' },
    { id: 24, tagId: 'GT-024', breed: 'Boer', gender: 'Male', status: 'Active', age: '2 years' },
    { id: 25, tagId: 'GT-025', breed: 'Boer', gender: 'Male', status: 'Active', age: '2 years' },
];

const AnimalsPage = () => {
    const navigate = useNavigate();
    const [animals, setAnimals] = useState(DUMMY_ANIMALS);
    const [selectedIds, setSelectedIds] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedIds(animals.map(a => a.id));
        } else {
            setSelectedIds([]);
        }
    };

    const handleSelectOne = (id) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(sid => sid !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
    };

    const handleDelete = () => {
        if (window.confirm(`Delete ${selectedIds.length} animal(s)?`)) {
            setAnimals(animals.filter(a => !selectedIds.includes(a.id)));
            setSelectedIds([]);
        }
    };

    const handleAddNew = () => {
        setShowAddForm(true);
    };

    const handleSubmitAnimal = (formData) => {
        const newAnimal = {
            id: Math.max(...animals.map(a => a.id), 0) + 1,
            ...formData
        };
        setAnimals([...animals, newAnimal]);
    };

    return (
        <div className="animals-page">
            <div style={{ marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ color: 'var(--color-primary)', margin: 0 }}>Animals</h2>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    {selectedIds.length > 0 && (
                        <Button
                            variant="primary"
                            onClick={handleDelete}
                            style={{
                                backgroundColor: '#dc2626',
                                borderColor: '#dc2626',
                                color: 'white'
                            }}
                        >
                            Delete ({selectedIds.length})
                        </Button>
                    )}
                    <Button variant="primary" onClick={handleAddNew}>
                        <Plus size={18} style={{ marginRight: '0.5rem' }} />
                        Add New Animal
                    </Button>
                </div>
            </div>

            <Card>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                                <th style={{ padding: '0.75rem', textAlign: 'left' }}>
                                    <input
                                        type="checkbox"
                                        checked={selectedIds.length === animals.length && animals.length > 0}
                                        onChange={handleSelectAll}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </th>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Tag ID</th>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Breed</th>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Gender</th>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Status</th>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {animals.map((animal) => (
                                <tr
                                    key={animal.id}
                                    onClick={(e) => {
                                        // Don't navigate if clicking checkbox
                                        if (e.target.type !== 'checkbox') {
                                            navigate(`/dashboard/animals/${animal.id}`);
                                        }
                                    }}
                                    style={{
                                        borderBottom: '1px solid var(--color-border)',
                                        backgroundColor: selectedIds.includes(animal.id) ? 'rgba(170, 199, 216, 0.25)' : 'transparent',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <td style={{ padding: '0.75rem' }}>
                                        <input
                                            type="checkbox"
                                            checked={selectedIds.includes(animal.id)}
                                            onChange={() => handleSelectOne(animal.id)}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </td>
                                    <td style={{ padding: '0.75rem', color: 'var(--color-text-main)', fontWeight: '500' }}>{animal.tagId}</td>
                                    <td style={{ padding: '0.75rem', color: 'var(--color-text-main)' }}>{animal.breed}</td>
                                    <td style={{ padding: '0.75rem', color: 'var(--color-text-main)' }}>{animal.gender}</td>
                                    <td style={{ padding: '0.75rem' }}>
                                        <span style={{
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: 'var(--radius-sm)',
                                            fontSize: '0.85rem',
                                            fontWeight: '500',
                                            backgroundColor: animal.status === 'Active' ? 'rgba(34, 197, 94, 0.1)' :
                                                animal.status === 'Sick' ? 'rgba(239, 68, 68, 0.1)' :
                                                    'rgba(59, 130, 246, 0.1)',
                                            color: animal.status === 'Active' ? '#16a34a' :
                                                animal.status === 'Sick' ? '#dc2626' :
                                                    '#2563eb'
                                        }}>
                                            {animal.status}
                                        </span>
                                    </td>
                                    <td style={{ padding: '0.75rem', color: 'var(--color-text-main)' }}>{animal.age}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
            <AddAnimalForm
                isOpen={showAddForm}
                onClose={() => setShowAddForm(false)}
                onSubmit={handleSubmitAnimal}
            />
        </div>
    );
};

export default AnimalsPage;
