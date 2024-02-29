import { createRoot } from 'react-dom/client';
import App from './components/App';
import React from 'react';
import './styles.scss';
import { Provider } from 'react-redux';
import { store } from './store/store';


const root = createRoot(document.getElementById('app'));

if (!root) {
  throw new Error('root element not found')
}


root.render(
  <Provider store={store}>
    <App />
  </Provider>
);