import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Styles the component container
 */
const Container = styled("div")(props => ({}));

/**
 * Displays the component
 */
const GraphQL = props => {
  return <Container className="GraphQL">GraphQL</Container>;
};

GraphQL.propTypes = propTypes;
GraphQL.defaultProps = defaultProps;

export default GraphQL;
export { propTypes as GraphQLPropTypes, defaultProps as GraphQLDefaultProps };
