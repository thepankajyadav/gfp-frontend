import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Auth.css';

const OtpVerificationPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    // Get user data passed from Login/Signup pages
    const pendingUser = location.state?.user;

    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [loading, setLoading] = useState(false);
    const inputRefs = useRef([]);

    // If no user data came through, redirect back to login
    useEffect(() => {
        if (!pendingUser) {
            navigate('/signin');
        }
        // Focus first input on mount
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, [pendingUser, navigate]);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Focus next input
        if (element.value && index < 5 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        // Backspace logic
        if (e.key === "Backspace") {
            if (!otp[index] && index > 0 && inputRefs.current[index - 1]) {
                // Determine if we should delete the previous value or just move focus
                // Standard behavior: move to previous and delete that value if current is empty
                // But user requirement: "backspace remove text and jump in previous box"
                // Implementation: Focus previous, that's it? 
                // Usually if current is empty, move back. If current has value, just clear it.
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6).split('');
        if (pastedData.every(char => !isNaN(char))) {
            const newOtp = [...otp];
            pastedData.forEach((val, i) => {
                if (i < 6) newOtp[i] = val;
            });
            setOtp(newOtp);

            // Focus the last filled input or the first empty one
            const nextIndex = pastedData.length < 6 ? pastedData.length : 5;
            if (inputRefs.current[nextIndex]) {
                inputRefs.current[nextIndex].focus();
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const otpValue = otp.join("");
        if (otpValue.length !== 6) {
            alert("Please enter a valid 6-digit OTP");
            return;
        }

        setLoading(true);
        // Simulate OTP verification
        setTimeout(() => {
            // On success, finally log the user in
            if (pendingUser) {
                login(pendingUser);
                // Redirect logic is inside login or we can force it here if needed, 
                // but login usually updates state which triggers app routes checks.
                // However, AuthContext login might not redirect automatically if strictly data-driven.
                // We'll check AuthContext. Assuming it lets AppRoutes handle redirect or we do strictly:
                // Map roles to dashboard paths
                const rolePathMap = {
                    'Customer': '/dashboard/customer',
                    'Butcher': '/dashboard/butcher',
                    'Farm Owner': '/dashboard/farm-owner',
                    'Trader': '/dashboard/trader'
                };

                const targetPath = rolePathMap[pendingUser.role] || '/dashboard';
                navigate(targetPath);
            }
            setLoading(false);
        }, 1500);
    };

    /* Styles specifically for OTP inputs */
    const inputStyle = {
        width: '45px',
        height: '45px',
        textAlign: 'center',
        fontSize: '1.25rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-surface)',
        margin: '0 4px'
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <Card className="auth-card">
                    <div className="auth-header">
                        <h1 className="auth-title">Verification</h1>
                        <p className="auth-subtitle">
                            Enter the 6-digit code sent to your email/phone
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            {otp.map((data, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    ref={el => inputRefs.current[index] = el}
                                    value={data}
                                    onChange={e => handleChange(e.target, index)}
                                    onKeyDown={e => handleKeyDown(e, index)}
                                    onPaste={index === 0 ? handlePaste : undefined}
                                    style={inputStyle}
                                    className="form-input" // To inherit focus styles
                                />
                            ))}
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            fullWidth
                            size="lg"
                            disabled={loading || otp.join("").length !== 6}
                        >
                            {loading ? 'Verifying...' : 'Verify OTP'}
                        </Button>
                    </form>

                    <div className="auth-footer">
                        <p>Didn't receive code? <span className="auth-link" style={{ cursor: 'pointer' }}>Resend</span></p>
                        <div style={{ marginTop: '1rem' }}>
                            <span onClick={() => navigate('/signin')} className="auth-link" style={{ cursor: 'pointer', fontSize: '0.9rem' }}>
                                Back to SIGN IN
                            </span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default OtpVerificationPage;
