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
const Memoization = props => {
  return <Container className="Memoization">Memoization</Container>;
};

Memoization.propTypes = propTypes;
Memoization.defaultProps = defaultProps;

export default Memoization;
export {
  propTypes as MemoizationPropTypes,
  defaultProps as MemoizationDefaultProps
};
