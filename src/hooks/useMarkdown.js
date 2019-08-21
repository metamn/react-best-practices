import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";

/**
 * Loads the content of a markdown file into a React component
 *
 * @param  {String} file The imported markdown file
 * @return {Object}      The rendered markdown file
 *
 * Example:
 *
 * ```
 * import { useMarkdown } from "../../hooks";
 * import description from "./description.md";
 *
 * const markdown = useMarkdown(description);
 *
 * return {markdown}
 * ```
 */
const useMarkdown = file => {
  const [source, setSource] = useState();

  useEffect(() => {
    fetch(file)
      .then(response => response.text())
      .then(text => {
        setSource(text);
      });
  });

  return <Markdown source={source} />;
};

export default useMarkdown;
