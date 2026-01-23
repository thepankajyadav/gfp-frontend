export const kpiData = [
    { label: 'Total Farms', value: 120, change: '+12%', color: '#4caf50' },
    { label: 'Total Traders', value: 45, change: '+5%', color: '#2196f3' },
    { label: 'Total Butchers', value: 30, change: '+8%', color: '#ff9800' },
    { label: 'Total Customers', value: 350, change: '+20%', color: '#9c27b0' },
];

export const subscriptionData = [
    { name: 'Monthly', active: 150 },
    { name: 'Quarterly', active: 80 },
    { name: 'Yearly', active: 40 },
];

export const userDistributionData = [
    { name: 'Farms', value: 120, color: '#4caf50' },
    { name: 'Traders', value: 45, color: '#2196f3' },
    { name: 'Butchers', value: 30, color: '#ff9800' },
    { name: 'Customers', value: 350, color: '#9c27b0' },
];

export const recentActivities = [
    { id: 1, type: 'Registration', user: 'Green Valley Farm', time: '2 hrs ago', detail: 'New Farm Registration' },
    { id: 2, type: 'Upgrade', user: 'Meat King Traders', time: '5 hrs ago', detail: 'Upgraded to Premium Plan' },
    { id: 3, type: 'Registration', user: 'Local Butcher', time: '1 day ago', detail: 'New Butcher Registration' },
    { id: 4, type: 'Alert', user: 'System', time: '1 day ago', detail: 'Automated backup completed' },
];

export const violationsData = [
    { id: 1, user: 'Farm X', type: 'Warning', status: 'Pending', date: '2025-11-20' },
    { id: 2, user: 'Trader Y', type: 'Suspension', status: 'Active', date: '2025-11-18' },
    { id: 3, user: 'Butcher Z', type: 'Warning', status: 'Resolved', date: '2025-11-15' },
];

export const systemHealthData = {
    api: { status: 'Operational', uptime: '99.9%' },
    email: { status: 'Operational', sent: 1250 },
    sms: { status: 'Operational', sent: 850 },
};
