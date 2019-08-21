import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import uuid from "uuid";

import { useDataAPI } from "../../hooks";

import Description from "../Description";
import md from "./LoadingDataApiAxios.md";
import { Article as _Article } from "../SemanticHTML";
import Placeholder, { PlaceholderPropTypes } from "../Placeholder";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The placeholder
   */
  placeholder: PropTypes.shape(PlaceholderPropTypes)
};

/**
 * Defines the default props
 */
const defaultProps = {
  placeholder: {
    format: "text",
    text: {
      numberOfRows: 20,
      rowLength: 60,
      content: "/ "
    }
  }
};

/**
 * Styles the component container
 */
const Article = styled(_Article)(props => ({}));

/**
 * Generates a text placeholder for articles
 */
const PlaceholderText = props => {
  /**
   * Loads the placeholder
   */
  const placeholder = Placeholder(props);

  /**
   * Generates an articles specific placeholder
   */
  const articlesPlaceholder = placeholder.map(placeholder => {
    const { id, text } = placeholder;

    return {
      objectID: id,
      url: "#",
      title: text
    };
  });

  return articlesPlaceholder;
};

/**
 * Displays the articles
 */
const Articles = props => {
  /**
   * Loads props
   */
  const { placeholder } = props;

  /**
   * Loads the data
   */
  const data = useDataAPI(
    PlaceholderText(placeholder),
    "http://hn.algolia.com/api/v1/search?query=redux",
    "hits"
  );

  if (!data) {
    return "There is no data";
  }

  if (data === null) {
    return "Data is null";
  }

  return (
    <ul>
      {data.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};

/**
 * Displays the component
 */
const LoadingDataApiAxios = props => {
  return (
    <Article
      className="LoadingDataApiAxios"
      title="Loading data from an API with Axios"
    >
      <Description file={md} />
      <Articles {...props} />
    </Article>
  );
};

LoadingDataApiAxios.propTypes = propTypes;
LoadingDataApiAxios.defaultProps = defaultProps;

export default LoadingDataApiAxios;
export {
  propTypes as LoadingDataApiAxiosPropTypes,
  defaultProps as LoadingDataApiAxiosDefaultProps
};
