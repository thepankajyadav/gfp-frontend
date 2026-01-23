export const traderKpiData = [
    { label: 'Active Deals', value: 12, sub: 'In Progress' },
    { label: 'Completed', value: 45, sub: 'This Month' },
    { label: 'Cancelled', value: 3, sub: 'This Month' },
];

export const dealsFunnelData = [
    { name: 'Requested', value: 20, fill: '#673ab7' },
    { name: 'Negotiation', value: 12, fill: '#2196f3' },
    { name: 'Closed', value: 45, fill: '#4caf50' },
];

export const activeDealsList = [
    { id: 1, type: 'Buy', amount: '50 Goats', party: 'Green Valley Farm', status: 'Negotiation', price: '$5000' },
    { id: 2, type: 'Sell', amount: '20 Goats', party: 'City Butcher', status: 'Requested', price: '$2200' },
    { id: 3, type: 'Buy', amount: '100 Kids', party: 'Mountain Farm', status: 'Payment Pending', price: '$8000' },
    { id: 4, type: 'Sell', amount: '15 Bucks', party: 'Trader Joe', status: 'Negotiation', price: '$3000' },
    { id: 5, type: 'Buy', amount: 'Myotonic', party: 'Rare Breeds Inc', status: 'Requested', price: '$1500' },
];

export const financialSnapshot = {
    monthlyProfit: '$12,500',
    totalVolume: '$45,000',
    growth: '+15%'
};

export const traderAlerts = [
    { id: 1, type: 'New Request', message: 'You have 3 new buy requests nearby', time: '1 hr ago' },
    { id: 2, type: 'Price Alert', message: 'Market price for Boer increased by 5%', time: 'Today' },
    { id: 3, type: 'Deal Update', message: 'Green Valley Farm countered your offer', time: '2 hrs ago' },
];
