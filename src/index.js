import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import reducer from './reducers';
import './index.css';
import Dashboard from './containers/dashboard';
import Registration from './containers/registration';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/registration",
    element: <Registration />
  }
]);

const Loading = () => (
  <div className="loader-container">
    <div className="spinner"></div>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<Loading />}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
