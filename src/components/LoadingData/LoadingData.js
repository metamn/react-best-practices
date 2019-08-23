import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";

import Description, { DescriptionPropTypes } from "../Description";
import md from "./LoadingData.md";

import LoadingDataApiAxios from "../LoadingDataApiAxios";
import LoadingDataGraphQLApollo from "../LoadingDataGraphQLApollo";
import LoadingDataApiAxiosPlaceholderSVG from "../LoadingDataApiAxiosPlaceholderSVG";
import LoadingDataGraphQLApolloPagination from "../LoadingDataGraphQLApolloPagination";

import { Section as _Section } from "../SemanticHTML";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The description
   */
  description: PropTypes.shape(DescriptionPropTypes)
};

/**
 * Defines the default props
 */
const defaultProps = {
  description: {
    file: md,
    placeholder: {
      numberOfRows: 2,
      rowLength: 30,
      content: "/ "
    }
  }
};

/**
 * Styles the component container
 */
const Section = styled(_Section)(props => ({
  "& h2": {
    fontSize: "125%"
  }
}));

/**
 * Displays the component
 */
const LoadingData = props => {
  const { description } = props;

  return (
    <Section className="LoadingData" title="Loading Data">
      <Description {...description} />

      <ul>
        <li>
          <Link to="/loading-data/api-axios-placeholder-svg">
            Loading data from an API with Axios using an SVG Placeholder
          </Link>
        </li>
        <li>
          <Link to="/loading-data/api-axios">
            Loading data from an API with Axios
          </Link>
        </li>
        <li>
          <Link to="/loading-data/graphql-apollo">
            Loading data from GraphQL with Apollo
          </Link>
        </li>
        <li>
          <Link to="/loading-data/graphql-apollo-pagination">
            Loading data from GraphQL with Apollo and pagination
          </Link>
        </li>
      </ul>

      <Route path="/loading-data/api-axios" component={LoadingDataApiAxios} />
      <Route
        path="/loading-data/api-axios-placeholder-svg"
        component={LoadingDataApiAxiosPlaceholderSVG}
      />
      <Route
        path="/loading-data/graphql-apollo"
        component={LoadingDataGraphQLApollo}
      />
      <Route
        path="/loading-data/graphql-apollo-pagination"
        component={LoadingDataGraphQLApolloPagination}
      />
    </Section>
  );
};

LoadingData.propTypes = propTypes;
LoadingData.defaultProps = defaultProps;

export default LoadingData;
export {
  propTypes as LoadingDataPropTypes,
  defaultProps as LoadingDataDefaultProps
};
