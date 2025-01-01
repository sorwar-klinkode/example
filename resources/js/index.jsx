import { createRoot } from 'react-dom/client'
import App from './App'
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';

const root = document.createElement('div')
document.body.appendChild(root)
createRoot(root).render(
    <AppProvider>
        <App />
    </AppProvider>
)