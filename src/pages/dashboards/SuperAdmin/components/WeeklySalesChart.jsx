import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Card from '../../../../components/ui/Card';

const WeeklySalesChart = ({ data }) => {
    const [period, setPeriod] = useState('current'); // 'current' or 'last'

    // Mock logic: Assume "Today" is Friday for demonstration as per requirement "Fri, Sat, Sun empty"
    // In real app, use new Date().getDay()
    // 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
    // If today is Friday (5), then Sat(6) and Sun(0/7) should be empty.

    // Let's assume the passed 'data' is full 7 days. We filter based on period.
    const getFilteredData = () => {
        if (period === 'last') return data;

        // For 'current' week, simulate today is Friday
        // So allow Mon, Tue, Wed, Thu, Fri. Remove Sat, Sun values.
        const daysAllowed = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

        return data.map(d => {
            if (daysAllowed.includes(d.day)) return d;
            // Return empty stats for future days
            return { ...d, monthly: 0, quarterly: 0, yearly: 0 };
        });
    };

    return (
        <Card style={{ height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3>Subscription Sale Weekly</h3>
                <select
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                    style={{ padding: '0.4rem', borderRadius: '4px', border: '1px solid var(--color-border)' }}
                >
                    <option value="current">Current Week</option>
                    <option value="last">Last Week</option>
                </select>
            </div>

            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <BarChart data={getFilteredData()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip
                            contentStyle={{ backgroundColor: 'var(--color-bg-card)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                        />
                        <Legend />
                        <Bar dataKey="monthly" stackId="a" fill="#8884d8" name="Monthly" />
                        <Bar dataKey="quarterly" stackId="a" fill="#82ca9d" name="Quarterly" />
                        <Bar dataKey="yearly" stackId="a" fill="#ffc658" name="Yearly" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default WeeklySalesChart;
