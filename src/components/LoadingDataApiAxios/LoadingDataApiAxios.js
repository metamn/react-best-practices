import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import uuid from "uuid";

import { useDataAPI } from "../../hooks";

import Description, { DescriptionPropTypes } from "../Description";
import md from "./LoadingDataApiAxios.md";
import { Article as _Article } from "../SemanticHTML";
import PlaceholderText, { PlaceholderTextPropTypes } from "../PlaceholderText";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The data placeholder
   */
  placeholder: PropTypes.shape(PlaceholderTextPropTypes),
  /**
   * The description
   */
  description: PropTypes.shape(DescriptionPropTypes)
};

/**
 * Defines the default props
 */
const defaultProps = {
  placeholder: {
    numberOfRows: 20,
    rowLength: 60,
    content: "/ "
  },
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
  const [data, doFetch] = useDataAPI(
    ArticlesPlaceholder(placeholder),
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
  const { description } = props;

  return (
    <Article
      className="LoadingDataApiAxios"
      title="Loading data from an API with Axios"
    >
      <Description {...description} />
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
