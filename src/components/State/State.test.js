import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { createModel } from "@xstate/test";

import { StateWithMachine, menuMachine } from "./State";

describe("StateWithMachine", () => {
  /**
   * Creates the test model
   */
  const testModel = createModel(menuMachine);

  /**
   * Tests the events in the test model
   */
  testModel.withEvents({
    OPEN: ({ getByText }) => {
      fireEvent.click(getByText("Good"));
    },
    CLOSE: ({ getByTestId }) => {
      fireEvent.click(getByTestId("close-button"));
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
