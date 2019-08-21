import React from "react";
import { storiesOf } from "@storybook/react";

import LoadingData from "./LoadingData";
import description from "./LoadingData.md";

storiesOf("LoadingData", module).add("Overview", () => <LoadingData />, {
  notes: { markdown: description }
});
