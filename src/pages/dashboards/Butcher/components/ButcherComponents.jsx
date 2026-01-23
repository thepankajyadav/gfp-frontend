import React from 'react';
import Card from '../../../../components/ui/Card';

export const ProcessingKPIs = ({ data }) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
        {data.map((item, index) => (
            <Card key={index}>
                <h4 style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{item.label}</h4>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: '0.5rem 0' }}>{item.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{item.sub}</div>
            </Card>
        ))}
    </div>
);

export const SlaughterSchedule = ({ data }) => (
    <Card>
        <h3>Slaughter Schedule</h3>
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {data.map((slot) => (
                <div key={slot.id} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '0.75rem', borderBottom: '1px solid var(--color-border)'
                }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <span style={{ fontWeight: 'bold', color: 'var(--color-primary)', minWidth: '70px' }}>{slot.time}</span>
                        <div>
                            <div style={{ fontWeight: '500' }}>{slot.batch}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{slot.quantity}</div>
                        </div>
                    </div>
                    <span style={{
                        fontSize: '0.8rem', padding: '0.2rem 0.6rem', borderRadius: '1rem',
                        backgroundColor: slot.status === 'Completed' ? 'green' : slot.status === 'Processing' ? 'orange' : 'grey',
                        color: 'white'
                    }}>
                        {slot.status}
                    </span>
                </div>
            ))}
        </div>
    </Card>
);

export const MeatInventory = ({ data }) => (
    <Card>
        <h3>Inventory Snapshot</h3>
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {data.map((item, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
                    <span>{item.type}</span>
                    <div>
                        <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>{item.stock}</span>
                        <span style={{ color: item.status === 'Low' ? 'red' : item.status === 'High' ? 'blue' : 'green', fontSize: '0.8rem' }}>
                            {item.status}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    </Card>
);

export const ComplianceAlerts = ({ data }) => (
    <Card style={{ borderLeft: '4px solid red' }}>
        <h3>Compliance Alerts</h3>
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {data.map((alert) => (
                <div key={alert.id} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'red' }}>⚠</span>
                    <div>
                        <div style={{ fontWeight: '500' }}>{alert.type}</div>
                        <div style={{ fontSize: '0.9rem' }}>{alert.message}</div>
                    </div>
                </div>
            ))}
        </div>
    </Card>
);

export const ButcherActivities = ({ data }) => (
    <Card>
        <h3>Recent Activities</h3>
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {data.map((activity) => (
                <div key={activity.id} style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--color-text-muted)', minWidth: '60px' }}>{activity.time}</span>
                    <div>
                        <span style={{ fontWeight: '500', marginRight: '0.5rem' }}>{activity.action}</span>
                        <span style={{ color: 'var(--color-text-muted)' }}>{activity.detail}</span>
                    </div>
                </div>
            ))}
        </div>
    </Card>
);
