import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { SupervisorView, WorkerView, GuardView } from './components/EmployeeComponents';
import { supervisorData, workerData, guardData } from '../../../data/employeeData';

const EmployeeDashboard = () => {
    const { user } = useAuth();
    // Initialize view based on subRole if available, otherwise default to supervisor
    const [view, setView] = useState(user?.subRole || 'supervisor');

    useEffect(() => {
        if (user?.subRole) {
            setView(user.subRole);
        }
    }, [user]);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ color: 'var(--color-primary)' }}>Employee Dashboard</h2>

                {/* Role Switcher for Demo */}
                <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8rem' }}>
                    <button onClick={() => setView('supervisor')} disabled={view === 'supervisor'}>Supervisor</button>
                    <button onClick={() => setView('worker')} disabled={view === 'worker'}>Worker</button>
                    <button onClick={() => setView('guard')} disabled={view === 'guard'}>Guard</button>
                </div>
            </div>

            {view === 'supervisor' && <SupervisorView data={supervisorData} />}
            {view === 'worker' && <WorkerView data={workerData} />}
            {view === 'guard' && <GuardView data={guardData} />}
        </div>
    );
};

export default EmployeeDashboard;
