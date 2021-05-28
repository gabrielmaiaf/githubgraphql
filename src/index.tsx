import 'antd/dist/antd.css';

import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Client from './services/apollo';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={Client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
