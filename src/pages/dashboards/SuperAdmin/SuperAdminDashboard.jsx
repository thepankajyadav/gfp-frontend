import React from 'react';
import KPICards from './components/KPICards';
import SubscriptionsChart from './components/SubscriptionsChart';
import UserDistributionChart from './components/UserDistributionChart';
import ViolationsAlerts from './components/ViolationsAlerts';
import RecentActivities from './components/RecentActivities';
import SystemHealth from './components/SystemHealth';
import { kpiData, subscriptionData, userDistributionData, violationsData, recentActivities, systemHealthData } from '../../../data/superAdminData';

const SuperAdminDashboard = () => {
    return (
        <div>
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Super Admin Dashboard</h2>
                <p style={{ color: 'var(--color-text-muted)' }}>Overview of system performance and activities.</p>
            </div>

            {/* 1. KPI Cards */}
            <KPICards data={kpiData} />

            {/* 2. Charts Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <SubscriptionsChart data={subscriptionData} />
                <UserDistributionChart data={userDistributionData} />
            </div>

            {/* 3. Detailed Sections Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <ViolationsAlerts data={violationsData} />
                <RecentActivities data={recentActivities} />
                <SystemHealth data={systemHealthData} />
            </div>
        </div>
    );
};

export default SuperAdminDashboard;
