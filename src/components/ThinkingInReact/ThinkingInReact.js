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
const ThinkingInReact = props => {
  return <Container className="ThinkingInReact">ThinkingInReact</Container>;
};

ThinkingInReact.propTypes = propTypes;
ThinkingInReact.defaultProps = defaultProps;

export default ThinkingInReact;
export {
  propTypes as ThinkingInReactPropTypes,
  defaultProps as ThinkingInReactDefaultProps
};
