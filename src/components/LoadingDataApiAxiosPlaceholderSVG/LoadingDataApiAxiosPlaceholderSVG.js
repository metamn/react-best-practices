import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Code } from "react-content-loader";

import { useDataAPI } from "../../hooks";

import Description, { DescriptionPropTypes } from "../Description";
import md from "./LoadingDataApiAxiosPlaceholderSVG.md";

import { Article as _Article } from "../SemanticHTML";

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
const Article = styled(_Article)(props => ({}));

/**
 * Displays the articles
 */
const Articles = props => {
  /**
   * Creates the placeholder
   */
  const Placeholder = () => <Code />;

  /**
   * Loads the data
   */
  const data = useDataAPI(
    null,
    "http://hn.algolia.com/api/v1/search?query=redux",
    "hits"
  );

  if (!data) {
    return "There is no data";
  }

  if (data === null) {
    return "Data is null";
  }

  console.log("data:" + JSON.stringify(data));
  console.log(typeof data);

  return typeof data === "object" ? (
    <ul>
      {typeof data === "object" &&
        data.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
    </ul>
  ) : (
    <Placeholder />
  );
};

/**
 * Displays the component
 */
const LoadingDataApiAxiosPlaceholderSVG = props => {
  const { description } = props;

  return (
    <Article
      className="LoadingDataApiAxiosPlaceholderSVG"
      title="Loading data from an API with Axios using an SVG Placeholder"
    >
      <Description {...description} />
      <Articles />
    </Article>
  );
};

LoadingDataApiAxiosPlaceholderSVG.propTypes = propTypes;
LoadingDataApiAxiosPlaceholderSVG.defaultProps = defaultProps;

export default LoadingDataApiAxiosPlaceholderSVG;
export {
  propTypes as LoadingDataApiAxiosPlaceholderSVGPropTypes,
  defaultProps as LoadingDataApiAxiosPlaceholderSVGDefaultProps
};
