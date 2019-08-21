import useDataApi from "use-data-api";

/**
 * Loads data from an API with Axios
 *
 * @param  {Object} defaultValues The default values to return while loading data from the DB
 * @param  {String} query         The URL to the API endpoint to be called
 * @param  {String} filter        The part of the data to return
 * @return {Object}               The data returned
 *
 * Example:
 *
 * ```
 * useDataAPI({}, 'http://hn.algolia.com/api/v1/search?query=redux', 'hits')
 * ```
 *
 * Important notice:
 *
 * This current solution is taylored to get data from Hacker News API which returns `hits`.
 * For other APIs this has to be changed.
 * The `filter` prop has to be used instead of the current hardwired value.
 *
 * Notice:
 *
 * `import {useDataApi as _useDataAPI} from "use-data-api";` was not successful like in the case of `useQuery` in `useData`. That's why this hooks gets this *strange* name: `useDataAPI` instead of `useDataApi`
 *
 * @link https://www.robinwieruch.de/react-hooks-fetch-data/
 * @link https://github.com/the-road-to-learn-react/react-hooks-introduction/tree/master/src/useDataApiHook-external-example
 */
const useDataAPI = (defaultValues, query, filter) => {
  console.log("useDataAPI");

  /**
   * Queries the database
   */
  const [{ data, isLoading, isError }] = useDataApi(query, {
    hits: []
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
    console.log("useDataApi error:" + isError);
    return;
  }

  /**
   * Returns data
   */
  return data.hits;
};

export default useDataAPI;
