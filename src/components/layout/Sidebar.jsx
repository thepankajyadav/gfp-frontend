import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, ChevronDown, ChevronRight, X, LogOut, User, Lock, Settings } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './Dashboard.css'; // We'll keep using Dashboard.css for now or refactor later

const SidebarItem = ({ item, collapsed }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const hasSubmenu = item.submenu && item.submenu.length > 0;

    const toggleSubmenu = () => setIsOpen(!isOpen);

    const handleClick = () => {
        if (hasSubmenu) {
            toggleSubmenu();
        } else if (item.path) {
            navigate(item.path);
        }
    };

    return (
        <div className="menu-container">
            <div
                className={`menu-item ${isOpen ? 'active' : ''}`}
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
                        <div key={idx} className="menu-item submenu-item">
                            <span>{sub}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const UserProfile = ({ user, userRole, onSignOut, collapsed }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        setIsOpen(false);
    };

    if (collapsed) {
        return (
            <div className="user-profile collapsed-profile" onClick={() => setIsOpen(!isOpen)}>
                <div className="profile-pic">
                    {userRole ? userRole.charAt(0).toUpperCase() : 'U'}
                </div>
            </div>
        )
    }

    return (
        <div className="user-profile">
            <div className="profile-trigger" onClick={() => setIsOpen(!isOpen)}>
                <div className="profile-pic">
                    {userRole ? userRole.charAt(0).toUpperCase() : 'U'}
                </div>
                <div className="profile-info">
                    <div className="profile-name">{userRole}</div>
                    <div className="profile-role">Free Plan</div>
                </div>
                <div className="upgrade-btn" onClick={(e) => {
                    e.stopPropagation();
                    navigate('/dashboard/settings');
                }}>
                    Upgrade
                </div>
            </div>

            {isOpen && (
                <div className="profile-popup">
                    <div className="popup-item" onClick={() => handleNavigation('/dashboard/profile')}>
                        <User size={16} /> Profile
                    </div>
                    <div className="popup-item" onClick={() => handleNavigation('/dashboard/change-password')}>
                        <Lock size={16} /> Change Password
                    </div>
                    <div className="popup-item danger" onClick={onSignOut}>
                        <LogOut size={16} /> SIGN OUT
                    </div>
                </div>
            )}
        </div>
    );
};

const Sidebar = ({
    collapsed,
    setCollapsed,
    menuItems,
    user,
    userRole,
    onSignOut,
    mobileOpen,
    setMobileOpen
}) => {

    // Custom Hamburger Icon with middle bar longer
    const HamburgerIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12" style={{ strokeWidth: 3 }}></line> {/* Emulate longer/thicker or just longer visually if not full width? User said "middle bar is slightly longer". Standard icons are equal. Let's make top/bottom shorter? */}
            {/* Actually user said "middle bar is slightly longer than the top and bottom bars". */}
            {/* Let's try drawing it manually to be safe */}
        </svg>
    );

    const CustomHamburger = () => (
        <div className="custom-hamburger">
            <div className="bar top"></div>
            <div className="bar middle"></div>
            <div className="bar bottom"></div>
        </div>
    );

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
                    <button
                        className="toggle-btn"
                        onClick={() => {
                            if (window.innerWidth < 768) {
                                setMobileOpen(false);
                            } else {
                                setCollapsed(!collapsed);
                            }
                        }}
                    >
                        {/* We use the custom hamburger in the TopBar usually, but here in sidebar it might be a close icon or the same toggle */}
                        {window.innerWidth < 768 ? <X size={20} /> : (collapsed ? <Menu size={20} /> : <CustomHamburger />)}
                    </button>
                </div>

                <div className="sidebar-content">
                    <div className="menu-group">
                        {menuItems.map(item => (
                            <SidebarItem key={item.id} item={item} collapsed={collapsed} />
                        ))}
                    </div>
                </div>

                <UserProfile
                    user={user}
                    userRole={userRole}
                    onSignOut={onSignOut}
                    collapsed={collapsed}
                />
            </aside>
        </>
    );
};

export default Sidebar;
