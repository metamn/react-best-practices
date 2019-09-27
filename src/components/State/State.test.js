import React from "react";
import { Machine } from "xstate";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { createModel } from "@xstate/test";
import { assert } from "chai";
import merge from "deepmerge";

import {
  StateWithMachine,
  menuMachineDefinition,
  openMenu,
  closeMenu
} from "./State";

describe("StateWithMachine", () => {
  /**
   * Defines the tests for the menuMachine
   */
  const menuMachineTests = {
    states: {
      closed: {
        meta: {
          test: ({ getByLabelText }) => {
            /**
             * Every state has to have a test method associated to verify if the machine is in this current state
             *
             * - It uses the `assert` method from https://www.chaijs.com/api/assert/#method_equal
             * - It uses the `getByLabelText` method from `https://testing-library.com/docs/dom-testing-library/api-queries`
             *
             * - In the component's render method we have a line where the current state is displayed:
             * `<span aria-label="state">{state.value}</span>`
             * - `getByLabelText('state')` will return: `<span aria-label="state">closed</span>`
             */
            const status = getByLabelText("state");
            assert.equal(status.textContent, "closed");
          }
        }
      },
      opening: {
        meta: {
          test: ({ getByLabelText }) => {
            const status = getByLabelText("state");
            assert.equal(status.textContent, "opening");
          }
        }
      },
      open: {
        meta: {
          test: ({ getByLabelText }) => {
            const status = getByLabelText("state");
            assert.equal(status.textContent, "open");
          }
        }
      },
      closing: {
        meta: {
          test: ({ getByLabelText }) => {
            const status = getByLabelText("state");
            assert.equal(status.textContent, "closing");
          }
        }
      }
    }
  };

  /**
   * Adds tests to the menuMachine
   */
  const menuMachineWithTests = merge(menuMachineDefinition, menuMachineTests);

  /**
   * Creates the Machine
   */
  const testMachine = Machine(menuMachineWithTests, {
    services: {
      openMenu: (context, event) =>
        new Promise(resolve => setTimeout(() => resolve(), 100)),
      closeMenu: (context, event) =>
        new Promise(resolve => setTimeout(() => resolve(), 100))
    }
  });

  /**
   * Creates the test model
   */
  const testModel = createModel(testMachine).withEvents({
    OPEN: ({ getByLabelText }) => {
      fireEvent.click(getByLabelText("state-switcher-button"));
    },
    CLOSE: ({ getByLabelText }) => {
      fireEvent.click(getByLabelText("state-switcher-button"));
    }
  });

  /**
   * Gets test plans to all states via the simple paths traversal algorithm
   */
  const testPlans = testModel.getSimplePathPlans();

  /**
   * Generates tests for each test plan
   */
  testPlans.forEach(plan => {
    describe(plan.description, () => {
      // Do any cleanup work after testing each path
      afterEach(cleanup);

      plan.paths.forEach(path => {
        it(path.description, async () => {
          // Test setup
          const rendered = render(<StateWithMachine />);

          // Test execution
          await path.test(rendered);
        });
      });
    });
  });

  /**
   * Generates a coverage test
   * - This will fail if not all states are covered during the test
   */
  it("coverage", () => {
    testModel.testCoverage();
  });
});
