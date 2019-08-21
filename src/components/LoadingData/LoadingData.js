import React from "react";
import styled from "styled-components";

import { useMarkdown } from "../../hooks";

import description from "./LoadingData.md";
import LoadingDataApiAxios from "../LoadingDataApiAxios";
import LoadingDataGraphQLApollo from "../LoadingDataGraphQLApollo";
import { Section as _Section, Article as _Article } from "../SemanticHTML";

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
 * Styles the markdown container
 */
const Article = styled(_Article)(props => ({}));

/**
 * Displays the component
 */
const LoadingData = props => {
  const markdown = useMarkdown(description);

  return (
    <Section className="LoadingData" title="Loading Data">
      <Article className="Description" title="Description">
        {markdown}
      </Article>
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
