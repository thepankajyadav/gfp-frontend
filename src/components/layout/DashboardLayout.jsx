import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Icons from '../../components/ui/Icons';
import {
    LayoutDashboard,
    PawPrint,
    Dna,
    Pill,
    Syringe,
    Users,
    Heart,
    DollarSign,
    FileText,
    MapPin,
    Layers,
    Activity,
    Weight,
    Settings,
    Milk,
    Search,
    ShoppingCart,
    Briefcase,
    TrendingUp,
    ShoppingBag,
    Menu,
    X,
    ChevronDown,
    ChevronRight,
    LogOut,
    User,
    Lock
} from 'lucide-react';
import './Dashboard.css';

// Menu Configuration
const MENU_ITEMS = {
    global: [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
        { id: 'animal', label: 'Animal', icon: Icons, path: '/dashboard/animals' },
        { id: 'breed', label: 'Breed', icon: Dna, path: '/dashboard/breed' },
    ],
    roles: {
        'Super Admin': [
            { id: 'locations', label: 'Locations', icon: MapPin, path: '/dashboard/locations' },
            { id: 'batches', label: 'Groups/Batches', icon: Layers, path: '/dashboard/batches' },
            { id: 'medicine', label: 'Medicine', icon: Pill, path: '/dashboard/medicine' },
            { id: 'vaccines', label: 'Vaccines', icon: Syringe, path: '/dashboard/vaccines' },
            { id: 'breeding', label: 'Breeding', icon: Activity, path: '/dashboard/breeding' },
            { id: 'weight', label: 'Weight', icon: Weight, path: '/dashboard/weight' },
            { id: 'employee', label: 'Employee', icon: Users, path: '/dashboard/employee' },
            { id: 'matings', label: 'Matings', icon: Heart, path: '/dashboard/matings' },
            { id: 'financials', label: 'Financials', icon: DollarSign, path: '/dashboard/financials' },
            { id: 'milk', label: 'Milk Records', icon: Milk, path: '/dashboard/milk' },
            {
                id: 'reports',
                label: 'Reports',
                icon: FileText,
                submenu: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']
            },
            { id: 'settings', label: 'Farm Settings', icon: Settings },
        ],
        'Farm Owner': [
            { id: 'locations', label: 'Locations', icon: MapPin, path: '/dashboard/locations' },
            { id: 'batches', label: 'Groups/Batches', icon: Layers, path: '/dashboard/batches' },
            { id: 'medicine', label: 'Medicine', icon: Pill, path: '/dashboard/medicine' },
            { id: 'vaccines', label: 'Vaccines', icon: Syringe, path: '/dashboard/vaccines' },
            { id: 'breeding', label: 'Breeding', icon: Activity, path: '/dashboard/breeding' },
            { id: 'weight', label: 'Weight', icon: Weight, path: '/dashboard/weight' },
            { id: 'employee', label: 'Employee', icon: Users, path: '/dashboard/employee' },
            { id: 'matings', label: 'Matings', icon: Heart, path: '/dashboard/matings' },
            { id: 'financials', label: 'Financials', icon: DollarSign, path: '/dashboard/financials' },
            { id: 'milk', label: 'Milk Records', icon: Milk, path: '/dashboard/milk' },
            {
                id: 'reports',
                label: 'Reports',
                icon: FileText,
                submenu: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']
            },
            { id: 'settings', label: 'Farm Settings', icon: Settings },
        ],
        'Trader': [
            { id: 'locations', label: 'Locations', icon: MapPin, path: '/dashboard/locations' },
            { id: 'batches', label: 'Groups/Batches', icon: Layers, path: '/dashboard/batches' },
            { id: 'weight', label: 'Weight', icon: Weight, path: '/dashboard/weight' },
            { id: 'medicine', label: 'Medicine', icon: Pill, path: '/dashboard/medicine' },
            { id: 'vaccines', label: 'Vaccines', icon: Syringe, path: '/dashboard/vaccines' },
            { id: 'employee', label: 'Employee', icon: Users, path: '/dashboard/employee' },
            {
                id: 'reports',
                label: 'Reports',
                icon: FileText,
                submenu: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']
            },
            { id: 'milk', label: 'Milk Records', icon: Milk, path: '/dashboard/milk' },
            { id: 'settings', label: 'Farm Settings', icon: Settings },
        ],
        'Employee': [
            { id: 'feed', label: 'Feed', icon: ShoppingBag, path: '/dashboard/feed' }, // Using Bag as placeholder for Feed
            { id: 'medicine', label: 'Medicine', icon: Pill, path: '/dashboard/medicine' },
            { id: 'vaccine', label: 'Vaccine', icon: Syringe, path: '/dashboard/vaccines' },
        ],
        'Butcher': [
            { id: 'purchased', label: 'Purchased', icon: ShoppingBag, path: '/dashboard/purchased' },
            { id: 'sold', label: 'Sold', icon: TrendingUp, path: '/dashboard/sold' },
            {
                id: 'reports',
                label: 'Reports',
                icon: FileText,
                submenu: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']
            },
        ],
        'Customer': [
            { id: 'search', label: 'Search Farm', icon: Search, path: '/dashboard/search' },
            { id: 'order', label: 'Order', icon: FileText, path: '/dashboard/order' },
            { id: 'cart', label: 'Cart', icon: ShoppingCart, path: '/dashboard/cart' },
        ]
    }
};

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
                style={{ cursor: item.path || hasSubmenu ? 'pointer' : 'default' }}
            >
                <item.icon size={20} />
                <span className="menu-text">{item.label}</span>
                {hasSubmenu && !collapsed && (
                    <span className="chevron-icon" style={{ marginLeft: 'auto' }}>
                        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    </span>
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

const UserProfile = ({ user, userRole, onSignOut, isMobile }) => {
    const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleNavigation = (path) => {
        navigate(path);
        setIsOpen(false);
    };

    return (
        <div
            className="user-profile"
            ref={popupRef}
            style={isMobile ? { borderTop: '1px solid var(--color-border)', marginTop: 'auto', position: 'relative' } : undefined}
        >
            <div
                className="profile-trigger"
                onClick={() => setIsOpen(!isOpen)}
                style={isMobile ? { padding: 'var(--spacing-md) 0' } : undefined}
            >
                <div className="profile-pic">
                    {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <div className="profile-info">
                    <div className="profile-name">You</div>
                    <div className="profile-role">{userRole}</div>
                </div>
            </div>

            {isOpen && (
                <div
                    className="profile-popup"
                    style={isMobile ? { left: '0', right: '0', bottom: '100%', width: 'auto', marginBottom: '1rem' } : undefined}
                >
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

const DashboardLayout = () => {
    const { user, logout } = useAuth();
    const [collapsed, setCollapsed] = useState(false); // Default expanded
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Mapping for specific internal role names to menu keys if necessary
    // Our AuthContext uses role names like "Farm Owner" which matches keys.
    const userRole = user?.role || 'Customer';

    // Map role to dashboard path
    const roleDashboardPath = {
        'Customer': '/dashboard/customer',
        'Butcher': '/dashboard/butcher',
        'Farm Owner': '/dashboard/farm-owner',
        'Trader': '/dashboard/trader',
        'Super Admin': '/dashboard/super-admin',
    }[userRole] || '/dashboard/customer';

    // Update dashboard menu item path dynamically
    const globalMenuWithDynamicDashboard = MENU_ITEMS.global.map(item =>
        item.id === 'dashboard' ? { ...item, path: roleDashboardPath } : item
    );

    const roleMenu = MENU_ITEMS.roles[userRole] || [];
    const allMenuItems = [...globalMenuWithDynamicDashboard, ...roleMenu];

    const toggleSidebar = () => setCollapsed(!collapsed);

    const handleSignOut = () => {
        logout();
        navigate('/signin');
    };

    return (
        <div className="dashboard-layout">
            {/* Mobile Header */}
            <header className="mobile-header">
                <div className="logo-area">GoatFarmPRO</div>
                <button className="toggle-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="menu-group">
                    {allMenuItems.map(item => (
                        <SidebarItem key={item.id} item={item} collapsed={false} />
                    ))}
                </div>
                <UserProfile user={user} userRole={userRole} onSignOut={handleSignOut} isMobile={true} />
            </div>

            <div className={`sidebar ${collapsed ? 'collapsed' : 'expanded'}`}>
                <div className="sidebar-header">
                    <div className="logo-area">
                        GoatFarmPRO
                    </div>
                    <button className="toggle-btn" onClick={toggleSidebar}>
                        {collapsed ? <Menu size={20} /> : <X size={20} />}
                    </button>
                </div>

                <div className="sidebar-content">
                    <div className="menu-group">
                        {allMenuItems.map(item => (
                            <SidebarItem key={item.id} item={item} collapsed={collapsed} />
                        ))}
                    </div>
                </div>

                <UserProfile user={user} userRole={userRole} onSignOut={handleSignOut} isMobile={false} />
            </div>

            <main className="main-content">
                {/* 
                    This Outlet will render the child routes (the specific dashboard pages).
                    Ensure Route logic wraps these pages in this Layout.
                */}
                <Outlet />
            </main>

            {/* Mobile Overlay */}
            {!collapsed && (
                <div
                    className="overlay d-md-none" // Bootstrap classes or custom logic needed for mobile hide
                    style={{ display: 'none' /* Handled by media query in CSS */ }}
                    onClick={() => setCollapsed(true)}
                ></div>
            )}
        </div>
    );
};

export default DashboardLayout;
