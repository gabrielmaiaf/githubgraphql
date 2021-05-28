import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setContext } from '@apollo/client/link/context';

const githubLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = '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';

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(githubLink),
  cache: new InMemoryCache(),
});

export default client;
