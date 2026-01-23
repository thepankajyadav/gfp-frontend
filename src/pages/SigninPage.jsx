import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Auth.css';

const SigninPage = () => {
    const [formData, setFormData] = useState({
        identifier: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        // Simulate API call
        setTimeout(() => {
            // Default Credentials Logic
            // Password must be 'Dedust!23' for these specific accounts
            if (formData.password !== 'Dedust!23') {
                alert('Invalid credentials');
                setLoading(false);
                return;
            }

            let role = 'Customer'; // Default
            let subRole = null;
            const email = formData.identifier.toLowerCase();

            const userMap = {
                'superadmin@goatfarmpro.com': { role: 'Super Admin' },
                'farm@goatfarmpro.com': { role: 'Farm Owner' },
                'trader@goatfarmpro.com': { role: 'Trader' },
                'butcher@goatfarmpro.com': { role: 'Butcher' },
                'supervisor@goatfarmpro.com': { role: 'Employee', subRole: 'supervisor' },
                'worker@goatfarmpro.com': { role: 'Employee', subRole: 'worker' },
                'guard@goatfarmpro.com': { role: 'Employee', subRole: 'guard' },
                'customer@goatfarmpro.com': { role: 'Customer' }
            };

            const matchedUser = userMap[email];

            if (matchedUser) {
                role = matchedUser.role;
                subRole = matchedUser.subRole;
            } else {
                // strict check: if not in list, fail or just default? 
                // "create default login... for user... with default password" implies strictness or at least priority.
                // If the user types random email + Dedust!23, we could let them in as Customer or fail. 
                // I'll stick to failing or just basic Customer if unknown for now to allow generic testing if needed, 
                // BUT given the prompt, ensuring these specific ones work is key. 
                // Let's allow generic login as Customer for other emails if password matches, 
                // OR strict. I'll stick to the map mostly but default to Customer.
            }

            const mockUser = {
                name: email.split('@')[0],
                email: formData.identifier,
                role: role,
                subRole: subRole
            };

            // navigate to OTP verification instead of direct login
            navigate('/verify-otp', { state: { user: mockUser } });
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <Card className="auth-card">
                    <div className="auth-header">
                        <h1 className="auth-title">Welcome Back</h1>
                        <p className="auth-subtitle">Sign in to continue to GoatFarmPRO</p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                            <label htmlFor="identifier">Email or Phone</label>
                            <input
                                type="text"
                                id="identifier"
                                name="identifier"
                                className="form-input"
                                placeholder="Enter your email or phone"
                                value={formData.identifier}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-input"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <div style={{ textAlign: 'right', marginTop: '0.25rem' }}>
                                <Link to="/forgot-password" style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: '500' }}>
                                    Forgot password?
                                </Link>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            fullWidth
                            size="lg"
                            disabled={loading}
                        >
                            {loading ? 'Signing in...' : 'SIGN IN'}
                        </Button>
                    </form>

                    <div className="auth-footer">
                        <p>Don't have an account? <Link to="/role-selection" className="auth-link">SIGN UP</Link></p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default SigninPage;
