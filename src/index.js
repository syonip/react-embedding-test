import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

window.loadSignIn = (rootId) => {
  const root = ReactDOM.createRoot(document.getElementById(rootId));
  const signInComponent = {}
  root.render(
    <React.StrictMode>
      <App signInComponent={signInComponent} />
    </React.StrictMode>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();

  return signInComponent;
}

if (process.env.NODE_ENV !== "production") {
  window.signInComponent = window.loadSignIn("root");
}