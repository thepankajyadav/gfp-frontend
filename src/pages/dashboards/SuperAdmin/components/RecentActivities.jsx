import React from 'react';
import Card from '../../../../components/ui/Card';

const RecentActivities = ({ data }) => {
    return (
        <Card style={{ height: '100%' }}>
            <h3>Recent Activities</h3>
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {data.map((activity) => (
                    <div key={activity.id} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--color-primary-light)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            {/* Simple dot or icon placeholder */}
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></div>
                        </div>
                        <div>
                            <div style={{ fontWeight: '500' }}>{activity.user}</div>
                            <div style={{ fontSize: '0.9rem' }}>{activity.detail}</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>{activity.time}</div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default RecentActivities;
