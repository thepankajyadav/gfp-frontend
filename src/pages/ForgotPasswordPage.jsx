import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Auth.css';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <Card className="auth-card">
                    <div className="auth-header">
                        <h1 className="auth-title">Reset Password</h1>
                        <p className="auth-subtitle">Enter your email to receive reset instructions</p>
                    </div>

                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="auth-form">
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-input"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                {loading ? 'Sending...' : 'Send Reset Link'}
                            </Button>
                        </form>
                    ) : (
                        <div className="auth-form" style={{ textAlign: 'center' }}>
                            <div style={{ padding: '1rem', backgroundColor: 'var(--color-primary-light)', borderRadius: 'var(--radius-md)', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>
                                <p>✅ Check your email!</p>
                                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>We have sent password reset instructions to <strong>{email}</strong></p>
                            </div>
                        </div>
                    )}

                    <div className="auth-footer">
                        <p>Remember your password? <Link to="/signin" className="auth-link">Back to SIGN IN</Link></p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
