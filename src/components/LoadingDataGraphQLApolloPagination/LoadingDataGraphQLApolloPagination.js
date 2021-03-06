import React from "react";
import styled from "styled-components";

import { ApolloProvider } from "@apollo/react-hooks";
import apolloClient from "../../apolloClient.js";
import { gql } from "apollo-boost";

import { useData } from "../../hooks";

import { Article as _Article } from "../SemanticHTML";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Defines the database query
 */
const query = gql`
  query posts($first: Int, $cursor: String) {
    posts(first: $first, after: $cursor) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          id
          title
          date
        }
      }
    }
  }
`;

/**
 * Styles the component container
 */
const Article = styled(_Article)(props => ({
  "& h3": {
    fontSize: "125%",
    margin: "var(--lem) 0"
  }
}));

/**
 * Displays posts
 */
const Posts = () => {
  const { data, loadMore } = useData(null, query, "posts", { first: 3 });

  return (
    <>
      <ul>
        {data &&
          data.edges &&
          data.edges.map(edge => <li key={edge.node.id}>{edge.node.title}</li>)}
      </ul>
      <button onClick={() => loadMore()}>Next page</button>
    </>
  );
};

/**
 * Displays the component
 */
const LoadingDataGraphQLApolloPagination = props => {
  return (
    <ApolloProvider client={apolloClient}>
      <Article
        className="LoadingDataGraphQLApolloPagination"
        title="Loading data from GraphQL with Apollo and pagination"
        displayTitle={true}
      >
        <Posts />
      </Article>
    </ApolloProvider>
  );
};

LoadingDataGraphQLApolloPagination.propTypes = propTypes;
LoadingDataGraphQLApolloPagination.defaultProps = defaultProps;

export default LoadingDataGraphQLApolloPagination;
export {
  propTypes as LoadingDataGraphQLApolloPaginationPropTypes,
  defaultProps as LoadingDataGraphQLApolloPaginationDefaultProps
};
