import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ChatContextProvider from "./Context/ChatContextProvider/ChatContextProvider";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ChatContextProvider>
      <Router>
        <App />
      </Router>
    </ChatContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);