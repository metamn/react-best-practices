import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import uuid from "uuid";

import { useDataAPI } from "../../hooks";

import Description from "../Description";
import md from "./LoadingDataApiAxios.md";
import { Article as _Article } from "../SemanticHTML";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * How many articles are returned by the API?
   *
   * @link https://hn.algolia.com/api
   */
  numberOfArticlesReturned: PropTypes.number,
  /**
   * How long is the title? The placeholder should mimic the length.
   */
  numberOfCharsForTheTitlePlaceholder: PropTypes.number
};

/**
 * Defines the default props
 */
const defaultProps = {
  numberOfArticlesReturned: 20,
  numberOfCharsForTheTitlePlaceholder: 60
};

/**
 * Styles the component container
 */
const Article = styled(_Article)(props => ({}));

/**
 * Generates placeholders for articles
 */
const Placeholder = props => {
  const {
    numberOfArticlesReturned,
    numberOfCharsForTheTitlePlaceholder
  } = props;

  const title = Array(numberOfCharsForTheTitlePlaceholder).fill("/ ");

  return [...Array(numberOfArticlesReturned)].map((_, i) => {
    const id = uuid.v4();
    return {
      objectID: id,
      url: "#",
      title: title
    };
  });
};

const Articles = props => {
  const data = useDataAPI(
    Placeholder(props),
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
        <li key={item.objectID} class={item.objectID}>
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
