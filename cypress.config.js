import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";

import preprocessor from "@badeball/cypress-cucumber-preprocessor";
const { addCucumberPreprocessorPlugin } = preprocessor;

import createESBuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";


export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      // implement node event listeners here

      await addCucumberPreprocessorPlugin(on, config);

      on("file:preprocessor",
        createBundler({
          plugins: [createESBuildPlugin.default(config)],
        })
      );

      // Return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});
