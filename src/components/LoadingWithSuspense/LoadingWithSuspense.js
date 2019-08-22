import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Code } from "react-content-loader";

const Logo = lazy(() => import("../Logo"));
const loader = () => <Code />;

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
const Container = styled("div")(props => ({
  width: "400px"
}));

/**
 * Displays the component
 */
const LoadingWithSuspense = props => {
  return (
    <Container className="LoadingWithSuspense">
      <Suspense fallback={loader()}>
        <Logo />
      </Suspense>
    </Container>
  );
};

LoadingWithSuspense.propTypes = propTypes;
LoadingWithSuspense.defaultProps = defaultProps;

export default LoadingWithSuspense;
export {
  propTypes as LoadingWithSuspensePropTypes,
  defaultProps as LoadingWithSuspenseDefaultProps
};
