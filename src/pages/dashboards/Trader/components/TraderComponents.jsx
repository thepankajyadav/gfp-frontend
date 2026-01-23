import React from 'react';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export const TradingKPIs = ({ data }) => (
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

export const DealsFunnelChart = ({ data }) => (
    <Card style={{ height: '300px' }}>
        <h3>Deals Funnel</h3>
        <ResponsiveContainer width="100%" height="80%">
            <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={80} tick={{ fontSize: 12 }} />
                <Tooltip cursor={{ fill: 'transparent' }} />
                <Bar dataKey="value" barSize={30} radius={[0, 4, 4, 0]}>
                    {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    </Card>
);

export const ActiveDealsList = ({ data }) => (
    <Card>
        <h3>Active Deals</h3>
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {data.map((deal) => (
                <div key={deal.id} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '0.75rem', borderRadius: '6px', backgroundColor: 'var(--color-bg-subtle)'
                }}>
                    <div>
                        <div style={{ fontWeight: '500' }}>{deal.amount} • <span style={{ color: 'var(--color-primary)' }}>{deal.type}</span></div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{deal.party}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontWeight: 'bold' }}>{deal.price}</div>
                        <div style={{ fontSize: '0.8rem', color: deal.status === 'Negotiation' ? 'orange' : 'green' }}>{deal.status}</div>
                    </div>
                </div>
            ))}
        </div>
    </Card>
);

export const FinancialSnapshot = ({ data }) => (
    <Card>
        <h3>Financial Snapshot</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: 'var(--color-bg-subtle)', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Monthly Profit</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'green' }}>{data.monthlyProfit}</div>
                <div style={{ fontSize: '0.8rem', color: 'green' }}>{data.growth}</div>
            </div>
            <div style={{ padding: '1rem', backgroundColor: 'var(--color-bg-subtle)', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Total Volume</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{data.totalVolume}</div>
            </div>
        </div>
    </Card>
);

export const TraderAlerts = ({ data }) => (
    <Card>
        <h3>Alerts & Notifications</h3>
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {data.map((alert) => (
                <div key={alert.id} style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem' }}>
                    <div style={{ fontWeight: '500', color: 'var(--color-primary)', minWidth: '90px' }}>{alert.type}</div>
                    <div style={{ flex: 1 }}>{alert.message}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{alert.time}</div>
                </div>
            ))}
        </div>
    </Card>
);
