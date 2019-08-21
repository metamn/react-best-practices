import React from "react";
import { storiesOf } from "@storybook/react";

import LoadingDataGraphQLApollo from "./LoadingDataGraphQLApollo";
import description from "./LoadingDataGraphQLApollo.md";

storiesOf("LoadingDataGraphQLApollo", module).add(
  "Overview",
  () => <LoadingDataGraphQLApollo />,
  {
    notes: { markdown: description }
  }
);
