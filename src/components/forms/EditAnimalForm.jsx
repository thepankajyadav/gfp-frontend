import React, { useEffect, useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

const EditAnimalForm = ({ isOpen, onClose, onSubmit, animal }) => {
    const [formData, setFormData] = useState({
        tagId: animal?.tagId || '',
        breed: animal?.breed || '',
        gender: animal?.gender || '',
        age: animal?.age || '',
        weight: animal?.weight || '',
        dateOfBirth: animal?.dateOfBirth || '',
        color: animal?.color || ''
    });

    useEffect(() => {
        setFormData({
            tagId: animal?.tagId || '',
            breed: animal?.breed || '',
            gender: animal?.gender || '',
            age: animal?.age || '',
            weight: animal?.weight || '',
            dateOfBirth: animal?.dateOfBirth || '',
            color: animal?.color || ''
        });
    }, [animal, isOpen]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Edit Animal">
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Tag ID</label>
                    <input type="text" name="tagId" value={formData.tagId} onChange={handleChange} required
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Breed</label>
                    <select name="breed" value={formData.breed} onChange={handleChange} required
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }}>
                        <option value="">Select Breed</option>
                        <option value="Boer">Boer</option>
                        <option value="Saanen">Saanen</option>
                        <option value="Alpine">Alpine</option>
                        <option value="Nubian">Nubian</option>
                        <option value="LaMancha">LaMancha</option>
                    </select>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Gender</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} required
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Age</label>
                    <input type="text" name="age" value={formData.age} onChange={handleChange} required placeholder="e.g., 2 years"
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Weight</label>
                    <input type="text" name="weight" value={formData.weight} onChange={handleChange} required placeholder="e.g., 45 kg"
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Date of Birth</label>
                    <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Color</label>
                    <input type="text" name="color" value={formData.color} onChange={handleChange} required placeholder="e.g., Brown & White"
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }} />
                </div>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                    <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                    <Button type="submit" variant="primary">Save Changes</Button>
                </div>
            </form>
        </Modal>
    );
};

export default EditAnimalForm;
