import React from "react";
import styled from "styled-components";

import LoadingDataApiAxios from "../LoadingDataApiAxios";
import LoadingDataGraphQLApollo from "../LoadingDataGraphQLApollo";
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
const LoadingData = props => {
  return (
    <Section className="LoadingData" title="Loading Data" displayTitle={true}>
      <LoadingDataApiAxios />
      <LoadingDataGraphQLApollo />
    </Section>
  );
};

LoadingData.propTypes = propTypes;
LoadingData.defaultProps = defaultProps;

export default LoadingData;
export {
  propTypes as LoadingDataPropTypes,
  defaultProps as LoadingDataDefaultProps
};
