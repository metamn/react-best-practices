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
const WhatIsReact = props => {
  return <Container className="WhatIsReact">WhatIsReact</Container>;
};

WhatIsReact.propTypes = propTypes;
WhatIsReact.defaultProps = defaultProps;

export default WhatIsReact;
export {
  propTypes as WhatIsReactPropTypes,
  defaultProps as WhatIsReactDefaultProps
};
