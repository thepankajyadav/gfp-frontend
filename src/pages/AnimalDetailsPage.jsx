import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Edit, Trash2, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Mock animal data - in real app, fetch by ID
const ANIMAL_DATA = {
    id: 1,
    tagId: 'GT-001',
    breed: 'Boer',
    // gender: 'Male', // Change to 'Female' to see all tabs
    gender: 'Female',
    status: 'Active',
    age: '2 years',
    weight: '45 kg',
    dateOfBirth: '2023-01-15',
    color: 'Brown & White',
    images: [
        'https://images.unsplash.com/photo-1533318087102-b3ad366ed041?w=800',
        'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800',
        'https://images.unsplash.com/photo-1524024973431-2ad916746881?w=800'
    ]
};

const VACCINATION_RECORDS = [
    { id: 1, vaccine: 'CDT Vaccine', date: '2025-11-15', nextDue: '2026-11-15', administeredBy: 'Dr. Sharma' },
    { id: 2, vaccine: 'Rabies Vaccine', date: '2025-10-20', nextDue: '2026-10-20', administeredBy: 'Dr. Sharma' },
];

const MEDICATION_RECORDS = [
    { id: 1, medicine: 'Ivermectin', date: '2026-01-10', dosage: '5ml', administeredBy: 'Dr. Sharma' },
    { id: 2, medicine: 'Penicillin', date: '2025-12-20', dosage: '10ml', administeredBy: 'Dr. Patel' },
];

const MATING_RECORDS = [
    { id: 1, partner: 'GT-002', date: '2025-10-15', status: 'Successful', offspring: 2 },
    { id: 2, partner: 'GT-007', date: '2025-08-10', status: 'Successful', offspring: 1 },
];

const WEIGHT_RECORDS = [
    { id: 1, date: '2026-01-15', weight: '45 kg', notes: 'Healthy weight gain' },
    { id: 2, date: '2025-12-15', weight: '43 kg', notes: 'Normal' },
    { id: 3, date: '2025-11-15', weight: '41 kg', notes: 'Good progress' },
];

const BREEDING_RECORDS = [
    { id: 1, femaleTag: 'GT-002', date: '2025-10-15', status: 'Successful', expectedDue: '2026-03-15' },
    { id: 2, femaleTag: 'GT-007', date: '2025-08-10', status: 'Successful', expectedDue: '2026-01-10' },
];

const MILK_HISTORY = [
    { id: 1, date: '2026-01-15', quantity: '2.5 L', quality: 'Excellent' },
    { id: 2, date: '2026-01-14', quantity: '2.3 L', quality: 'Good' },
    { id: 3, date: '2026-01-13', quantity: '2.4 L', quality: 'Excellent' },
];

const INSURANCE_DATA = {
    provider: 'GoatCare Insurance',
    policyNumber: 'GCI-2024-001',
    coverage: '₹50,000',
    startDate: '2024-01-01',
    endDate: '2025-01-01',
    status: 'Active'
};

const AnimalDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('vaccination');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const animal = ANIMAL_DATA; // In real app: fetch by id

    // Gender-based tab filtering
    const allTabs = [
        { id: 'vaccination', label: 'Vaccination Record', maleAllowed: true },
        { id: 'medication', label: 'Medication Record', maleAllowed: true },
        { id: 'weight', label: 'Weight Record', maleAllowed: true },
        { id: 'insurance', label: 'Insurance', maleAllowed: true },
        { id: 'mating', label: 'Mating Record', maleAllowed: false },
        { id: 'breeding', label: 'Breeding Record', maleAllowed: false },
        { id: 'milk', label: 'Milk History', maleAllowed: false },
    ];

    const tabs = animal.gender === 'Male'
        ? allTabs.filter(tab => tab.maleAllowed)
        : allTabs;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % animal.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + animal.images.length) % animal.images.length);
    };

    const handleEdit = () => {
        alert('Edit functionality - to be implemented');
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this animal?')) {
            navigate('/dashboard/animals');
        }
    };

    const handleStatusChange = () => {
        alert('Change status functionality - to be implemented');
    };

    const handleAddRecord = (type) => {
        alert(`Add ${type} functionality - to be implemented`);
    };

    return (
        <div className="animal-details-page">
            <div style={{ marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '1rem' }}>
                <h2 style={{ color: 'var(--color-primary)', margin: 0 }}>Animal Details - {animal.tagId}</h2>
            </div>

            {/* Responsive Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '2rem'
            }}>
                {/* Image Gallery */}
                <Card>
                    <div style={{ position: 'relative' }}>
                        <img
                            src={animal.images[currentImageIndex]}
                            alt={`${animal.tagId}`}
                            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
                        />
                        {animal.images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    style={{
                                        position: 'absolute',
                                        left: '10px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'rgba(255,255,255,0.9)',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '40px',
                                        height: '40px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'rgba(255,255,255,0.9)',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '40px',
                                        height: '40px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </>
                        )}
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', justifyContent: 'center' }}>
                        {animal.images.map((_, idx) => (
                            <div
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: idx === currentImageIndex ? 'var(--color-primary)' : 'var(--color-border)',
                                    cursor: 'pointer'
                                }}
                            />
                        ))}
                    </div>
                </Card>

                {/* Goat Info */}
                <Card>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--color-text-main)' }}>{animal.tagId}</h3>
                            <p style={{ margin: '0.5rem 0 0 0', color: 'var(--color-text-muted)' }}>{animal.breed} • {animal.gender}</p>
                        </div>
                        <span style={{
                            padding: '0.5rem 1rem',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.9rem',
                            fontWeight: '500',
                            backgroundColor: animal.status === 'Active' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                            color: animal.status === 'Active' ? '#16a34a' : '#dc2626'
                        }}>
                            {animal.status}
                        </span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Age</label>
                            <p style={{ margin: 0, color: 'var(--color-text-main)' }}>{animal.age}</p>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Weight</label>
                            <p style={{ margin: 0, color: 'var(--color-text-main)' }}>{animal.weight}</p>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Date of Birth</label>
                            <p style={{ margin: 0, color: 'var(--color-text-main)' }}>{animal.dateOfBirth}</p>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Color</label>
                            <p style={{ margin: 0, color: 'var(--color-text-main)' }}>{animal.color}</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                        <Button variant="primary" onClick={handleEdit}>
                            <Edit size={18} style={{ marginRight: '0.5rem' }} />
                            Edit
                        </Button>
                        <Button variant="outline" onClick={handleStatusChange}>
                            Change Status
                        </Button>
                        <Button
                            variant="primary"
                            onClick={handleDelete}
                            style={{ backgroundColor: '#dc2626', borderColor: '#dc2626', marginLeft: 'auto' }}
                        >
                            <Trash2 size={18} style={{ marginRight: '0.5rem' }} />
                            Delete
                        </Button>
                    </div>
                </Card>
            </div>

            {/* Tabbed Sections */}
            <Card>
                <div style={{ borderBottom: '2px solid var(--color-border)', marginBottom: '1.5rem', overflowX: 'auto' }}>
                    <div style={{ display: 'flex', gap: '2rem', minWidth: 'max-content' }}>
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    padding: '1rem 0',
                                    background: 'none',
                                    border: 'none',
                                    borderBottom: activeTab === tab.id ? '3px solid var(--color-primary)' : '3px solid transparent',
                                    color: activeTab === tab.id ? 'var(--color-primary)' : 'var(--color-text-muted)',
                                    fontWeight: activeTab === tab.id ? '600' : '400',
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                {activeTab === 'vaccination' && (
                    <div>
                        <h4 style={{ marginTop: 0 }}>Vaccination Records</h4>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Vaccine</th>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Date</th>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Next Due</th>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Administered By</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {VACCINATION_RECORDS.map(record => (
                                        <tr key={record.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                            <td style={{ padding: '0.75rem' }}>{record.vaccine}</td>
                                            <td style={{ padding: '0.75rem' }}>{record.date}</td>
                                            <td style={{ padding: '0.75rem' }}>{record.nextDue}</td>
                                            <td style={{ padding: '0.75rem' }}>{record.administeredBy}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div style={{ marginTop: '1.5rem' }}>
                            <Button variant="primary" onClick={() => handleAddRecord('Vaccination Record')}>
                                <Plus size={18} style={{ marginRight: '0.5rem' }} />
                                Add Vaccination Record
                            </Button>
                        </div>
                    </div>
                )}

                {activeTab === 'medication' && (
                    <div>
                        <h4 style={{ marginTop: 0 }}>Medication Records</h4>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Medicine</th>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Date</th>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Dosage</th>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Administered By</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {MEDICATION_RECORDS.map(record => (
                                        <tr key={record.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                            <td style={{ padding: '0.75rem' }}>{record.medicine}</td>
                                            <td style={{ padding: '0.75rem' }}>{record.date}</td>
                                            <td style={{ padding: '0.75rem' }}>{record.dosage}</td>
                                            <td style={{ padding: '0.75rem' }}>{record.administeredBy}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div style={{ marginTop: '1.5rem' }}>
                            <Button variant="primary" onClick={() => handleAddRecord('Medication Record')}>
                                <Plus size={18} style={{ marginRight: '0.5rem' }} />
                                Add Medication Record
                            </Button>
                        </div>
                    </div>
                )}

                {activeTab === 'weight' && (
                    <div>
                        <h4 style={{ marginTop: 0 }}>Weight Records</h4>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Date</th>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Weight</th>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {WEIGHT_RECORDS.map(record => (
                                        <tr key={record.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                            <td style={{ padding: '0.75rem' }}>{record.date}</td>
                                            <td style={{ padding: '0.75rem' }}>{record.weight}</td>
                                            <td style={{ padding: '0.75rem' }}>{record.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div style={{ marginTop: '1.5rem' }}>
                            <Button variant="primary" onClick={() => handleAddRecord('Weight Record')}>
                                <Plus size={18} style={{ marginRight: '0.5rem' }} />
                                Add Weight Record
                            </Button>
                        </div>
                    </div>
                )}

                {activeTab === 'insurance' && (
                    <div>
                        <h4 style={{ marginTop: 0 }}>Insurance Information</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Provider</label>
                                <p style={{ margin: 0, color: 'var(--color-text-main)' }}>{INSURANCE_DATA.provider}</p>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Policy Number</label>
                                <p style={{ margin: 0, color: 'var(--color-text-main)' }}>{INSURANCE_DATA.policyNumber}</p>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Coverage</label>
                                <p style={{ margin: 0, color: 'var(--color-text-main)' }}>{INSURANCE_DATA.coverage}</p>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Status</label>
                                <span style={{
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: 'var(--radius-sm)',
                                    fontSize: '0.85rem',
                                    fontWeight: '500',
                                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                                    color: '#16a34a'
                                }}>
                                    {INSURANCE_DATA.status}
                                </span>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Start Date</label>
                                <p style={{ margin: 0, color: 'var(--color-text-main)' }}>{INSURANCE_DATA.startDate}</p>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>End Date</label>
                                <p style={{ margin: 0, color: 'var(--color-text-main)' }}>{INSURANCE_DATA.endDate}</p>
                            </div>
                        </div>
                        <div style={{ marginTop: '1.5rem' }}>
                            <Button variant="primary" onClick={() => handleAddRecord('Insurance')}>
                                <Plus size={18} style={{ marginRight: '0.5rem' }} />
                                Add Insurance
                            </Button>
                        </div>
                    </div>
                )}

                {activeTab === 'mating' && (
                    <div>
                        <h4 style={{ marginTop: 0 }}>Mating Records</h4>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Partner Tag</th>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Date</th>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Status</th>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Offspring</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {MATING_RECORDS.map(record => (
                                        <tr key={record.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                            <td style={{ padding: '0.75rem' }}>{record.partner}</td>
                                            <td style={{ padding: '0.75rem' }}>{record.date}</td>
                                            <td style={{ padding: '0.75rem' }}>{record.status}</td>
                                            <td style={{ padding: '0.75rem' }}>{record.offspring}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div style={{ marginTop: '1.5rem' }}>
                            <Button variant="primary" onClick={() => handleAddRecord('Mating Record')}>
                                <Plus size={18} style={{ marginRight: '0.5rem' }} />
                                Add Mating Record
                            </Button>
                        </div>
                    </div>
                )}

                {activeTab === 'breeding' && (
                    <div>
                        <h4 style={{ marginTop: 0 }}>Breeding Records</h4>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Female Tag</th>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Date</th>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Status</th>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Expected Due</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {BREEDING_RECORDS.map(record => (
                                        <tr key={record.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                            <td style={{ padding: '0.75rem' }}>{record.femaleTag}</td>
                                            <td style={{ padding: '0.75rem' }}>{record.date}</td>
                                            <td style={{ padding: '0.75rem' }}>{record.status}</td>
                                            <td style={{ padding: '0.75rem' }}>{record.expectedDue}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div style={{ marginTop: '1.5rem' }}>
                            <Button variant="primary" onClick={() => handleAddRecord('Breeding Record')}>
                                <Plus size={18} style={{ marginRight: '0.5rem' }} />
                                Add Breeding Record
                            </Button>
                        </div>
                    </div>
                )}

                {activeTab === 'milk' && (
                    <div>
                        <h4 style={{ marginTop: 0 }}>Milk Production History</h4>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Date</th>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Quantity</th>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Quality</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {MILK_HISTORY.map(record => (
                                        <tr key={record.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                            <td style={{ padding: '0.75rem' }}>{record.date}</td>
                                            <td style={{ padding: '0.75rem' }}>{record.quantity}</td>
                                            <td style={{ padding: '0.75rem' }}>{record.quality}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div style={{ marginTop: '1.5rem' }}>
                            <Button variant="primary" onClick={() => handleAddRecord('Milk Record')}>
                                <Plus size={18} style={{ marginRight: '0.5rem' }} />
                                Add Milk Record
                            </Button>
                        </div>
                    </div>
                )}
            </Card>
        </div>
    );
};

export default AnimalDetailsPage;
