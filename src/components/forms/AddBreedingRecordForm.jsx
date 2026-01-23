import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

const AddBreedingRecordForm = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        femaleTag: '',
        date: '',
        status: 'Pending',
        expectedDue: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ femaleTag: '', date: '', status: 'Pending', expectedDue: '' });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add Breeding Record">
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Female Tag</label>
                    <input type="text" name="femaleTag" value={formData.femaleTag} onChange={handleChange} required placeholder="e.g., GT-002"
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Date</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Status</label>
                    <select name="status" value={formData.status} onChange={handleChange}
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }}>
                        <option value="Pending">Pending</option>
                        <option value="Successful">Successful</option>
                        <option value="Failed">Failed</option>
                    </select>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Expected Due Date</label>
                    <input type="date" name="expectedDue" value={formData.expectedDue} onChange={handleChange}
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

export default AddBreedingRecordForm;
