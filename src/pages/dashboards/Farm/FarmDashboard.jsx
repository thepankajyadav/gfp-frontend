import React from 'react';
import {
    FarmKPIs,
    AnimalStatusChart,
    HealthAlerts,
    EmployeeSnapshot,
    InventorySnapshot,
    SubscriptionCard,
    RecentActivities
} from './components/FarmComponents';
import {
    farmKpiData,
    animalStatusData,
    healthAlerts,
    employeeSnapshot,
    inventorySnapshot,
    subscriptionStatus,
    recentFarmActivities
} from '../../../data/farmData';

const FarmDashboard = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ marginBottom: '0.5rem' }}>
                <h2 style={{ color: 'var(--color-primary)' }}>Farm Dashboard</h2>
            </div>

            {/* 1. Animal KPIs */}
            <FarmKPIs data={farmKpiData} />

            {/* 2. Animal Status Chart */}
            <AnimalStatusChart data={animalStatusData} />

            {/* 3. Health & Vaccination Alerts */}
            <HealthAlerts data={healthAlerts} />

            {/* 4. Employee & Inventory Snapshot (2 columns) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <EmployeeSnapshot data={employeeSnapshot} />
                <InventorySnapshot data={inventorySnapshot} />
            </div>

            {/* 5. Recent Activities */}
            <RecentActivities data={recentFarmActivities} />

            {/* 6. Subscription Status */}
            <SubscriptionCard data={subscriptionStatus} />
        </div>
    );
};

export default FarmDashboard;
