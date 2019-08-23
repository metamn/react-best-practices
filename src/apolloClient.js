/**
 * Setting up an Apollo client
 *
 * @see https://github.com/apollographql/apollo-client
 */

import ApolloClient from "apollo-boost";

const apolloClient = new ApolloClient({
  uri: "http://inu.ro/graphql"
});

export default apolloClient;
