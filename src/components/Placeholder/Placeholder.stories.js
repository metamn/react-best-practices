import React from "react";
import { storiesOf } from "@storybook/react";

import Placeholder from "./Placeholder";
import description from "./Placeholder.md";

storiesOf("Placeholder", module).add("Overview", () => <Placeholder />, {
  notes: { markdown: description }
});
