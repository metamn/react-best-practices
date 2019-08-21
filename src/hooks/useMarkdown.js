import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";

/**
 * Loads the content of a markdown file into a React component
 *
 * @param  {Object} props The imported markdown file and the placeholder
 * @return {Object}       The rendered markdown file
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
const useMarkdown = props => {
  const { file, placeholder } = props;
  const [source, setSource] = useState(placeholder);

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
