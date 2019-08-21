import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ApolloProvider } from "@apollo/react-hooks";
import apolloClient from "./apolloClient.js";
import gql from "graphql-tag";

import { useData } from "../../hooks";

import Description from "../Description";
import md from "./LoadingDataGraphQLApollo.md";
import { Article as _Article } from "../SemanticHTML";
import PlaceholderText, { PlaceholderTextPropTypes } from "../PlaceholderText";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The placeholder
   */
  placeholder: PropTypes.shape(PlaceholderTextPropTypes)
};

/**
 * Defines the default props
 */
const defaultProps = {
  placeholder: {
    numberOfRows: 1,
    rowLength: 30,
    content: "/ "
  }
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
 * Generates a text placeholder for settings
 */
const SettingsPlaceholder = props => {
  const placeholder = PlaceholderText(props);
  const { text } = placeholder[0];

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
  const { placeholder } = props;
  const defaultProps = SettingsPlaceholder(placeholder);

  const data = useData(defaultProps, query, "generalSettings");
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
      >
        <Description file={md} />
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
