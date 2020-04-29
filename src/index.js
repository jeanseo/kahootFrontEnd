import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from'./Components/pages/Main';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:8080/graphql'
});

const client = new ApolloClient({
    cache,
    link
});


ReactDOM.render(<ApolloProvider client={client}><Main /></ApolloProvider>, document.getElementById('root'));

serviceWorker.unregister();
