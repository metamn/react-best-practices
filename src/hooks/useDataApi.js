import React from "react";
import { useDataApi as _useDataApi } from "use-data-api";

/**
 * Loads data from an API with Axios
 *
 * @param  {Object} defaultValues The default values to return while loading data from the DB
 * @param  {Object} query         The API query URL to call
 * @return {Object}               The data returned
 *
 * Example:
 * ```
 * useDataApi('Loading...', '"http://hn.algolia.com/api/v1/search?query=redux"')
 *
 * @link https://www.robinwieruch.de/react-hooks-fetch-data/
 * @link https://github.com/the-road-to-learn-react/react-hooks-introduction/tree/master/src/useDataApiHook-external-example
 */
const useDataApi = (defaultValues, query) => {
  /**
   * Queries the database
   */
  const [{ data, isLoading, isError }, doFetch] = _useDataApi(query, {
    items: []
  });

  /**
   * Returns default data while real data is loaded from the database
   */
  if (isLoading) {
    return defaultValues;
  }

  /**
   * Logs to console when there is an error
   */
  if (isError) {
    console.log("useDataApi error:" + error);
    return;
  }

  /**
   * Returns data
   */
  return data.items;
};

export default useDataApi;
