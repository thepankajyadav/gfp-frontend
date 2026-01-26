import React from 'react';

const NotificationPopup = ({ notifications, onClose }) => {
    return (
        <div style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: '0.5rem',
            width: '320px',
            backgroundColor: 'var(--color-bg-card)',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            overflow: 'hidden'
        }}>
            <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--color-border)', fontWeight: '600' }}>
                Notifications
            </div>
            <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {notifications.length > 0 ? (
                    notifications.map((notif) => (
                        <div key={notif.id} style={{
                            padding: '0.75rem 1rem',
                            borderBottom: '1px solid var(--color-border)',
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            backgroundColor: notif.read ? 'transparent' : 'var(--color-bg-subtle)'
                        }}>
                            <div style={{ fontWeight: '500', marginBottom: '0.2rem' }}>{notif.title}</div>
                            <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>{notif.message}</div>
                            <div style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', marginTop: '0.2rem', textAlign: 'right' }}>{notif.time}</div>
                        </div>
                    ))
                ) : (
                    <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-text-muted)' }}>
                        No new notifications
                    </div>
                )}
            </div>
            <div style={{ padding: '0.5rem', textAlign: 'center', borderTop: '1px solid var(--color-border)' }}>
                <button style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontSize: '0.85rem', cursor: 'pointer' }}>
                    Mark all as read
                </button>
            </div>
            {/* Overlay to close on click outside, though useRef approach in parent is better usually */}
            <div
                style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}
                onClick={onClose}
            ></div>
        </div>
    );
};

export default NotificationPopup;
