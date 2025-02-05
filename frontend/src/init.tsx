import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// import '@fullcalendar/react/dist/vdom';
// import '@fullcalendar/daygrid/index.css';
// import '@fullcalendar/core/index.css'

const init = async () => {

  return (
    // <Provider store={store}>
    <App />
    //* </Provider> */
  )
}

export default init;
