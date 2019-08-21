import React from "react";
import { storiesOf } from "@storybook/react";

import PlaceholderText from "./PlaceholderText";
import description from "./PlaceholderText.md";

storiesOf("PlaceholderText", module).add(
  "Overview",
  () => <PlaceholderText />,
  {
    notes: { markdown: description }
  }
);
