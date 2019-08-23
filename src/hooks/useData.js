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
        // This is Relay style cursor pagination: https://www.apollographql.com/docs/react/features/pagination/#relay-style-cursor-pagination
        cursor: data.posts.pageInfo.endCursor
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult;
        }

        /**
         * In case of `load more` we should return more edges like:
         *
         * ```
         * return {
           ...fetchMoreResult,
           posts: {
             edges: [
               ...previousResult.posts.edges,
               ...fetchMoreResult.posts.edges
             ]
           }
         };
         * ```
         *
         * But this throws an error right now ...
		 */

        return {
          ...fetchMoreResult
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
   * - If there is default data it returns while the real data is loaded from the database.
   * - If there is no default data returns a `Loading...` string
   */
  if (loading) {
    const loading = "Loading...";

    return defaultValues
      ? { data: defaultValues, loadMore }
      : { data: loading, loadMore };
  }

  /**
   * Logs error to console
   */
  if (error) {
    console.log("useQuery error:" + error);
    return;
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
