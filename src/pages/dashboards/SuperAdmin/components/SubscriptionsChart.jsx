import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../../../../components/ui/Card';

const SubscriptionsChart = ({ data }) => {
    return (
        <Card style={{ height: '100%' }}>
            <h3>Active Subscriptions</h3>
            <div style={{ width: '100%', height: 300, marginTop: '1rem' }}>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip
                            contentStyle={{ backgroundColor: 'var(--color-bg-card)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                        />
                        <Bar dataKey="active" fill="#4f46e5" radius={[4, 4, 0, 0]} barSize={50} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default SubscriptionsChart;
