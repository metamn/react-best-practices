import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Section as _Section } from "../SemanticHTML";

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
const Container = styled(_Section)(props => ({}));

/**
 * Displays the component
 */
const Home = props => {
  return (
    <Container className="Home" title="Home">
      Home
    </Container>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
export { propTypes as HomePropTypes, defaultProps as HomeDefaultProps };
