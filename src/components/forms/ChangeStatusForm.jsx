import React, { useEffect, useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

const ChangeStatusForm = ({ isOpen, onClose, onSubmit, currentStatus }) => {
    const [status, setStatus] = useState(currentStatus || 'Active');

    useEffect(() => {
        setStatus(currentStatus || 'Active');
    }, [currentStatus, isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(status);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Change Animal Status">
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Status</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }}
                    >
                        <option value="Active">Active</option>
                        <option value="Sick">Sick</option>
                        <option value="Pregnant">Pregnant</option>
                        <option value="Sold">Sold</option>
                        <option value="Deceased">Deceased</option>
                    </select>
                </div>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                    <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                    <Button type="submit" variant="primary">Update Status</Button>
                </div>
            </form>
        </Modal>
    );
};

export default ChangeStatusForm;
