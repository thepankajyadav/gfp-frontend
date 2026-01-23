import React from 'react';
import Card from '../../../../components/ui/Card';

export const SupervisorView = ({ data }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {data.teamKPIs.map((kpi, i) => (
                <Card key={i} style={{ textAlign: 'center' }}>
                    <div style={{ color: 'var(--color-text-muted)' }}>{kpi.label}</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{kpi.value}</div>
                </Card>
            ))}
        </div>

        {/* Tasks & Reports */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <Card>
                <h3>Today's Tasks</h3>
                <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem' }}>
                    {data.tasks.map(t => <li key={t.id}>{t.title} - <b>{t.status}</b></li>)}
                </ul>
            </Card>
            <Card>
                <h3>Reports & Alerts</h3>
                <div style={{ marginBottom: '1rem' }}>
                    {data.reports.map(r => <div key={r.id}>📄 {r.title} ({r.status})</div>)}
                </div>
                {data.alerts.map((a, i) => <div key={i} style={{ color: 'red' }}>⚠ {a.message}</div>)}
            </Card>
        </div>
    </div>
);

export const WorkerView = ({ data }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <Card style={{ borderLeft: '4px solid green' }}>
            <h3>Attendance</h3>
            <div style={{ fontSize: '1.2rem' }}>{data.attendance}</div>
        </Card>

        <Card>
            <h3>Assigned Animals</h3>
            <div>{data.assignedAnimals}</div>
        </Card>

        <Card>
            <h3>Today's Tasks</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1rem' }}>
                {data.tasks.map(task => (
                    <div key={task.id} style={{
                        padding: '0.8rem', borderRadius: '8px',
                        backgroundColor: task.status === 'Done' ? 'rgba(0,128,0,0.1)' : 'var(--color-bg-subtle)'
                    }}>
                        <div style={{ fontWeight: 'bold' }}>{task.title}</div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{task.time}</div>
                    </div>
                ))}
            </div>
        </Card>
    </div>
);

export const GuardView = ({ data }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <Card style={{ backgroundColor: '#2d3748', color: 'white' }}>
            <h3>Shift Status</h3>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{data.shiftStatus}</div>
        </Card>

        <Card>
            <h3>Entry / Exit Logs</h3>
            <div style={{ marginTop: '1rem' }}>
                {data.logs.map(log => (
                    <div key={log.id} style={{ borderBottom: '1px solid var(--color-border)', padding: '0.5rem 0' }}>
                        <span style={{ fontWeight: 'bold', marginRight: '1rem' }}>{log.time}</span>
                        <span>{log.event}</span>
                    </div>
                ))}
            </div>
        </Card>

        <Card>
            <h3>Incident Reporting</h3>
            <p>{data.incidentReport}</p>
            <button style={{ marginTop: '0.5rem', padding: '0.5rem', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '4px' }}>
                Report Incident
            </button>
        </Card>
    </div>
);
