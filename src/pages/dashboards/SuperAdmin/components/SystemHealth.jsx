import React from 'react';
import Card from '../../../../components/ui/Card';

const StatusIndicator = ({ label, status, detail }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 0', borderBottom: '1px solid var(--color-border)' }}>
        <div>
            <div style={{ fontWeight: '500' }}>{label}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{detail}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: status === 'Operational' ? 'green' : 'red'
            }}></div>
            <span style={{ fontSize: '0.9rem', color: status === 'Operational' ? 'green' : 'red' }}>{status}</span>
        </div>
    </div>
);

const SystemHealth = ({ data }) => {
    return (
        <Card style={{ height: '100%' }}>
            <h3>System Health</h3>
            <div style={{ marginTop: '0.5rem' }}>
                <StatusIndicator label="API Status" status={data.api.status} detail={`Uptime: ${data.api.uptime}`} />
                <StatusIndicator label="Email Service" status={data.email.status} detail={`Sent today: ${data.email.sent}`} />
                <StatusIndicator label="SMS Gateway" status={data.sms.status} detail={`Sent today: ${data.sms.sent}`} />
            </div>
        </Card>
    );
};

export default SystemHealth;
