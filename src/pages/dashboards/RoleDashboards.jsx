import React from 'react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const DashboardHeader = ({ title, roleColor }) => (
    <div style={{ marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '1rem' }}>
        <h2 style={{ color: roleColor }}>{title}</h2>
    </div>
);

// Placeholder for Customer Dashboard until implemented fully
export const CustomerDashboard = () => (
    <div>
        <DashboardHeader title="Customer Dashboard" roleColor="var(--color-role-customer)" />
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Card>
                <h3>Find Goats Nearby</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Search for verified farms within 150km radius.</p>
                <Button variant="primary" style={{ marginTop: '1rem', backgroundColor: 'var(--color-role-customer)' }}>Start Search</Button>
            </Card>
            <Card>
                <h3>My Orders</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Track your active orders and purchase history.</p>
            </Card>
        </div>
    </div>
);

export { default as ButcherDashboard } from './Butcher/ButcherDashboard';
export { default as SuperAdminDashboard } from './SuperAdmin/SuperAdminDashboard';
export { default as FarmDashboard } from './Farm/FarmDashboard';
export { default as TraderDashboard } from './Trader/TraderDashboard';
export { default as EmployeeDashboard } from './Employee/EmployeeDashboard';
