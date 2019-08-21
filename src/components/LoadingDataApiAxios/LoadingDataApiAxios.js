import React from "react";
import styled from "styled-components";

import { useDataApi } from "../../hooks";

import { Article as _Article } from "../SemanticHTML";

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
const Article = styled(_Article)(props => ({}));

/**
 * Displays the component
 */
const LoadingDataApiAxios = props => {
  const data = useDataApi(
    null,
    "http://hn.algolia.com/api/v1/search?query=redux"
  );

  return (
    <Article
      className="LoadingDataApiAxios"
      title="Loading data from an API with Axios"
      displayTitle={true}
    ></Article>
  );
};

LoadingDataApiAxios.propTypes = propTypes;
LoadingDataApiAxios.defaultProps = defaultProps;

export default LoadingDataApiAxios;
export {
  propTypes as LoadingDataApiAxiosPropTypes,
  defaultProps as LoadingDataApiAxiosDefaultProps
};
