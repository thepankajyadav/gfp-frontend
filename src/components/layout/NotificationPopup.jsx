import React, { useRef, useEffect } from 'react';
import './Dashboard.css'; // Ensure we have access to variables

const NotificationPopup = ({ notifications, onClose }) => {
    const popupRef = useRef(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div
            ref={popupRef}
            className="dropdown-card"
            style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: '0.8rem', // Space for arrow
                width: '320px',
                zIndex: 1000,
            }}
        >
            <div className="dropdown-arrow"></div>

            <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--color-border)', fontWeight: '600', color: 'var(--color-text-main)' }}>
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
                            backgroundColor: notif.read ? 'transparent' : 'rgba(68, 87, 109, 0.05)',
                            transition: 'background-color 0.2s',
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-background)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = notif.read ? 'transparent' : 'rgba(68, 87, 109, 0.05)'}
                        >
                            <div style={{ fontWeight: '600', marginBottom: '0.2rem', color: 'var(--color-primary)' }}>{notif.title}</div>
                            <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', lineHeight: '1.4' }}>{notif.message}</div>
                            <div style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', marginTop: '0.4rem', textAlign: 'right' }}>{notif.time}</div>
                        </div>
                    ))
                ) : (
                    <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-text-muted)' }}>
                        No new notifications
                    </div>
                )}
            </div>

            <div style={{ padding: '0.75rem', textAlign: 'center', borderTop: '1px solid var(--color-border)' }}>
                <button style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-primary)',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                }}>
                    Mark all as read
                </button>
            </div>
        </div>
    );
};

export default NotificationPopup;
