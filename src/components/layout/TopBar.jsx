import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Bell, Settings, User, ChevronRight, Menu } from 'lucide-react';
import NotificationPopup from './NotificationPopup';

// Mock Notifications
const MOCK_NOTIFICATIONS = [
    { id: 1, title: 'New Order', message: 'Order #1234 received from Customer X', time: '5 min ago', read: false },
    { id: 2, title: 'System Alert', message: 'Database backup completed', time: '1 hr ago', read: false },
    { id: 3, title: 'Compliance', message: 'Veterinary certificate expiring soon', time: '2 hrs ago', read: true },
];

const TopBar = ({ user, userRole, toggleSidebar }) => {
    const location = useLocation();
    const [showNotifications, setShowNotifications] = useState(false);

    // Generate Breadcrumbs
    const pathnames = location.pathname.split('/').filter((x) => x);

    // Capitalize helper
    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ');

    return (
        <header style={{
            height: '64px',
            backgroundColor: 'var(--color-bg-card)',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 1.5rem',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            {/* Breadcrumbs */}
            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleSidebar}
                    style={{ background: 'none', border: 'none', marginRight: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                    className="d-lg-none" // Helper class might be needed or media query style
                >
                    <Menu size={24} color="var(--color-text)" />
                </button>

                {pathnames.map((value, index) => {
                    const isLast = index === pathnames.length - 1;
                    const name = capitalize(value);
                    return (
                        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                            {index > 0 && <ChevronRight size={16} style={{ margin: '0 0.5rem' }} />}
                            <span style={{
                                color: isLast ? 'var(--color-text)' : 'inherit',
                                fontWeight: isLast ? '600' : 'normal'
                            }}>
                                {name}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Right: Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {/* Notification Bell */}
                <div style={{ position: 'relative' }}>
                    <button
                        onClick={() => setShowNotifications(!showNotifications)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative', padding: '0.5rem' }}
                    >
                        <Bell size={20} color="var(--color-text)" />
                        {MOCK_NOTIFICATIONS.filter(n => !n.read).length > 0 && (
                            <span style={{
                                position: 'absolute',
                                top: '0',
                                right: '0',
                                backgroundColor: 'red',
                                color: 'white',
                                fontSize: '0.7rem',
                                borderRadius: '50%',
                                width: '16px',
                                height: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {MOCK_NOTIFICATIONS.filter(n => !n.read).length}
                            </span>
                        )}
                    </button>
                    {showNotifications && (
                        <NotificationPopup
                            notifications={MOCK_NOTIFICATIONS}
                            onClose={() => setShowNotifications(false)}
                        />
                    )}
                </div>

                {/* Settings */}
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}>
                    <Settings size={20} color="var(--color-text)" />
                </button>

                {/* User Icon (Circle) */}
                <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}>
                    {user?.name ? user.name.charAt(0).toUpperCase() : <User size={20} />}
                </div>
            </div>
        </header>
    );
};

export default TopBar;
