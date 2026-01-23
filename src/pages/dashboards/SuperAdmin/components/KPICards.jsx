import React from 'react';
import Card from '../../../../components/ui/Card';

const KPICards = ({ data }) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {data.map((item, index) => (
                <Card key={index} style={{ borderLeft: `4px solid ${item.color}` }}>
                    <h4 style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{item.label}</h4>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{item.value}</span>
                        <span style={{ color: item.change.startsWith('+') ? 'green' : 'red', fontSize: '0.9rem', fontWeight: '500' }}>
                            {item.change}
                        </span>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default KPICards;
