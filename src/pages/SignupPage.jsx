import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Auth.css';

const SignupPage = () => {
    const { role } = useParams();
    const navigate = useNavigate();
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        businessName: '', // Only for Farm Owner & Trader
        gst: '' // Only for Trader (optional)
    });

    const getRoleName = (roleId) => {
        switch (roleId) {
            case 'customer': return 'Customer';
            case 'butcher': return 'Butcher';
            case 'farm_owner': return 'Farm Owner';
            case 'trader': return 'Trader';
            default: return 'User';
        }
    };

    const isBusinessRole = role === 'farm_owner' || role === 'trader';
    const roleName = getRoleName(role);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate cleanup and validation
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match");
            setLoading(false);
            return;
        }

        setTimeout(() => {
            // Create user object
            const newUser = {
                name: formData.fullName,
                email: formData.email,
                role: roleName,
                phone: formData.phone
            };

            // In a real app, we would register then redirect to login or auto-login
            // Here we auto-login
            // Redirect to OTP verification
            navigate('/verify-otp', { state: { user: newUser } });

            // Redirect based on role
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <Card className="auth-card">
                    <div className="auth-header">
                        <h1 className="auth-title">Create Account</h1>
                        <p className="auth-subtitle">Sign up as a <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{roleName}</span></p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                className="form-input"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {isBusinessRole && (
                            <div className="form-group">
                                <label htmlFor="businessName">Business/Farm Name</label>
                                <input
                                    type="text"
                                    id="businessName"
                                    name="businessName"
                                    className="form-input"
                                    value={formData.businessName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="form-input"
                                value={formData.phone}
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
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="form-input"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            fullWidth
                            size="lg"
                            disabled={loading}
                        >
                            {loading ? 'Creating Account...' : 'Sign Up'}
                        </Button>
                    </form>

                    <div className="auth-footer">
                        <p>Already have an account? <Link to="/signin" className="auth-link">SIGN IN</Link></p>
                        <div style={{ marginTop: '0.5rem' }}>
                            <Link to="/role-selection" style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Change Role</Link>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default SignupPage;
