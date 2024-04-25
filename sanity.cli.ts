// sanity.config.js

import { defineCliConfig } from 'sanity/cli';

// Retrieve project ID and dataset from environment variables
const projectId = "production";
const dataset = "p9eo722k";

// Define Sanity CLI configuration
const cliConfig = defineCliConfig({
  api: {
    projectId,
    dataset
  }
});

// Export the CLI configuration
export default cliConfig;
