import React, { useState, useReducer, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Machine } from "xstate";
import { useMachine } from "@xstate/react";
import { TweenMax, Elastic } from "gsap";

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
   * Sets up state
   */
  const [name, setName] = useState("John");

  /**
   * Declares a ref to be able to access the input text value
   */
  let inputTextRef = useRef(null);

  /**
   * Handles the name change click
   */
  const handleClick = () => {
    const value = inputTextRef.current.value;
    setName(value);
  };

  return (
    <>
      <h4>Simple state with `useState`</h4>
      <p>
        Use when state is independent, ie. next state doesn't depends on a
        previous state.
      </p>
      <div className="Example">
        <p>State: {name}</p>
        <p>
          <input type="text" value="Johanna" ref={inputTextRef} />
          <input
            type="button"
            value="Set state"
            onClick={() => handleClick()}
          ></input>
        </p>
      </div>
    </>
  );
};

/**
 * State with useReducer
 */
const StateWithReducer = () => {
  /**
   * The initial state of the menu
   */
  const initialState = "closed";

  /**
   * The reducer function
   */
  const reducer = (state, action) => {
    switch (action) {
      case "open":
        return "opened";
      case "close":
        return "closed";
      default:
        throw new Error();
    }
  };

  /**
   * Sets up state management
   */
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * Sets up button text
   */
  const buttonText = state === "closed" ? "Open" : "Close";

  /**
   * Handles the click
   */
  const handleClick = () => {
    const action = state === "closed" ? "open" : "close";
    dispatch(action);
  };

  return (
    <>
      <h4>Complex state with `useReducer`</h4>
      <p>
        Use when state is sequential, ie next state depends on a previous state.
      </p>
      <p>Here we have 2 interconnected states: closed, open.</p>
      <div className="Example Container">
        <div className={`Menu ${state}`}>
          <input
            type="button"
            value={buttonText}
            onClick={() => handleClick()}
          />
        </div>
        <div className="Content">
          <p>State: {state}</p>
        </div>
      </div>
    </>
  );
};

/**
 * Defines the Menu state machine
 */
const menuMachineDefinition = {
  initial: "closed",
  states: {
    closed: {
      on: {
        OPEN: "opening"
      }
    },
    opening: {
      on: {
        CLOSE: "closing"
      },
      invoke: {
        src: "openMenu",
        onDone: { target: "open" }
      }
    },
    open: {
      on: {
        CLOSE: "closing"
      }
    },
    closing: {
      on: {
        OPEN: "opening"
      },
      invoke: {
        src: "closeMenu",
        onDone: { target: "closed" }
      }
    }
  }
};

/**
 * Defines the open menu service for Machine
 */
const openMenu = element => (context, event) => {
  return new Promise(resolve => {
    TweenMax.to(element, 0.5, {
      width: 300,
      backdropFilter: "blur(2px)",
      ease: Elastic.easeOut.config(1, 1),
      onComplete: resolve
    });
  });
};

/**
 * Defines the close menu service for Machine
 */
const closeMenu = element => (context, event) => {
  return new Promise(resolve => {
    TweenMax.to(element, 0.5, {
      width: 125,
      backdropFilter: "blur(0px)",
      ease: Elastic.easeOut.config(1, 1),
      onComplete: resolve
    });
  });
};

/**
 * State with useMachine
 */
const StateWithMachine = () => {
  /**
   * Sets au a ref to the menu
   */
  const menuRef = useRef();

  /**
   * Sets up the state machine for the menu
   */
  const menuMachine = Machine(menuMachineDefinition);

  /**
   * Sets up state management
   */
  const [state, dispatch] = useMachine(menuMachine, {
    services: {
      openMenu: (context, event) => openMenu(menuRef.current),
      closeMenu: (context, event) => closeMenu(menuRef.current)
    }
  });

  /**
   * Sets up button text
   */
  const buttonText =
    state.matches("open") || state.matches("opening") ? "Close" : "Open";

  /**
   * Handles the click
   */
  const handleClick = () => {
    /**
     * Calculates the next state
     */
    const nextState =
      state.matches("open") || state.matches("opening") ? "CLOSE" : "OPEN";

    dispatch(nextState);
  };

  return (
    <>
      <h4>Complex state with `useMachine`</h4>
      <p>
        Use when state is sequential, ie next state depends on a previous state.
      </p>
      <p>
        Here we have 4 interconnected states: closed, opening, open, closing.
      </p>
      <div className="Example Container">
        <div className={`Menu ${state.value}`} ref={menuRef}>
          <input
            type="button"
            value={buttonText}
            aria-label="state-switcher-button"
            onClick={() => handleClick()}
          />
        </div>
        <div className="Content">
          <p>
            State: <span aria-label="state">{state.value}</span>
          </p>
        </div>
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
  "& .Example": {
    border: "1px solid lightgray",
    padding: "1.25em",
    margin: "1.25em"
  },
  "& .Container": {
    width: "90%",
    minHeight: "33vh",
    display: "flex"
  },
  "& .Menu": {
    background: "grey",
    padding: "1.25em",

    ["&.opened"]: {
      minWidth: "33vw"
    }
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
      <StateWithMachine />
    </Article>
  );
};

State.propTypes = propTypes;
State.defaultProps = defaultProps;

export default State;
export {
  SimpleState,
  StateWithMachine,
  StateWithReducer,
  menuMachineDefinition,
  openMenu,
  closeMenu
};
