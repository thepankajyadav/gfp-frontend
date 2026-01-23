import React from 'react';
import {
    ProcessingKPIs,
    SlaughterSchedule,
    MeatInventory,
    ComplianceAlerts,
    ButcherActivities
} from './components/ButcherComponents';
import {
    butcherKpiData,
    slaughterScheduleData,
    meatInventoryData,
    complianceAlerts,
    butcherActivities
} from '../../../data/butcherData';

const ButcherDashboard = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ marginBottom: '0.5rem' }}>
                <h2 style={{ color: 'var(--color-role-butcher)' }}>Butcher Dashboard</h2>
            </div>

            {/* 1. Processing KPIs */}
            <ProcessingKPIs data={butcherKpiData} />

            {/* 2. Schedule */}
            <SlaughterSchedule data={slaughterScheduleData} />

            {/* 3. Inventory & Compliance (2 columns) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <MeatInventory data={meatInventoryData} />
                <ComplianceAlerts data={complianceAlerts} />
            </div>

            {/* 4. Recent Activities */}
            <ButcherActivities data={butcherActivities} />
        </div>
    );
};

export default ButcherDashboard;
