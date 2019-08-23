import { useQuery as _useQuery } from "@apollo/react-hooks";

/**
 * Loads data from a GraphQL endpoint with Apollo
 *
 * @param  {Object} schema         The graphql schema
 * @param  {Object} [variables={}] The graphql variables
 * @param  {Object} [options={}]   Additional Apollo specific options
 * @return {Object}                The data and additional stuff
 *
 * Example:
 *
 * ```
 * const schema = gql`
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

  const options = {
  // Any from https://www.apollographql.com/docs/react/essentials/queries/#usequery-api
   }

   const { data, loading, fetchMore } = useQuery(schema, variables, options);
 * ```
 *
 * @link https://www.apollographql.com/docs/react/essentials/queries/
 */
const useQuery = (schema, variables = {}, options = {}) => {
  /**
   * Runs the query
   */
  const { data, loading, error, fetchMore } = _useQuery(schema, {
    variables,
    ...options
  });

  /**
   * Returns all.
   *
   * Handling errors and the `loading` state is managed in the caller.
   */
  return { data, loading, error, fetchMore };
};

export default useQuery;
