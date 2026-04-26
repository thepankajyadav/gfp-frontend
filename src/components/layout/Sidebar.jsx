import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight, LogOut, User, Lock } from 'lucide-react';
import './Dashboard.css';

const SidebarItem = ({ item, collapsed, onItemClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isActive = item.path
        ? location.pathname === item.path || location.pathname.startsWith(`${item.path}/`)
        : false;

    const handleClick = () => {
        if (hasSubmenu) {
            setIsOpen(!isOpen);
        } else if (item.path) {
            navigate(item.path);
            if (onItemClick) onItemClick();
        }
    };

    return (
        <div className="menu-container">
            <div
                className={`menu-item ${isOpen || isActive ? 'active' : ''}`}
                onClick={handleClick}
                title={collapsed ? item.label : ''}
            >
                <div className="menu-icon">
                    <item.icon size={20} />
                </div>

                {!collapsed && (
                    <>
                        <span className="menu-text">{item.label}</span>
                        {hasSubmenu && (
                            <span className="chevron-icon">
                                {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                            </span>
                        )}
                    </>
                )}
            </div>

            {hasSubmenu && isOpen && !collapsed && (
                <div className="submenu">
                    {item.submenu.map((sub, idx) => (
                        <div key={idx} className="menu-item submenu-item" onClick={(e) => {
                            e.stopPropagation();
                            // Handle submenu click logic (nav?)
                            if (onItemClick) onItemClick();
                        }}>
                            <span>{sub}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const UserProfile = ({ userRole, onSignOut, collapsed, onItemClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const popupRef = useRef(null);

    useEffect(() => {
        if (!isOpen) {
            return undefined;
        }

        const handleOutsideClick = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [isOpen]);

    const handleNavigation = (path) => {
        navigate(path);
        setIsOpen(false);
        if (onItemClick) onItemClick();
    };

    if (collapsed) {
        return (
            <div className="user-profile collapsed-profile" ref={popupRef}>
                <div className="profile-pic" onClick={() => setIsOpen(!isOpen)}>
                    {userRole ? userRole.charAt(0).toUpperCase() : 'U'}
                </div>
                {isOpen && (
                    <div className="profile-popup">
                        <div className="popup-item" onClick={() => handleNavigation('/dashboard/profile')}>
                            <User size={16} /> Profile
                        </div>
                        <div className="popup-item" onClick={() => handleNavigation('/dashboard/change-password')}>
                            <Lock size={16} /> Change Password
                        </div>
                        <div className="popup-item upgrade" onClick={() => handleNavigation('/dashboard/settings')}>
                            Upgrade
                        </div>
                        <div className="popup-item danger" onClick={() => { onSignOut(); if (onItemClick) onItemClick(); }}>
                            <LogOut size={16} /> SIGN OUT
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="user-profile" ref={popupRef}>
            <div className="profile-trigger" onClick={() => setIsOpen(!isOpen)}>
                <div className="profile-pic">
                    {userRole ? userRole.charAt(0).toUpperCase() : 'U'}
                </div>
                <div className="profile-info">
                    <div className="profile-name">{userRole}</div>
                    <div className="profile-role">Free Plan</div>
                </div>
                {/* Upgrade logic could go here */}
            </div>

            {isOpen && (
                <div className="profile-popup">
                    <div className="popup-item" onClick={() => handleNavigation('/dashboard/profile')}>
                        <User size={16} /> Profile
                    </div>
                    <div className="popup-item" onClick={() => handleNavigation('/dashboard/change-password')}>
                        <Lock size={16} /> Change Password
                    </div>
                    <div className="popup-item upgrade" onClick={() => handleNavigation('/dashboard/settings')}>
                        Upgrade
                    </div>
                    <div className="popup-item danger" onClick={() => { onSignOut(); if (onItemClick) onItemClick(); }}>
                        <LogOut size={16} /> SIGN OUT
                    </div>
                </div>
            )}
        </div>
    );
};

const Sidebar = ({
    collapsed,
    menuItems,
    userRole,
    onSignOut,
    mobileOpen,
    setMobileOpen
}) => {

    // Helper to close sidebar on mobile when an item is clicked
    const handleMobileItemClick = () => {
        if (window.innerWidth < 768) {
            setMobileOpen(false);
        }
    };

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`sidebar-overlay ${mobileOpen ? 'open' : ''}`}
                onClick={() => setMobileOpen(false)}
            />

            <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
                <div className="sidebar-header">
                    {!collapsed && <div className="logo-area">GoatFarmPRO</div>}
                    {/* Removed Hamburger from here as requested */}
                </div>

                <div className="sidebar-content">
                    <div className="menu-group">
                        {menuItems.map(item => (
                            <SidebarItem
                                key={item.id}
                                item={item}
                                collapsed={collapsed}
                                onItemClick={handleMobileItemClick}
                            />
                        ))}
                    </div>
                </div>

                <UserProfile
                    userRole={userRole}
                    onSignOut={onSignOut}
                    collapsed={collapsed}
                    onItemClick={handleMobileItemClick}
                />
            </aside>
        </>
    );
};

export default Sidebar;
