import React from "react";
import { storiesOf } from "@storybook/react";

import LoadingDataGraphQLApolloPagination from "./LoadingDataGraphQLApolloPagination";
import description from "./LoadingDataGraphQLApolloPagination.md";

storiesOf("LoadingDataGraphQLApolloPagination", module).add(
  "Overview",
  () => <LoadingDataGraphQLApolloPagination />,
  {
    notes: { markdown: description }
  }
);
