import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {ApolloProvider} from "@apollo/client"
import Client from './Apollo/Client';



ReactDOM.render(
  <ApolloProvider client={Client}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);
