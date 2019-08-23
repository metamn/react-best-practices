import React, { useState } from "react";
import { useQuery } from "./index";

/**
 * Loads the next page
 *
 * @param  {[type]} fetchMore [description]
 * @param  {[type]} data      [description]
 * @param  {[type]} variables [description]
 * @return {[type]}           [description]
 */
const useLoadMore = (fetchMore, data, filter, variables) => {
  function loadMore() {
    fetchMore({
      variables: {
        ...variables,
        // This is Relay-style cursor pagination: https://www.apollographql.com/docs/react/features/pagination/#relay-style-cursor-pagination
        cursor: data.posts.pageInfo.endCursor
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult;
        }

        /**
         * We can return two kind of results here: 'Load more' or 'Next page'
         *
         * Next page:
         * ```
         * return {...fetchMoreResult}
         * ```
         *
         * Load more:
         * ```
         * return {
           posts: {
             __typename: previousResult.posts.__typename,
             pageInfo: fetchMoreResult.posts.pageInfo,
             edges: [
               ...previousResult.posts.edges,
               ...fetchMoreResult.posts.edges
             ]
           }
         };
		 ```
         */

        return {
          posts: {
            __typename: previousResult.posts.__typename,
            pageInfo: fetchMoreResult.posts.pageInfo,
            edges: [
              ...previousResult.posts.edges,
              ...fetchMoreResult.posts.edges
            ]
          }
        };
      }
    });
  }

  return loadMore;
};

/**
 * Loads data from GraphQL with `useQuery`
 *
 * @param  {Object} defaultValues The default values to return while loading data from the DB
 * @param  {Object} query         The GraphQL query to execute
 * @param  {String} filter        The part of the data to return
 * @param  {Array}  variables     The query variable
 * @return {Object}               The data returned
 *
 * Example:
 *
 * ```
 * const defaultValues = {
 * 	title: "Ioan Chivu",
 * 	url: "http://inu.ro"
 * }
 *
 * const query = gql`
   query generalSettings {
     generalSettings {
       title
       url
       description
     }
   }
 `;

 const variables = {
    hideEmpty: true
  }

 useData(defaultValues, query, 'generalSettings', variables)
 * ```
 *
 */
const useData = (defaultValues, query, filter, variables = {}) => {
  /**
   * Queries the database
   */
  const { data, error, loading, fetchMore } = useQuery(query, variables);

  /**
   * Handles pagination
   */
  const loadMore = useLoadMore(fetchMore, data, filter, variables);

  /**
   * Manages the loading state
   *
   * - If there is default data it is returned while the real data is loaded from the database.
   * - If there is no default data it returns a `Loading...` string. In the caller component this can be catched and replaced by a placeholder.
   */
  if (loading) {
    const loading = "Loading...";

    return defaultValues
      ? { data: defaultValues, loadMore }
      : { data: loading, loadMore };
  }

  /**
   * Logs error to console
   *
   * Returns `defaultValues` otherwise the UI gets broken since the error is not catched just logged.
   *
   * @link: https://www.apollographql.com/docs/react/features/error-handling/
   */
  if (error) {
    error.graphQLErrors.map(err => {
      const { message } = err;
      console.log("useData error: " + message);
    });

    return { data: defaultValues, loadMore };
  }

  /**
   * Filters the data
   */
  const dataFiltered = data ? data[filter] : {};

  /**
   * Returns data and pagination
   */
  return { data: dataFiltered, loadMore };
};

export default useData;
