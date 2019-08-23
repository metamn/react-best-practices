import { useQuery } from "./index";

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

 useData({title: "Ioan Chivu", url: "http://inu.ro"}, query, 'generalSettings', variables)
 * ```
 *
 */
const useData = (defaultValues, query, filter, variables = {}) => {
  /**
   * Queries the database
   */
  const { data, error, loading, fetchMore } = useQuery(query, variables);

  /**
   * If there is default data it returns while the real data is loaded from the database.
   * If there is no default data returns a `Loading...` string
   */
  if (loading) {
    const loading = "Loading...";

    return defaultValues
      ? { data: defaultValues, fetchMore }
      : { data: loading, fetchMore };
  }

  /**
   * Logs to console when there is an error
   */
  if (error) {
    console.log("useQuery error:" + error);
    return;
  }

  /**
   * Returns data
   */
  const dataFiltered = data ? data[filter] : {};

  return { data: dataFiltered, fetchMore };
};

export default useData;
