import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ChatContextProvider from "./Context/ChatContextProvider/ChatContextProvider";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ChatContextProvider>
    <App />
    </ChatContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);