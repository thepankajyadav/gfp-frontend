import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Bell, Settings, User, ChevronRight, Menu, LogOut, Lock, X } from 'lucide-react';
import NotificationPopup from './NotificationPopup';

// Mock Notifications
const MOCK_NOTIFICATIONS = [
    { id: 1, title: 'New Order', message: 'Order #1234 received from Customer X', time: '5 min ago', read: false },
    { id: 2, title: 'System Alert', message: 'Database backup completed', time: '1 hr ago', read: false },
    { id: 3, title: 'Compliance', message: 'Veterinary certificate expiring soon', time: '2 hrs ago', read: true },
];

const TopBar = ({ user, userRole, toggleSidebar, scrolled, onSignOut, collapsed }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [showNotifications, setShowNotifications] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    // Generate Breadcrumbs
    const pathnames = location.pathname.split('/').filter((x) => x);

    // Capitalize helper
    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ');

    return (
        <header
            className={`topbar ${scrolled ? 'scrolled' : ''}`}
            style={{
                height: '64px',
                transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 1.5rem',
                position: 'sticky',
                top: 0,
                zIndex: 40,
                backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
                width: '100%', // Full width always
            }}
        >
            {/* Breadcrumbs */}
            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                <div className="breadcrumbs" style={{ display: 'flex', alignItems: 'center' }}>
                    {pathnames.map((value, index) => {
                        const isLast = index === pathnames.length - 1;
                        const name = capitalize(value);
                        return (
                            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                {index > 0 && <ChevronRight size={16} style={{ margin: '0 0.5rem' }} />}
                                <span style={{
                                    color: isLast ? 'var(--color-text-main)' : 'inherit',
                                    fontWeight: isLast ? '600' : 'normal'
                                }}>
                                    {name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Right: Actions & Hamburger */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>

                {/* Notification Bell */}
                <div style={{ position: 'relative' }}>
                    <button
                        onClick={() => {
                            setShowNotifications(!showNotifications);
                            setShowSettings(false);
                            setShowProfile(false);
                        }}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            position: 'relative',
                            padding: '0.5rem',
                            borderRadius: '50%',
                            transition: 'background 0.2s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.05)'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        <Bell size={20} color="var(--color-text-muted)" />
                        {MOCK_NOTIFICATIONS.filter(n => !n.read).length > 0 && (
                            <span style={{
                                position: 'absolute',
                                top: '4px',
                                right: '4px',
                                backgroundColor: '#fa4d56', // Primary Red
                                color: 'white',
                                fontSize: '0.6rem',
                                borderRadius: '50%',
                                width: '14px',
                                height: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '2px solid white'
                            }}>
                                {MOCK_NOTIFICATIONS.filter(n => !n.read).length}
                            </span>
                        )}
                    </button>
                    {showNotifications && (
                        <div className="dropdown-menu">
                            <NotificationPopup
                                notifications={MOCK_NOTIFICATIONS}
                                onClose={() => setShowNotifications(false)}
                            />
                        </div>
                    )}
                </div>

                {/* Settings - HIDDEN ON MOBILE */}
                <div className="d-none d-md-block" style={{ position: 'relative' }}>
                    <button
                        onClick={() => {
                            setShowSettings(!showSettings);
                            setShowNotifications(false);
                            setShowProfile(false);
                        }}
                        style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '0.5rem', borderRadius: '50%' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <Settings size={20} color="var(--color-text-muted)" />
                    </button>
                    {showSettings && (
                        <div className="dropdown-card" style={{
                            position: 'absolute',
                            top: '100%',
                            right: 0,
                            marginTop: '0.5rem',
                            width: '200px',
                            zIndex: 100
                        }}>
                            <div className="dropdown-arrow"></div>
                            <div className="popup-item" onClick={() => navigate('/dashboard/settings')}>
                                <Settings size={16} /> Farm Settings
                            </div>
                        </div>
                    )}
                </div>

                {/* User Icon (Circle) */}
                <div style={{ position: 'relative' }}>
                    <div
                        onClick={() => {
                            setShowProfile(!showProfile);
                            setShowNotifications(false);
                            setShowSettings(false);
                        }}
                        style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--color-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            boxShadow: 'var(--shadow-sm)'
                        }}
                    >
                        {user?.name ? user.name.charAt(0).toUpperCase() : (userRole ? userRole.charAt(0).toUpperCase() : <User size={18} />)}
                    </div>

                    {showProfile && (
                        <div className="dropdown-card" style={{
                            position: 'absolute',
                            top: '100%',
                            right: 0,
                            marginTop: '0.5rem',
                            width: '200px',
                            zIndex: 100
                        }}>
                            <div className="dropdown-arrow"></div>
                            <div className="popup-item" onClick={() => navigate('/dashboard/profile')}>
                                <User size={16} /> Profile
                            </div>
                            <div className="popup-item" onClick={() => navigate('/dashboard/change-password')}>
                                <Lock size={16} /> Change Password
                            </div>
                            <div className="popup-item danger" onClick={onSignOut}>
                                <LogOut size={16} /> Sign Out
                            </div>
                        </div>
                    )}
                </div>

                {/* Unified Hamburger (Top Right) */}
                <button
                    onClick={toggleSidebar}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0.5rem',
                        marginLeft: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-text-main)'
                    }}
                >
                    <Menu size={24} />
                </button>
            </div>
        </header>
    );
};

export default TopBar;
