import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ChangePasswordPage = () => {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(null);

        if (formData.newPassword !== formData.confirmPassword) {
            setMessage({ type: 'error', text: 'New passwords do not match.' });
            return;
        }

        if (formData.newPassword.length < 6) {
            setMessage({ type: 'error', text: 'Password must be at least 6 characters long.' });
            return;
        }

        setLoading(true);
        // Mock API call
        setTimeout(() => {
            setMessage({ type: 'success', text: 'Password updated successfully!' });
            setFormData({ currentPassword: '', newPassword: '', confirmPassword: '' });
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="change-password-page">
            <div style={{ marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '1rem' }}>
                <h2 style={{ color: 'var(--color-primary)' }}>Change Password</h2>
            </div>
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                <Card>
                    {message && (
                        <div style={{
                            padding: '0.75rem', marginBottom: '1.5rem', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem',
                            backgroundColor: message.type === 'error' ? 'rgba(254, 226, 226, 0.5)' : 'rgba(220, 252, 231, 0.5)',
                            color: message.type === 'error' ? '#991b1b' : '#166534',
                            border: `1px solid ${message.type === 'error' ? '#fca5a5' : '#86efac'}`
                        }}>
                            {message.text}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1.25rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500', color: 'var(--color-text-main)' }}>Current Password</label>
                            <input
                                type="password" name="currentPassword" value={formData.currentPassword} onChange={handleChange} required
                                placeholder="Enter current password"
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none', backgroundColor: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}
                            />
                        </div>
                        <div style={{ marginBottom: '1.25rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500', color: 'var(--color-text-main)' }}>New Password</label>
                            <input
                                type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} required
                                placeholder="Enter new password"
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none', backgroundColor: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}
                            />
                        </div>
                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500', color: 'var(--color-text-main)' }}>Confirm New Password</label>
                            <input
                                type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required
                                placeholder="Confirm new password"
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', outline: 'none', backgroundColor: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}
                            />
                        </div>
                        <Button type="submit" variant="primary" style={{ width: '100%' }} disabled={loading}>
                            {loading ? 'Updating...' : 'Update Password'}
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default ChangePasswordPage;
