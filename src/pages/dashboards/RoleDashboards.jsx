import React from 'react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const DashboardHeader = ({ title, roleColor }) => (
    <div style={{ marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '1rem' }}>
        <h2 style={{ color: roleColor }}>{title}</h2>
    </div>
);

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

export const ButcherDashboard = () => (
    <div>
        <DashboardHeader title="Butcher Dashboard" roleColor="var(--color-role-butcher)" />
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Card>
                <h3>Sourcing Hub</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Find livestock ready for immediate sale.</p>
                <Button variant="primary" style={{ marginTop: '1rem', backgroundColor: 'var(--color-role-butcher)' }}>Find Livestock</Button>
            </Card>
            <Card>
                <h3>Festival Planner</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Plan purchases for upcoming festivals.</p>
            </Card>
        </div>
    </div>
);

export const SuperAdminDashboard = () => (
    <div>
        <DashboardHeader title="Super Admin Dashboard" roleColor="var(--color-role-customer)" />
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Card>
                <h3>My Livestock</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Manage your herd, health records, and lifecycle.</p>
                <Button variant="primary" style={{ marginTop: '1rem', backgroundColor: 'var(--color-role-farm)' }}>Manage Herd</Button>
            </Card>
            <Card>
                <h3>Sales Analytics</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>View profit/loss and sales performance.</p>
            </Card>
            <Card>
                <h3>Health Schedule</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Upcoming vaccinations and deworming.</p>
            </Card>
        </div>
    </div>
);

export const FarmDashboard = () => (
    <div>
        <DashboardHeader title="Farm Dashboard" roleColor="var(--color-role-customer)" />
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Card>
                <h3>My Livestock</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Manage your herd, health records, and lifecycle.</p>
                <Button variant="primary" style={{ marginTop: '1rem', backgroundColor: 'var(--color-role-farm)' }}>Manage Herd</Button>
            </Card>
            <Card>
                <h3>Sales Analytics</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>View profit/loss and sales performance.</p>
            </Card>
            <Card>
                <h3>Health Schedule</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Upcoming vaccinations and deworming.</p>
            </Card>
        </div>
    </div>
);

export const TraderDashboard = () => (
    <div>
        <DashboardHeader title="Trader Dashboard" roleColor="var(--color-role-trader)" />
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Card>
                <h3>Trade Market</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Buy and sell across regions.</p>
                <Button variant="primary" style={{ marginTop: '1rem', backgroundColor: 'var(--color-role-trader)' }}>Enter Market</Button>
            </Card>
            <Card>
                <h3>Inventory</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Track current stock and status.</p>
            </Card>
            <Card>
                <h3>My Orders</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Track your active orders and purchase history.</p>
            </Card>
            <Card>
                <h3>My Orders</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Track your active orders and purchase history.</p>
            </Card>
            <Card>
                <h3>My Orders</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Track your active orders and purchase history.</p>
            </Card>
            <Card>
                <h3>My Orders</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Track your active orders and purchase history.</p>
            </Card>
            <Card>
                <h3>My Orders</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Track your active orders and purchase history.</p>
            </Card>
            <Card>
                <h3>My Orders</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Track your active orders and purchase history.</p>
            </Card>
            <Card>
                <h3>My Orders</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Track your active orders and purchase history.</p>
            </Card>
            <Card>
                <h3>My Orders</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Track your active orders and purchase history.</p>
            </Card>
        </div>
    </div>
);
