import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

const AddVaccinationRecordForm = ({ isOpen, onClose, onSubmit, animalTag }) => {
    const [formData, setFormData] = useState({
        animalTag: animalTag || '',
        vaccine: '',
        date: '',
        nextDue: '',
        administeredBy: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ animalTag: animalTag || '', vaccine: '', date: '', nextDue: '', administeredBy: '' });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add Vaccination Record">
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Animal Tag</label>
                    <input type="text" name="animalTag" value={formData.animalTag} onChange={handleChange} required readOnly
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none', backgroundColor: '#f5f5f5' }} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Vaccine Name</label>
                    <select name="vaccine" value={formData.vaccine} onChange={handleChange} required
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }}>
                        <option value="">Select Vaccine</option>
                        <option value="CDT Vaccine">CDT Vaccine</option>
                        <option value="Rabies Vaccine">Rabies Vaccine</option>
                        <option value="Foot & Mouth Disease">Foot & Mouth Disease</option>
                    </select>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Date</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Next Due</label>
                    <input type="date" name="nextDue" value={formData.nextDue} onChange={handleChange} required
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Administered By</label>
                    <input type="text" name="administeredBy" value={formData.administeredBy} onChange={handleChange} required placeholder="e.g., Dr. Sharma"
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                </div>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                    <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                    <Button type="submit" variant="primary">Add Record</Button>
                </div>
            </form>
        </Modal>
    );
};

export default AddVaccinationRecordForm;
