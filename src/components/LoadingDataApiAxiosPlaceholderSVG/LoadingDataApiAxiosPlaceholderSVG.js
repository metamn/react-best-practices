import React, { useState } from "react";
import styled from "styled-components";
import { Code } from "react-content-loader";

import { useDataAPI } from "../../hooks";

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
const Article = styled(_Article)(props => ({
  "& h3": {
    fontSize: "125%",
    margin: "var(--lem) 0"
  }
}));

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
      <button type="submit">Go to page: </button>
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
  const { data, doFetch } = useDataAPI(
    null,
    `http://hn.algolia.com/api/v1/search?query=redux&page=${page}`,
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

  /**
   * Returns either the data or the placeholder
   */
  return typeof data === "object" ? (
    <>
      <ul>
        {data.map(item => {
          const { objectID, url, title } = item;

          return (
            <li key={objectID}>
              <a href={url}>{title}</a>
            </li>
          );
        })}
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
  return (
    <Article
      className="LoadingDataApiAxiosPlaceholderSVG"
      title="Loading data from an API with Axios using an SVG Placeholder"
      displayTitle={true}
    >
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
