import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

const AddAnimalForm = ({ isOpen, onClose, onSubmit }) => {
    const getDefaultFormData = () => ({
        tagId: '',
        breed: '',
        gender: '',
        status: 'Active',
        acquisitionType: '',
        dob: '',
        purchaseDate: '',
        purchasePrice: '',
        origin: '',
        castrated: ''
    });

    const [formData, setFormData] = useState({
        ...getDefaultFormData()
    });

    const today = new Date().toISOString().split('T')[0];

    const openDatePicker = (event) => {
        if (typeof event.target.showPicker === 'function') {
            event.target.showPicker();
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const normalizedValue = (name === 'dob' || name === 'purchaseDate') && value > today ? today : value;

        setFormData((prev) => {
            const updated = { ...prev, [name]: normalizedValue };

            if (name === 'acquisitionType') {
                if (normalizedValue === 'Birth') {
                    updated.purchaseDate = '';
                    updated.purchasePrice = '';
                    updated.origin = '';
                }
                if (normalizedValue === 'Purchase') {
                    updated.dob = '';
                }
            }

            if (name === 'gender' && normalizedValue !== 'Male') {
                updated.castrated = '';
            }

            return updated;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData(getDefaultFormData());
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add New Animal">
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Tag ID</label>
                    <input
                        type="text"
                        name="tagId"
                        value={formData.tagId}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }}
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Breed</label>
                    <select
                        name="breed"
                        value={formData.breed}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }}
                    >
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
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.gender === 'Male'}
                                onChange={handleChange}
                                required
                            />
                            Male
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === 'Female'}
                                onChange={handleChange}
                                required
                            />
                            Female
                        </label>
                    </div>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Status</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }}
                    >
                        <option value="Active">Active</option>
                        <option value="Sick">Sick</option>
                        <option value="Pregnant">Pregnant</option>
                    </select>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>By Purchase / Birth</label>
                    <select
                        name="acquisitionType"
                        value={formData.acquisitionType}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }}
                    >
                        <option value="">Select</option>
                        <option value="Birth">Birth</option>
                        <option value="Purchase">Purchase</option>
                    </select>
                </div>

                {formData.acquisitionType === 'Birth' && (
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            max={today}
                            onChange={handleChange}
                            onClick={openDatePicker}
                            onFocus={openDatePicker}
                            onKeyDown={(e) => e.preventDefault()}
                            required
                            style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }}
                        />
                    </div>
                )}

                {formData.acquisitionType === 'Purchase' && (
                    <>
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Purchase Date</label>
                            <input
                                type="date"
                                name="purchaseDate"
                                value={formData.purchaseDate}
                                max={today}
                                onChange={handleChange}
                                onClick={openDatePicker}
                                onFocus={openDatePicker}
                                onKeyDown={(e) => e.preventDefault()}
                                required
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }}
                            />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Purchase Price</label>
                            <input
                                type="number"
                                min="0"
                                step="0.01"
                                name="purchasePrice"
                                value={formData.purchasePrice}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }}
                            />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Origin</label>
                            <input
                                type="text"
                                name="origin"
                                value={formData.origin}
                                onChange={handleChange}
                                required
                                placeholder="e.g., Local market / Nearby farm"
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none' }}
                            />
                        </div>
                    </>
                )}

                {formData.gender === 'Male' && (
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Castrated</label>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <input
                                    type="radio"
                                    name="castrated"
                                    value="Yes"
                                    checked={formData.castrated === 'Yes'}
                                    onChange={handleChange}
                                    required
                                />
                                Yes
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <input
                                    type="radio"
                                    name="castrated"
                                    value="No"
                                    checked={formData.castrated === 'No'}
                                    onChange={handleChange}
                                    required
                                />
                                No
                            </label>
                        </div>
                    </div>
                )}
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                    <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                    <Button type="submit" variant="primary">Add Animal</Button>
                </div>
            </form>
        </Modal>
    );
};

export default AddAnimalForm;
