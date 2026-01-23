import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ProfilePage = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="profile-page">
            <div style={{ marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '1rem' }}>
                <h2 style={{ color: 'var(--color-primary)' }}>My Profile</h2>
            </div>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <Card>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-border)' }}>
                        <div style={{
                            width: '80px', height: '80px', borderRadius: '50%',
                            backgroundColor: 'var(--color-primary-light)',
                            color: 'var(--color-primary-dark)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '2rem', fontWeight: 'bold', marginRight: '1.5rem'
                        }}>
                            {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                        </div>
                        <div>
                            <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--color-text-main)' }}>{user?.name || 'User'}</h3>
                            <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>{user?.role || 'Guest'}</p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gap: '1.25rem' }}>
                        <div className="info-group">
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Full Name</label>
                            <div style={{ padding: '0.75rem', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', color: 'var(--color-text-main)', fontSize: '1rem' }}>
                                {user?.name || 'N/A'}
                            </div>
                        </div>
                        <div className="info-group">
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email Address</label>
                            <div style={{ padding: '0.75rem', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', color: 'var(--color-text-main)', fontSize: '1rem' }}>
                                {user?.email || 'user@example.com'}
                            </div>
                        </div>
                        <div className="info-group">
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Phone Number</label>
                            <div style={{ padding: '0.75rem', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', color: 'var(--color-text-main)', fontSize: '1rem' }}>
                                +91 98765 43210
                            </div>
                        </div>

                        <div className="info-group">
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Farm Location</label>
                            <div style={{ padding: '0.75rem', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', color: 'var(--color-text-main)', fontSize: '1rem' }}>
                                {user?.location || 'Pune, Maharashtra'}
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '2.5rem', textAlign: 'right', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                        <Button variant="outline" onClick={() => navigate('/dashboard/edit-profile')}>Edit Profile</Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ProfilePage;
