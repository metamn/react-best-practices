import React from "react";
import { storiesOf } from "@storybook/react";

import Description from "./Description";
import description from "./Description.md";

storiesOf("Description", module).add("Overview", () => <Description />, {
  notes: { markdown: description }
});
