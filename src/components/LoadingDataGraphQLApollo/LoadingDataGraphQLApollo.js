import React, { useMemo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ApolloProvider } from "@apollo/react-hooks";
import apolloClient from "../../apolloClient.js";
import { gql } from "apollo-boost";

import {
  useData,
  usePlaceholderTextRows,
  PlaceholderTextPropTypes
} from "../../hooks";

import { Article as _Article } from "../SemanticHTML";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The data placeholder
   */
  placeholder: PropTypes.shape(PlaceholderTextPropTypes),
  /**
   * Display the placeholder only and don't load the data.
   * Used for demo purposes
   */
  displayData: PropTypes.bool
};

/**
 * Defines the default props
 */
const defaultProps = {
  placeholder: {
    numberOfRows: 1,
    rowLength: 20,
    content: "/ "
  },
  displayData: true
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
const Article = styled(_Article)(props => ({
  "& h3": {
    fontSize: "125%",
    margin: "var(--lem) 0"
  }
}));

/**
 * Generates a text placeholder for settings
 */
const SettingsPlaceholder = placeholderTextRows => {
  const { text } = placeholderTextRows[0];

  return {
    title: text,
    url: text,
    description: text
  };
};

/**
 * Loads site settings from the database
 */
const Settings = props => {
  /**
   * Loads props
   */
  const { placeholder, displayData } = props;

  /**
   * Loads the placeholder
   */
  const placeholderTextRows = usePlaceholderTextRows(placeholder);

  /**
   * Creates the placeholder
   */
  const defaultProps = useMemo(() => SettingsPlaceholder(placeholderTextRows), [
    placeholderTextRows
  ]);

  /**
   * Loads data
   */
  const { data } = useData(defaultProps, query, "generalSettings");

  /**
   * Returns data
   *
   * If `displayData` then returns default data (for demo purposes)
   */
  const { title, url, description } = displayData ? data : defaultProps;

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
