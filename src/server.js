import { GASClient } from 'gas-client';

const { serverFunctions } = new GASClient({
    allowedDevelopmentDomains: 'https://localhost:1234',
});

export const server = serverFunctions