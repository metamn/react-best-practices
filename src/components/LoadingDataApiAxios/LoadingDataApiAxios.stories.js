import React from "react";
import { storiesOf } from "@storybook/react";

import LoadingDataApiAxios from "./LoadingDataApiAxios";
import description from "./LoadingDataApiAxios.md";

storiesOf("LoadingDataApiAxios", module).add(
  "Overview",
  () => <LoadingDataApiAxios />,
  {
    notes: { markdown: description }
  }
);
