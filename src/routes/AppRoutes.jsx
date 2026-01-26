import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LandingPage from '../pages/LandingPage';
import SigninPage from '../pages/SigninPage';
import RoleSelectionPage from '../pages/RoleSelectionPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import OtpVerificationPage from '../pages/OtpVerificationPage';
import SignupPage from '../pages/SignupPage';
import DashboardLayout from '../components/layout/DashboardLayout';
import { CustomerDashboard, ButcherDashboard, FarmDashboard, TraderDashboard, SuperAdminDashboard } from '../pages/dashboards/RoleDashboards';
import ProfilePage from '../pages/ProfilePage';
import EditProfilePage from '../pages/EditProfilePage';
import ChangePasswordPage from '../pages/ChangePasswordPage';
import AnimalsPage from '../pages/AnimalsPage';
import BreedPage from '../pages/BreedPage';
import MedicinePage from '../pages/MedicinePage';
import VaccinesPage from '../pages/VaccinesPage';
import EmployeePage from '../pages/EmployeePage';
import BreedingPage from '../pages/BreedingPage';
import LocationPage from '../pages/LocationPage';
import AnimalDetailsPage from '../pages/AnimalDetailsPage';
import ComingSoonPage from '../pages/ComingSoonPage';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { user, isAuthenticated, loading } = useAuth();

    if (loading) return <div>Loading...</div>;
    if (!isAuthenticated) return <Navigate to="/signin" replace />;

    // Simple role check - in production use strictly matched roles
    if (allowedRoles && !allowedRoles.includes(user.role)) {
        // Redirect to their own dashboard if they have a wrong role, or home
        return <Navigate to="/" replace />;
    }

    return children;
};

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/verify-otp" element={<OtpVerificationPage />} />
            <Route path="/role-selection" element={<RoleSelectionPage />} />
            <Route path="/signup/:role" element={<SignupPage />} />

            {/* Protected Dashboards */}
            {/* Protected Dashboard Layout */}
            <Route path="/dashboard" element={
                <ProtectedRoute>
                    <DashboardLayout />
                </ProtectedRoute>
            }>
                <Route path="profile" element={<ProfilePage />} />
                <Route path="edit-profile" element={<EditProfilePage />} />
                <Route path="change-password" element={<ChangePasswordPage />} />
                <Route path="animals" element={<AnimalsPage />} />
                <Route path="animals/:id" element={<AnimalDetailsPage />} />
                <Route path="breed" element={<BreedPage />} />
                <Route path="location" element={<LocationPage />} />
                <Route path="medicine" element={<MedicinePage />} />
                <Route path="vaccines" element={<VaccinesPage />} />
                <Route path="employee" element={<EmployeePage />} />
                <Route path="breeding" element={<BreedingPage />} />
                <Route path="customer" element={
                    <ProtectedRoute allowedRoles={['Customer']}>
                        <CustomerDashboard />
                    </ProtectedRoute>
                } />
                <Route path="butcher" element={
                    <ProtectedRoute allowedRoles={['Butcher']}>
                        <ButcherDashboard />
                    </ProtectedRoute>
                } />
                <Route path="farm-owner" element={
                    <ProtectedRoute allowedRoles={['Farm Owner']}>
                        <FarmDashboard />
                    </ProtectedRoute>
                } />
                <Route path="super-admin" element={
                    <ProtectedRoute allowedRoles={['Super Admin']}>
                        <SuperAdminDashboard />
                    </ProtectedRoute>
                } />
                <Route path="trader" element={
                    <ProtectedRoute allowedRoles={['Trader']}>
                        <TraderDashboard />
                    </ProtectedRoute>
                } />

                {/* Coming Soon Routes */}
                <Route path="batches" element={<ComingSoonPage />} />
                <Route path="weight" element={<ComingSoonPage />} />
                <Route path="matings" element={<ComingSoonPage />} />
                <Route path="financials" element={<ComingSoonPage />} />
                <Route path="milk" element={<ComingSoonPage />} />
                <Route path="reports" element={<ComingSoonPage />} />
                <Route path="settings" element={<ComingSoonPage />} />
                <Route path="feed" element={<ComingSoonPage />} />
                <Route path="purchased" element={<ComingSoonPage />} />
                <Route path="sold" element={<ComingSoonPage />} />
                <Route path="search" element={<ComingSoonPage />} />
                <Route path="order" element={<ComingSoonPage />} />
                <Route path="cart" element={<ComingSoonPage />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;
