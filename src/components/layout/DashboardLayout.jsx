import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
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
    ShoppingBag
} from 'lucide-react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
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
            { id: 'settings', label: 'Farm Settings', icon: Settings, path: '/dashboard/settings' },
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
            { id: 'settings', label: 'Farm Settings', icon: Settings, path: '/dashboard/settings' },
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
            { id: 'settings', label: 'Farm Settings', icon: Settings, path: '/dashboard/settings' },
        ],
        'Employee': [
            { id: 'feed', label: 'Feed', icon: ShoppingBag, path: '/dashboard/feed' },
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

const DashboardLayout = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    // State
    const [collapsed, setCollapsed] = useState(false); // Default expanded
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Role Logic
    const userRole = user?.role || 'Customer';
    const roleDashboardPath = {
        'Customer': '/dashboard/customer',
        'Butcher': '/dashboard/butcher',
        'Farm Owner': '/dashboard/farm-owner',
        'Trader': '/dashboard/trader',
        'Super Admin': '/dashboard/super-admin',
    }[userRole] || '/dashboard/customer';

    const globalMenuWithDynamicDashboard = MENU_ITEMS.global.map(item =>
        item.id === 'dashboard' ? { ...item, path: roleDashboardPath } : item
    );

    const roleMenu = MENU_ITEMS.roles[userRole] || [];
    const allMenuItems = [...globalMenuWithDynamicDashboard, ...roleMenu];

    const handleSignOut = () => {
        logout();
        navigate('/signin');
    };

    const handleScroll = (e) => {
        if (e.target.scrollTop > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const handleGlobalToggle = () => {
        if (window.innerWidth < 768) {
            setMobileOpen(!mobileOpen);
        } else {
            setCollapsed(!collapsed);
        }
    };

    return (
        <div className="dashboard-layout">
            <Sidebar
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                menuItems={allMenuItems}
                user={user}
                userRole={userRole}
                onSignOut={handleSignOut}
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
            />

            <main className="main-content" onScroll={handleScroll}>
                <TopBar
                    user={user}
                    userRole={userRole}
                    toggleSidebar={handleGlobalToggle}
                    scrolled={scrolled}
                    onSignOut={handleSignOut}
                    collapsed={collapsed}
                />

                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
