export const farmKpiData = [
    { label: 'Total Animals', value: 1250, sub: 'Herd Size' },
    { label: 'Kids', value: 300, sub: '< 6 months' },
    { label: 'Adults', value: 850, sub: '> 6 months' },
    { label: 'Pregnant', value: 100, sub: 'Expecting' },
];

export const animalStatusData = [
    { name: 'Healthy', value: 1150, fill: '#4caf50' },
    { name: 'Sick/Quarantine', value: 45, fill: '#f44336' },
    { name: 'Pregnant', value: 55, fill: '#2196f3' },
];

export const healthAlerts = [
    { id: 1, type: 'Vaccination', message: 'FMD Vaccination due for 50 adults', date: 'Tomorrow', severity: 'high' },
    { id: 2, type: 'Sickness', message: 'Tag #1024 reported lethargic', date: 'Today', severity: 'medium' },
    { id: 3, type: 'Checkup', message: 'Regular vet visit', date: 'Next Week', severity: 'low' },
];

export const employeeSnapshot = {
    onDuty: 12,
    absent: 2,
    total: 14
};

export const inventorySnapshot = [
    { item: 'Goat Feed (Pellets)', status: 'Low', quantity: '50kg', severity: 'high' },
    { item: 'Vaccines (FMD)', status: 'OK', quantity: '100 doses', severity: 'low' },
];

export const subscriptionStatus = {
    plan: 'Pro Plan',
    expiry: '2025-12-31',
    status: 'Active'
};

export const recentFarmActivities = [
    { id: 1, action: 'Birth', detail: 'Tag #1025 gave birth to 2 kids', time: '2 hrs ago' },
    { id: 2, action: 'Sale', detail: 'Sold 10 bucks to Trader X', time: 'Yesterday' },
    { id: 3, action: 'Feed', detail: 'Restocked 500kg alfalfa', time: '2 days ago' },
];
