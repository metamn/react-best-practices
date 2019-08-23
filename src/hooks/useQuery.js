import React from "react";
import { useQuery as _useQuery } from "@apollo/react-hooks";

/**
 * Loads data from a GraphQL database with Apollo
 *
 * @param  {Object} schema         The graphql schema
 * @param  {Object} [variables={}] The graphql variables
 * @param  {Object} [options={}]   Additional options
 * @return {Object}                The data and additional stuff
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
   * Displays error
   */
  if (error) return <p>ERROR: {error.message}</p>;

  /**
   * Returns the data, the pagination handlers and more
   */
  return { data, loading, fetchMore };
};

export default useQuery;
