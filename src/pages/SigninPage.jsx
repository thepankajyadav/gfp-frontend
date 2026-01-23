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
        setTimeout(() => {
            // Mock login - strictly for demo
            // In real app, we would get role from backend response
            // For now, let's assume if they login they were a customer unless specified otherwise
            // But actually, the requirement says "Post-Login Redirection Logic ... System automatically detects".
            // Since we don't have a backend, I will hardcode a demo logic or just pick a random role/default role.
            // Let's make a mock user for now.

            const mockUser = {
                name: 'Demo User',
                email: formData.identifier,
                role: 'Super Admin' // Defaulting to Customer for generic login
                // role: 'Farm Owner' // Defaulting to Customer for generic login
                // role: 'Trader' 
                // role: 'Butcher' 
                // role: 'Customer'
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
