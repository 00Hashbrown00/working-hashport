import './App.css';
import './polyfills.ts';
import { LazyHashportWidget } from '@hashport/widget';

function App() {
    return (
        <>
            <img src='logo.png'/>
            <h1>Lynxify Demo
            </h1>
            <LazyHashportWidget label="Open Portal" widgetProps={{ mode: 'testnet' }} />
        </>
    );
}

export default App;
