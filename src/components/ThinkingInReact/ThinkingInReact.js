import React, { useEffect, useState } from "react";
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
 * An impure component example with side effects
 */
const SideEffects = props => {
  /**
   * 2.1 Input params are distorted
   *
   * `props` are protected so they can't be easily distorted
   */

  /**
   * Side effect #1
   *
   * 2.2 External information is used beside input params to produce the return value
   */
  const external = "External info";

  /**
   * Side effect #2
   *
   * 2.3 Additional operations are performed beside the planned functionality
   */
  console.log("props:" + JSON.stringify(props));

  return (
    <ul>
      <li>Impure component props: {JSON.stringify(props)}</li>
      <li>External info in return value: {external}</li>
    </ul>
  );
};

/**
 * Side effects managed through useEffect
 */
const SideEffectsWithUseEffect = props => {
  /**
   * `external` is a side effect
   */
  const [external, setExternal] = useState("Initial value ...");

  /**
   * `external` value is set after 3 seconds to simulate how side effects works in React: in an async way
   *
   * By using `useEffect` the rendering of the component is not suspended, the flow is not distorted. First the component is rendered with the default value then after 3 seconds React automatically updates the component with the new value.
   */
  useEffect(() => {
    setTimeout(function() {
      setExternal("Initial value replaced with useEffect");
    }, 3000);
  }, []);

  return (
    <ul>
      <li>Component props: {JSON.stringify(props)}</li>
      <li>External info in return value with useEffect: {external}</li>
    </ul>
  );
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
      <PureComponent param1="Text" param2={false} />
      <SideEffects param1="Text" param2={false} />
      <SideEffectsWithUseEffect param1="Text" param2={false} />
    </Section>
  );
};

export default ThinkingInReact;
export { PureComponent, SideEffects, SideEffectsWithUseEffect };
