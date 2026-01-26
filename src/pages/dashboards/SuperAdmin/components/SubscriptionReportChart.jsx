import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Card from '../../../../components/ui/Card';

const SubscriptionReportChart = ({ data }) => {
    const [year, setYear] = useState('2026');

    return (
        <Card style={{ height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3>Subscription Report</h3>
                <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    style={{ padding: '0.4rem', borderRadius: '4px', border: '1px solid var(--color-border)' }}
                >
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                </select>
            </div>

            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip
                            contentStyle={{ backgroundColor: 'var(--color-bg-card)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                        />
                        <Legend />
                        <Line type="monotone" dataKey="sales" name="Total Sales ($)" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default SubscriptionReportChart;
