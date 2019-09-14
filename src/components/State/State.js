import React, { useState, useReducer } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Article as _Article } from "../SemanticHTML";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Simple state
 */
const SimpleState = () => {
  /**
   * Declares the state
   */
  const [name, setName] = useState("John");

  /**
   * Declares a ref to be able to access the input text value
   */
  let inputTextRef = React.createRef();

  /**
   * Handles the name change click
   */
  const handleClick = () => {
    const value = inputTextRef.current.value;
    setName(value);
  };

  return (
    <>
      <h4>Simple state</h4>
      <p>Name: {name}</p>
      <p>
        <input type="text" value="Johanna" ref={inputTextRef} />
        <input
          type="button"
          value="Set name"
          onClick={() => handleClick()}
        ></input>
      </p>
    </>
  );
};

/**
 * State with useReducer
 */
const StateWithReducer = () => {
  return (
    <>
      <h4>State with useReducer</h4>
      <div className="Container">
        <div className="Menu">
          <input type="button" value="Open" />
        </div>
        <div className="Content">Content</div>
      </div>
    </>
  );
};

/**
 * Styles the component container
 */
const Article = styled(_Article)(props => ({
  "& h3": {
    fontSize: "125%",
    margin: "var(--lem) 0"
  },
  "& h4": {
    fontWeight: "bold",
    margin: "var(--lem) 0"
  },
  "& .Container": {
    width: "90%",
    minHeight: "33vh",
    border: "1px solid lightgray",
    padding: "1.25em",
    margin: "1.25em",
    display: "flex"
  },
  "& .Menu": {
    background: "grey",
    padding: "1.25em"
  },
  "& .Content": {
    marginLeft: "1.25em",
    padding: "1.25em"
  }
}));

/**
 * Displays the component
 */
const State = props => {
  return (
    <Article className="State" title="State" displayTitle={true}>
      <SimpleState />
      <StateWithReducer />
    </Article>
  );
};

State.propTypes = propTypes;
State.defaultProps = defaultProps;

export default State;
export { propTypes as StatePropTypes, defaultProps as StateDefaultProps };
