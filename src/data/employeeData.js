// Supervisor Data
export const supervisorData = {
    teamKPIs: [
        { label: 'Team Present', value: '12/14' },
        { label: 'Tasks Done', value: '45/60' },
        { label: 'Incidents', value: '0' },
    ],
    tasks: [
        { id: 1, title: 'Morning Briefing', status: 'Done' },
        { id: 2, title: 'Inspect Barn A', status: 'Pending' },
        { id: 3, title: 'Review Feed Logs', status: 'Pending' }
    ],
    reports: [
        { id: 1, title: 'Weekly Health Report', status: 'Submitted' },
        { id: 2, title: 'Inventory Request', status: 'Draft' }
    ],
    alerts: [
        { id: 1, message: 'Worker shortage in Sector 3' }
    ]
};

// Worker Data
export const workerData = {
    tasks: [
        { id: 1, title: 'Feed Group A (Adults)', time: '08:00 AM', status: 'Done' },
        { id: 2, title: 'Clean Water Troughs', time: '10:00 AM', status: 'In Progress' },
        { id: 3, title: 'Herding to Pasture', time: '02:00 PM', status: 'Pending' }
    ],
    assignedAnimals: 'Group A (50 Animals)',
    attendance: 'Checked In (07:45 AM)'
};

// Guard Data
export const guardData = {
    shiftStatus: 'Active (Day Shift)',
    logs: [
        { id: 1, time: '08:15 AM', event: 'Truck Entry (Feed Supply)' },
        { id: 2, time: '09:00 AM', event: 'Visitor Entry (Vet)' },
        { id: 3, time: '10:30 AM', event: 'Truck Exit' }
    ],
    incidentReport: 'No incidents reported today.'
};
