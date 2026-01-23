import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

const AddMilkRecordForm = ({ isOpen, onClose, onSubmit, animalTag }) => {
    const [formData, setFormData] = useState({
        animalTag: animalTag || '',
        date: '',
        quantity: '',
        quality: 'Good'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ animalTag: animalTag || '', date: '', quantity: '', quality: 'Good' });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add Milk Record">
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Animal Tag</label>
                    <input type="text" name="animalTag" value={formData.animalTag} onChange={handleChange} required readOnly
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none', backgroundColor: '#f5f5f5' }} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Date</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Quantity</label>
                    <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} required placeholder="e.g., 2.5 L"
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Quality</label>
                    <select name="quality" value={formData.quality} onChange={handleChange}
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }}>
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                        <option value="Poor">Poor</option>
                    </select>
                </div>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                    <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                    <Button type="submit" variant="primary">Add Record</Button>
                </div>
            </form>
        </Modal>
    );
};

export default AddMilkRecordForm;
