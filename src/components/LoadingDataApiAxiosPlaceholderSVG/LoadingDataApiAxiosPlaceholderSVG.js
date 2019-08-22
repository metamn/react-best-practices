import React, { useState } from "react";
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
 * Displays a load more button
 */
const LoadMore = props => {
  const { page, setPage, doFetch } = props;

  return (
    <form
      onSubmit={event => {
        doFetch(`http://hn.algolia.com/api/v1/search?query=redux&page=${page}`);
        event.preventDefault();
      }}
    >
      <button type="submit">Got to page: </button>
      <input
        type="text"
        value={page}
        onChange={event => setPage(event.target.value)}
      />
    </form>
  );
};

/**
 * Displays the articles
 */
const Articles = props => {
  /**
   * Saves pagination into a state
   */
  const [page, setPage] = useState(1);

  /**
   * Creates the placeholder
   */
  const Placeholder = () => <Code />;

  /**
   * Loads the data
   */
  const [data, doFetch] = useDataAPI(
    null,
    `http://hn.algolia.com/api/v1/search?query=redux&page=${page}`,
    "hits"
  );

  if (!data) {
    return "There is no data";
  }

  if (data === null) {
    return "Data is null";
  }

  return typeof data === "object" ? (
    <>
      <ul>
        {typeof data === "object" &&
          data.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
      </ul>
      <LoadMore page={page} setPage={setPage} doFetch={doFetch} />
    </>
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
