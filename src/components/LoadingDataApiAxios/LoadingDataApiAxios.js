import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useDataAPI } from "../../hooks";

import { Article as _Article } from "../SemanticHTML";
import PlaceholderText, { PlaceholderTextPropTypes } from "../PlaceholderText";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The data placeholder
   */
  placeholder: PropTypes.shape(PlaceholderTextPropTypes)
};

/**
 * Defines the default props
 */
const defaultProps = {
  placeholder: {
    numberOfRows: 20,
    rowLength: 60,
    content: "/ "
  }
};

/**
 * Styles the component container
 */
const Article = styled(_Article)(props => ({
  "& h3": {
    fontSize: "125%",
    margin: "var(--lem) 0"
  }
}));

/**
 * Generates a text placeholder for articles
 */
const ArticlesPlaceholder = props => {
  /**
   * Loads the placeholder
   */
  const placeholder = PlaceholderText(props);

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
  const { data } = useDataAPI(
    ArticlesPlaceholder(placeholder),
    "http://hn.algolia.com/api/v1/search?query=redux",
    "hits"
  );

  /**
   * Manages errors
   */
  if (!data) {
    return "There is no data";
  }

  if (data === null) {
    return "Data is null";
  }

  return (
    <ul>
      {data &&
        data.map(item => {
          const { objectID, url, title } = item;

          return (
            <li key={objectID}>
              <a href={url}>{title}</a>
            </li>
          );
        })}
    </ul>
  );
};

/**
 * Displays the component
 */
const LoadingDataApiAxios = props => {
  const { description } = props;

  return (
    <Article
      className="LoadingDataApiAxios"
      title="Loading data from an API with Axios"
      displayTitle={true}
    >
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
