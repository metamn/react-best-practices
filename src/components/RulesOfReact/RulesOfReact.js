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
const RulesOfReact = props => {
  return <Container className="RulesOfReact">RulesOfReact</Container>;
};

RulesOfReact.propTypes = propTypes;
RulesOfReact.defaultProps = defaultProps;

export default RulesOfReact;
export {
  propTypes as RulesOfReactPropTypes,
  defaultProps as RulesOfReactDefaultProps
};
