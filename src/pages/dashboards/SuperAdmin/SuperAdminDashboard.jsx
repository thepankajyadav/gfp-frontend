import React from 'react';
import KPICards from './components/KPICards';
import SubscriptionsChart from './components/SubscriptionsChart';
import WeeklySalesChart from './components/WeeklySalesChart';
import SubscriptionReportChart from './components/SubscriptionReportChart';
import UserDistributionChart from './components/UserDistributionChart';
import ViolationsAlerts from './components/ViolationsAlerts';
import RecentActivities from './components/RecentActivities';
import SystemHealth from './components/SystemHealth';
import {
    kpiData,
    subscriptionData,
    userDistributionData,
    violationsData,
    recentActivities,
    systemHealthData,
    weeklySalesData,
    subscriptionReportData
} from '../../../data/superAdminData';

const SuperAdminDashboard = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ marginBottom: '0.5rem' }}>
                <h2 style={{ color: 'var(--color-primary)' }}>Super Admin Dashboard</h2>
                <p style={{ color: 'var(--color-text-muted)' }}>Overview of system performance and activities.</p>
            </div>

            {/* 1. KPI Cards */}
            <KPICards data={kpiData} />

            {/* 2. Primary Charts Row: Weekly Sales & Subscription Report */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <WeeklySalesChart data={weeklySalesData} />
                <SubscriptionReportChart data={subscriptionReportData} />
            </div>

            {/* 3. Secondary Charts Row: Active Subscriptions & User Distribution */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <SubscriptionsChart data={subscriptionData} />
                <UserDistributionChart data={userDistributionData} />
            </div>

            {/* 4. Detailed Sections Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <ViolationsAlerts data={violationsData} />
                <RecentActivities data={recentActivities} />
                <SystemHealth data={systemHealthData} />
            </div>
        </div>
    );
};

export default SuperAdminDashboard;
