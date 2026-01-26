import React from 'react';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export const FarmKPIs = ({ data }) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
        {data.map((item, index) => (
            <Card key={index} hoverable={true}>
                <h4 style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{item.label}</h4>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: '0.5rem 0' }}>{item.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{item.sub}</div>
            </Card>
        ))}
    </div>
);

export const AnimalStatusChart = ({ data }) => (
    <Card style={{ height: '300px' }} hoverable={true}>
        <h3>Animal Status</h3>
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                    {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
            </PieChart>
        </ResponsiveContainer>
    </Card>
);

export const HealthAlerts = ({ data }) => (
    <Card hoverable={true}>
        <h3>Health & Vaccination Alerts</h3>
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {data.map((alert) => (
                <div key={alert.id} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '0.75rem', borderRadius: '6px',
                    backgroundColor: alert.severity === 'high' ? 'rgba(255,0,0,0.1)' : 'var(--color-bg-subtle)',
                    borderLeft: `4px solid ${alert.severity === 'high' ? 'red' : 'orange'}`
                }}>
                    <div>
                        <div style={{ fontWeight: '500' }}>{alert.type}</div>
                        <div style={{ fontSize: '0.9rem' }}>{alert.message}</div>
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{alert.date}</span>
                </div>
            ))}
        </div>
    </Card>
);

export const EmployeeSnapshot = ({ data }) => (
    <Card hoverable={true}>
        <h3>Employee Snapshot</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '1rem' }}>
            <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'green' }}>{data.onDuty}</div>
                <div style={{ fontSize: '0.9rem' }}>On Duty</div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'red' }}>{data.absent}</div>
                <div style={{ fontSize: '0.9rem' }}>Absent</div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{data.total}</div>
                <div style={{ fontSize: '0.9rem' }}>Total Staff</div>
            </div>
        </div>
    </Card>
);

export const InventorySnapshot = ({ data }) => (
    <Card hoverable={true}>
        <h3>Inventory Alerts</h3>
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {data.map((item, index) => (
                <div key={index} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '0.5rem', borderBottom: '1px solid var(--color-border)'
                }}>
                    <div>
                        <div style={{ fontWeight: '500' }}>{item.item}</div>
                        <div style={{ fontSize: '0.8rem', color: item.status === 'Low' ? 'red' : 'green' }}>{item.quantity} - {item.status}</div>
                    </div>
                    {item.status === 'Low' && <span style={{ color: 'red', fontSize: '1.2rem' }}>⚠</span>}
                </div>
            ))}
        </div>
    </Card>
);

export const SubscriptionCard = ({ data }) => (
    <Card style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <h3 style={{ color: 'white', marginBottom: '0.2rem' }}>Subscription Status</h3>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{data.plan}</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Expires: {data.expiry}</div>
            </div>
            <Button variant="secondary" style={{ backgroundColor: 'white', color: 'var(--color-primary)', border: 'none' }}>
                Upgrade Plan
            </Button>
        </div>
    </Card>
);

export const RecentActivities = ({ data }) => (
    <Card hoverable={true}>
        <h3>Recent Activities</h3>
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {data.map(activity => (
                <div key={activity.id} style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem' }}>
                    <div style={{ fontWeight: '500', minWidth: '60px' }}>{activity.action}</div>
                    <div style={{ flex: 1 }}>{activity.detail}</div>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>{activity.time}</div>
                </div>
            ))}
        </div>
    </Card>
);
