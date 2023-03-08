import { Api } from "sst/constructs";

export default function MyApi({stack}){
  const api = new Api(stack, "Api", {
    routes: {
      "GET /users/me": "src/users.me",
    },
  });

  stack.addOutputs({
    "ApiEndpoint": api.url,
  });
}
