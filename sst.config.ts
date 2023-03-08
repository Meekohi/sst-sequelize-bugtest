import type { SSTConfig } from "sst"
import MyApi from "./stacks/MyApi.js"

export default {
  config(input) {
    return {
      "name": "bugtest-sst",
      "region": "us-east-1",
      "main": "stacks/index.js"
    }
  },
  stacks(app) {
    app.setDefaultFunctionProps({
      runtime: "nodejs18.x"
    });

    app.stack(MyApi)
  },
} satisfies SSTConfig