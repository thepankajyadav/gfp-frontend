export const butcherKpiData = [
    { label: 'Animals Received', value: 25, sub: 'Today' },
    { label: 'Processed', value: 18, sub: 'Today' },
    { label: 'Pending', value: 7, sub: 'In Queue' },
];

export const slaughterScheduleData = [
    { id: 1, time: '08:00 AM', batch: 'Batch #101', quantity: '10 Goats', status: 'Completed' },
    { id: 2, time: '10:30 AM', batch: 'Batch #102', quantity: '8 Goats', status: 'Processing' },
    { id: 3, time: '02:00 PM', batch: 'Batch #103', quantity: '12 Goats', status: 'Scheduled' },
    { id: 4, time: '04:00 PM', batch: 'Batch #104', quantity: '5 Goats', status: 'Scheduled' },
    { id: 5, time: 'Tomorrow', batch: 'Batch #105', quantity: '20 Goats', status: 'Pending' },
];

export const meatInventoryData = [
    { type: 'Mutton (Fresh)', stock: '45kg', status: 'OK' },
    { type: 'Liver/Organs', stock: '8kg', status: 'Low' },
    { type: 'Frozen Cuts', stock: '120kg', status: 'High' },
];

export const complianceAlerts = [
    { id: 1, type: 'Certificate', message: 'Health Cert missing for Batch #102', severity: 'high' },
    { id: 2, type: 'Inspection', message: 'Weekly hygiene inspection tomorrow', severity: 'medium' },
];

export const butcherActivities = [
    { id: 1, action: 'Received', detail: 'Received 15 goats from Trader X', time: '07:30 AM' },
    { id: 2, action: 'Completed', detail: 'Finished processing Batch #101', time: '09:45 AM' },
    { id: 3, action: 'Alert', detail: 'Freezer temp check logged', time: '11:00 AM' },
];
