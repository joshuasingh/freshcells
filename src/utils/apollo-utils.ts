import {
    ApolloClient,
    createHttpLink,
    InMemoryCache
  } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'https://cms.trial-task.k8s.ext.fcse.io/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export { client };