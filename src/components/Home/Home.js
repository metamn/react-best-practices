import React from "react";
import styled from "styled-components";

import Logo from "../Logo";
import LoadingData from "../LoadingData";
import LoadingWithSuspense from "../LoadingWithSuspense";
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
const Section = styled(_Section)(props => ({}));

/**
 * Displays the component
 */
const Home = props => {
  return (
    <Section className="Home" title="Home">
      <Logo />
      <LoadingData />
      <LoadingWithSuspense />
    </Section>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
export { propTypes as HomePropTypes, defaultProps as HomeDefaultProps };
