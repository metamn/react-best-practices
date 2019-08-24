import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//import { stringify } from "flatted";

import Logo from "../Logo";
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
const Section = styled(_Section)(props => ({
  "& ul": {
    marginTop: "var(--lem)"
  }
}));

/**
 * Displays the component
 */
const Home = props => {
  return (
    <Section className="Home" title="Home">
      <Logo />
      <ul>
        <li>
          <Link to="/loading-data">Loading data</Link>
        </li>
        <li>
          <Link to="/loading-images">Loading images</Link>
        </li>
      </ul>
    </Section>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
export { propTypes as HomePropTypes, defaultProps as HomeDefaultProps };
