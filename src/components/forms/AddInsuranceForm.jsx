import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

const AddInsuranceForm = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        provider: '',
        policyNumber: '',
        coverage: '',
        startDate: '',
        endDate: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ provider: '', policyNumber: '', coverage: '', startDate: '', endDate: '' });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add Insurance">
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Provider</label>
                    <input type="text" name="provider" value={formData.provider} onChange={handleChange} required placeholder="e.g., GoatCare Insurance"
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Policy Number</label>
                    <input type="text" name="policyNumber" value={formData.policyNumber} onChange={handleChange} required placeholder="e.g., GCI-2024-001"
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Coverage Amount</label>
                    <input type="text" name="coverage" value={formData.coverage} onChange={handleChange} required placeholder="e.g., ₹50,000"
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Start Date</label>
                    <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>End Date</label>
                    <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                </div>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                    <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                    <Button type="submit" variant="primary">Add Insurance</Button>
                </div>
            </form>
        </Modal>
    );
};

export default AddInsuranceForm;
