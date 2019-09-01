import React from "react";
import styled from "styled-components";

import { Section as _Section } from "../SemanticHTML";

/**
 * A pure component example
 */
const PureComponent = props => {
  /**
   * 1. Clear interfaces (props as input param, JSX as return value)
   * 2.1 Input params are not distorted
   * 2.2 No external information is used beside input params to produce the return value
   * 2.3 No additional operations are performed beside the planned functionality
   */
  return <div>Pure component props: {JSON.stringify(props)}</div>;
};

/**
 * Styles the component container
 */
const Section = styled(_Section)(props => ({
  "& h3": {
    fontSize: "125%",
    marginBottom: "var(--lem)"
  }
}));

/**
 * Displays the component
 */
const ThinkingInReact = props => {
  return (
    <Section
      className="ThinkingInReact"
      title="Thinking in React"
      displayTitle={true}
    >
      <PureComponent />
    </Section>
  );
};

export default ThinkingInReact;
export { PureComponent };
