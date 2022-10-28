import { GASClient } from 'gas-client';
import Hello from './components/Hello';

const { serverFunctions } = new GASClient({
    allowedDevelopmentDomains: 'https://localhost:1234',
});

export function App() {

    return (
        <Hello server={serverFunctions}/>
    )
}