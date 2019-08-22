import React from "react";
import { storiesOf } from "@storybook/react";

import LoadingDataApiAxiosPlaceholderSVG from "./LoadingDataApiAxiosPlaceholderSVG";
import description from "./LoadingDataApiAxiosPlaceholderSVG.md";

storiesOf("LoadingDataApiAxiosPlaceholderSVG", module).add(
  "Overview",
  () => <LoadingDataApiAxiosPlaceholderSVG />,
  {
    notes: { markdown: description }
  }
);
