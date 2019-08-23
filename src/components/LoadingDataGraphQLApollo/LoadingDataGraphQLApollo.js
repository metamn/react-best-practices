import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ApolloProvider } from "@apollo/react-hooks";
import apolloClient from "../../apolloClient.js";
import { gql } from "apollo-boost";

import { useData } from "../../hooks";

import Description, { DescriptionPropTypes } from "../Description";
import md from "./LoadingDataGraphQLApollo.md";
import { Article as _Article } from "../SemanticHTML";
import PlaceholderText, { PlaceholderTextPropTypes } from "../PlaceholderText";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The data placeholder
   */
  placeholder: PropTypes.shape(PlaceholderTextPropTypes),
  /**
   * The description
   */
  description: PropTypes.shape(DescriptionPropTypes)
};

/**
 * Defines the default props
 */
const defaultProps = {
  placeholder: {
    numberOfRows: 1,
    rowLength: 30,
    content: "/ "
  },
  description: {
    file: md,
    placeholder: {
      numberOfRows: 1,
      rowLength: 30,
      content: "/ "
    }
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
  const defaultProps = SettingsPlaceholder(props);

  const { data } = useData(defaultProps, query, "generalSettings");
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
  const { placeholder, description } = props;

  return (
    <ApolloProvider client={apolloClient}>
      <Article
        className="LoadingDataGraphQLApollo"
        title="Loading data from GraphQL with Apollo"
      >
        <Description {...description} />
        <Settings {...placeholder} />
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
