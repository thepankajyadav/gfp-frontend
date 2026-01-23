import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Utensils, Tractor, TrendingUp } from 'lucide-react';
import Card from '../components/ui/Card';
import './Auth.css';

const roles = [
    {
        id: 'customer',
        name: 'Customer',
        description: 'Buy healthy goats from trusted farms',
        icon: ShoppingBag,
        color: 'var(--color-role-customer)'
    },
    {
        id: 'butcher',
        name: 'Butcher',
        description: 'Smart sourcing for professionals',
        icon: Utensils,
        color: 'var(--color-role-butcher)'
    },
    {
        id: 'farm_owner',
        name: 'Farm Owner',
        description: 'Digitize and grow your farm',
        icon: Tractor,
        color: 'var(--color-role-farm)'
    },
    {
        id: 'trader',
        name: 'Trader',
        description: 'Scale your livestock trading',
        icon: TrendingUp,
        color: 'var(--color-role-trader)'
    }
];

const RoleSelectionPage = () => {
    const navigate = useNavigate();

    const handleRoleSelect = (roleId) => {
        navigate(`/signup/${roleId}`);
    };

    return (
        <div className="auth-page">
            <div className="auth-container" style={{ maxWidth: '800px' }}>
                <div className="auth-header">
                    <h1 className="auth-title">Choose Your Role</h1>
                    <p className="auth-subtitle">Select how you want to use GoatFarmPRO to get started</p>
                </div>

                <div className="role-grid">
                    {roles.map((role) => (
                        <div
                            key={role.id}
                            className="role-card"
                            onClick={() => handleRoleSelect(role.id)}
                        >
                            <div className="role-icon-wrapper" style={{ color: role.color }}>
                                <role.icon size={24} />
                            </div>
                            <div className="role-info">
                                <h3>{role.name}</h3>
                                <p>{role.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="auth-footer" style={{ marginTop: '2rem' }}>
                    <p>Already have an account? <span onClick={() => navigate('/signin')} className="auth-link" style={{ cursor: 'pointer' }}>SIGN IN</span></p>
                </div>
            </div>
        </div>
    );
};

export default RoleSelectionPage;
