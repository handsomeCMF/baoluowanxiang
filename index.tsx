import * as React from 'react';
import App from './src/App';
import * as ReactDOM  from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@store/store';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);  