import React from 'react';

const ComingSoonPage = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            minHeight: '400px',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <h1 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '2.5rem' }}>Coming Soon</h1>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem', maxWidth: '500px' }}>
                We are working hard to bring you this feature. Please check back later!
            </p>
        </div>
    );
};

export default ComingSoonPage;
