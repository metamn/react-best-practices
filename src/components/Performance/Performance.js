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
const Performance = props => {
  return <Container className="Performance">Performance</Container>;
};

Performance.propTypes = propTypes;
Performance.defaultProps = defaultProps;

export default Performance;
export {
  propTypes as PerformancePropTypes,
  defaultProps as PerformanceDefaultProps
};
