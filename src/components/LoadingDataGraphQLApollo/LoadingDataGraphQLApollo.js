import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ApolloProvider } from "@apollo/react-hooks";
import apolloClient from "./apolloClient.js";
import gql from "graphql-tag";

import { useData } from "../../hooks";

import { Article as _Article } from "../SemanticHTML";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The site title
   */
  title: PropTypes.string,
  /**
   * The site url
   */
  url: PropTypes.string,
  /**
   * The site description
   */
  description: PropTypes.string
};

/**
 * Defines the default props
 */
const defaultProps = {
  title: "Site Title",
  url: "#",
  description: "Site description"
};

/**
 * Defines the database query
 */
const query = gql`
  query generalSettings {
    generalSettings {
      title
      url
      description
    }
  }
`;

/**
 * Styles the component container
 */
const Article = styled(_Article)(props => ({}));

/**
 * Loads site settings from the database
 */
const Settings = props => {
  const data = useData(props, query, "generalSettings");
  const { title, url, description } = data;

  return (
    <ul>
      <li>Title: {title}</li>
      <li>URL: {url}</li>
      <li>Description: {description}</li>
    </ul>
  );
};

/**
 * Displays the component
 */
const LoadingDataGraphQLApollo = props => {
  return (
    <ApolloProvider client={apolloClient}>
      <Article
        className="LoadingDataGraphQLApollo"
        title="Loading data from GraphQL with Apollo"
        displayTitle={true}
      >
        <Settings {...props} />
      </Article>
    </ApolloProvider>
  );
};

LoadingDataGraphQLApollo.propTypes = propTypes;
LoadingDataGraphQLApollo.defaultProps = defaultProps;

export default LoadingDataGraphQLApollo;
export {
  propTypes as LoadingDataGraphQLApolloPropTypes,
  defaultProps as LoadingDataGraphQLApolloDefaultProps
};
