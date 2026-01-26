import React from 'react';
import { Plus } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const DUMMY_EMPLOYEES = [
    { id: 1, name: 'Rajesh Kumar', role: 'Farm Manager', phone: '+91 98765 43210', joinDate: '2023-01-15' },
    { id: 2, name: 'Priya Sharma', role: 'Veterinarian', phone: '+91 98765 43211', joinDate: '2023-03-20' },
    { id: 3, name: 'Amit Patel', role: 'Caretaker', phone: '+91 98765 43212', joinDate: '2023-06-10' },
    { id: 4, name: 'Sunita Verma', role: 'Milking Specialist', phone: '+91 98765 43213', joinDate: '2024-02-01' },
    { id: 5, name: 'Vikram Singh', role: 'Caretaker', phone: '+91 98765 43214', joinDate: '2024-05-15' },
];

const EmployeePage = () => {
    return (
        <div className="employee-page">
            <div style={{ marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ color: 'var(--color-primary)', margin: 0 }}>Employee Management</h2>
                <Button variant="primary"><Plus size={18} style={{ marginRight: '0.5rem' }} />Add Employee</Button>
            </div>
            <Card>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                                <th className="sticky-col" style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Name</th>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Role</th>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Phone</th>
                                <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600', color: 'var(--color-text-main)' }}>Join Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DUMMY_EMPLOYEES.map((employee) => (
                                <tr key={employee.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                    <td className="sticky-col" style={{ padding: '0.75rem', color: 'var(--color-text-main)', fontWeight: '500' }}>{employee.name}</td>
                                    <td style={{ padding: '0.75rem', color: 'var(--color-text-main)' }}>{employee.role}</td>
                                    <td style={{ padding: '0.75rem', color: 'var(--color-text-main)' }}>{employee.phone}</td>
                                    <td style={{ padding: '0.75rem', color: 'var(--color-text-main)' }}>{employee.joinDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default EmployeePage;
