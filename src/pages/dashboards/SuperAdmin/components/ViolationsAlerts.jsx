import React from 'react';
import Card from '../../../../components/ui/Card';

const ViolationsAlerts = ({ data }) => {
    return (
        <Card style={{ height: '100%' }}>
            <h3>Violations & Alerts</h3>
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {data.map((item) => (
                    <div key={item.id} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0.75rem',
                        borderRadius: '6px',
                        backgroundColor: 'var(--color-bg-subtle)',
                        borderLeft: `4px solid ${item.type === 'Suspension' ? 'red' : 'orange'}`
                    }}>
                        <div>
                            <div style={{ fontWeight: '500' }}>{item.user}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{item.type} • {item.date}</div>
                        </div>
                        <span style={{
                            fontSize: '0.8rem',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '4px',
                            backgroundColor: item.status === 'Active' || item.status === 'Pending' ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 128, 0, 0.1)',
                            color: item.status === 'Active' || item.status === 'Pending' ? 'red' : 'green'
                        }}>
                            {item.status}
                        </span>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default ViolationsAlerts;
