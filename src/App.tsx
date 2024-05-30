import './App.css';
import './polyfills.ts';
import { LazyHashportWidget } from '@hashport/widget';

function App() {
    return (
        <>
            <h1>Lynxify Demo</h1>
            <LazyHashportWidget label="Open Port" widgetProps={{ mode: 'testnet' }} />
        </>
    );
}

export default App;
