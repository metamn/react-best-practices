import React, { useState } from "react";
import { useQuery } from "./index";

/**
 * Loads the next set of data
 *
 * @param  {Function} fetchMore An Apollo function to fetch more data
 * @param  {Object} data        The data received from Apollo
 * @param  {String} filter      The part of the data to return
 * @param  {Object} variables   The query variables
 * @return {Function}           The load more function
 *
 * @link https://www.apollographql.com/docs/react/features/pagination/
 */
const useLoadMore = (fetchMore, data, filter, variables) => {
  /**
   * Returns an empty function if something is wrong with the data
   */
  if (!data) return () => {};
  if (!data[filter]) return () => {};

  /**
   * Loads more data.
   *
   * @return {Object}  A new set of data
   *
   * It can return two kind of results:
   * - `Next page`: simply loads the next page
   * - `Load more`: keeps old data and adds the new data
   *
   * `Load more` can't be implemented here because is specific to the GraphQL schema.
   * It must be implemented in the parent component.
   * For Posts in WP GraphQL it looks like:
   *
   *```
   *return {
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
   *
   * Notice:
   *
   * - Apollo knows both offset and cursor based navigation.
   * - Here the cursor based variant is implemented, more exactly the Relay style cursor since the backend is WP GraphQL which uses this style
   * - Other servers might require other methods
   */
  function loadMore() {
    fetchMore({
      variables: {
        ...variables,
        cursor: data[filter].pageInfo.endCursor
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult;
        }

        return { ...fetchMoreResult };
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
   * - If there is default data it is returned to be displayed while the real data is loading from the database.
   * - If there is no default data it returns a `Loading...` string. In the caller component this can be catched and replaced by a placeholder.
   */
  if (loading) {
    const loading = "Loading...";

    return defaultValues
      ? { data: defaultValues, loadMore }
      : { data: loading, loadMore };
  }

  /**
   * Logs errors to console
   *
   * After logging returns `defaultValues` otherwise the UI gets broken since the error is not catched just logged.
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
   * Returns data and the pagination function
   */
  return { data: dataFiltered, loadMore };
};

export default useData;
