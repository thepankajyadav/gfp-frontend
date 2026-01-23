import React from 'react';
import {
    TradingKPIs,
    DealsFunnelChart,
    ActiveDealsList,
    FinancialSnapshot,
    TraderAlerts
} from './components/TraderComponents';
import {
    traderKpiData,
    dealsFunnelData,
    activeDealsList,
    financialSnapshot,
    traderAlerts
} from '../../../data/traderData';

const TraderDashboard = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ marginBottom: '0.5rem' }}>
                <h2 style={{ color: 'var(--color-role-trader)' }}>Trader Dashboard</h2>
            </div>

            {/* 1. Trading KPIs */}
            <TradingKPIs data={traderKpiData} />

            {/* 2. Deals Funnel Chart */}
            <DealsFunnelChart data={dealsFunnelData} />

            {/* 3. Active Deals List */}
            <ActiveDealsList data={activeDealsList} />

            {/* 4. Financial Snapshot & Alerts (2 columns) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <FinancialSnapshot data={financialSnapshot} />
                <TraderAlerts data={traderAlerts} />
            </div>
        </div>
    );
};

export default TraderDashboard;
