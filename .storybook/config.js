import { configure } from "@storybook/react";

// Load stories into the sidebar
configure(require.context("../src", true, /\.stories\.(mdx)$/), module);
