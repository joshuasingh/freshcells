import { ApolloProvider } from '@apollo/client';
import { client } from '../utils/apollo-utils';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
