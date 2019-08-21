import React from "react";
import styled from "styled-components";

import { MetaPropTypes, MetaDefaultProps } from "../Meta";
import Link from "../Link";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The site meta
   */
  ...MetaPropTypes
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...MetaDefaultProps
};

/**
 * Styles the component container
 */
const Header = styled("header")(props => ({}));

/**
 * Styles the title
 */
const Title = styled("h1")(props => ({}));

/**
 * Displays the component
 */
const Logo = props => {
  /**
   * Loads props
   */
  const { title, url } = props;

  return (
    <Header className="Logo">
      <Title className="Title">
        <Link url={url} title={title}>
          {title}
        </Link>
      </Title>
    </Header>
  );
};

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
export { propTypes as LogoPropTypes, defaultProps as LogoDefaultProps };
