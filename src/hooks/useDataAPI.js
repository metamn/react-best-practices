import useDataApi from "use-data-api";

/**
 * Loads data from an API with Axios.
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
  /**
   * Queries the database
   */
  const [{ data, isLoading, isError }, doFetch] = useDataApi(query, {
    hits: []
  });

  /**
   * Manages the loading state
   *
   * - If there is default data it is returned to be displayed while the real data is loading from the database.
   * - If there is no default data it returns a `Loading...` string. In the caller component this can be catched and replaced by a placeholder.
   */
  if (isLoading) {
    const loading = "Loading...";

    return defaultValues
      ? { data: defaultValues, doFetch }
      : { data: loading, doFetch };
  }

  /**
   * Logs errors to console
   *
   * After logging returns `defaultValues` otherwise the UI gets broken since the error is not catched just logged.
   *
   * The `use-data-api` doesn't return error messages just an error flag.
   * Errors must be handled in the parent component.
   *
   * @link: https://www.robinwieruch.de/react-hooks-fetch-data/
   */
  if (isError) {
    console.log("useDataAPI error");

    return { data: defaultValues, doFetch };
  }

  /**
   * Filters the data
   */
  const dataFiltered = data ? data[filter] : {};

  /**
   * Returns data and the pagination function
   */
  return { data: dataFiltered, doFetch };
};

export default useDataAPI;
