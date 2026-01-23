import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const EditProfilePage = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // Mock initial state from user context
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phone: '+91 98765 43210', // Mock phone
        location: user?.location || 'Pune, Maharashtra'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Mock API call
        setTimeout(() => {
            // In a real app, we would update the auth context user here
            setLoading(false);
            navigate('/dashboard/profile');
        }, 1000);
    };

    return (
        <div className="edit-profile-page">
            <div style={{ marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '1rem' }}>
                <h2 style={{ color: 'var(--color-primary)' }}>Edit Profile</h2>
            </div>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <Card>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1.25rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500', color: 'var(--color-text-main)' }}>Full Name</label>
                            <input
                                type="text" name="name" value={formData.name} onChange={handleChange} required
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none', backgroundColor: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}
                            />
                        </div>
                        <div style={{ marginBottom: '1.25rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500', color: 'var(--color-text-main)' }}>Email Address</label>
                            <input
                                type="email" name="email" value={formData.email} onChange={handleChange} required
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none', backgroundColor: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}
                            />
                        </div>
                        <div style={{ marginBottom: '1.25rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500', color: 'var(--color-text-main)' }}>Phone Number</label>
                            <input
                                type="text" name="phone" value={formData.phone} onChange={handleChange}
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none', backgroundColor: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}
                            />
                        </div>
                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500', color: 'var(--color-text-main)' }}>Farm Location</label>
                            <input
                                type="text" name="location" value={formData.location} onChange={handleChange}
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none', backgroundColor: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                            <Button type="button" variant="outline" onClick={() => navigate('/dashboard/profile')}>
                                Cancel
                            </Button>
                            <Button type="submit" variant="primary" disabled={loading}>
                                {loading ? 'Saving...' : 'Save Changes'}
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default EditProfilePage;
