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
const State = props => {
  return <Container className="State">State</Container>;
};

State.propTypes = propTypes;
State.defaultProps = defaultProps;

export default State;
export { propTypes as StatePropTypes, defaultProps as StateDefaultProps };
