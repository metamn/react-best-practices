import React from "react";
import { storiesOf } from "@storybook/react";

import LoadingImages from "./LoadingImages";
import description from "./LoadingImages.md";

storiesOf("LoadingImages", module).add("Overview", () => <LoadingImages />, {
  notes: { markdown: description }
});
