import React from "react";
import { storiesOf } from "@storybook/react";

import LoadingWithSuspense from "./LoadingWithSuspense";
import description from "./LoadingWithSuspense.md";

storiesOf("LoadingWithSuspense", module).add(
  "Overview",
  () => <LoadingWithSuspense />,
  {
    notes: { markdown: description }
  }
);
