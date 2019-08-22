import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Description, { DescriptionPropTypes } from "../Description";
import md from "./LoadingData.md";
import LoadingDataApiAxios from "../LoadingDataApiAxios";
import LoadingDataGraphQLApollo from "../LoadingDataGraphQLApollo";
import { Section as _Section } from "../SemanticHTML";
import PlaceholderText from "../PlaceholderText";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The description
   */
  description: PropTypes.shape(DescriptionPropTypes)
};

/**
 * Defines the default props
 */
const defaultProps = {
  description: {
    file: md,
    placeholder: {
      numberOfRows: 2,
      rowLength: 30,
      content: "/ "
    }
  }
};

/**
 * Styles the component container
 */
const Section = styled(_Section)(props => ({}));

/**
 * Displays the component
 */
const LoadingData = props => {
  const { description } = props;

  return (
    <Section className="LoadingData" title="Loading Data">
      <Description {...description} />
      {/*
      <LoadingDataApiAxios />
      <LoadingDataGraphQLApollo />
	  */}
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
