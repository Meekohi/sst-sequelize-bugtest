# sst-url-issue

Demonstration repo showing issue "URL is not a constructor" when migrating from sst v1 to sst v2 with Sequelize.
You don't need working database because the issue happens before it connects.

```
yarn
yarn run sst dev
```

Ping the endpoint `/users/me` and you'll see e.g.:

```
Error: URL is not a constructor
       at file:///Users/username/sst-url-issue/.sst/artifacts/c891fa8d3f44b55ab7bec2a65d5658a30800dcc9d6/src/users.mjs:4:41
       at ModuleJob.run (node:internal/modules/esm/module_job:193:25)
       at async Promise.all (index 0)
       at async ESMLoader.import (node:internal/modules/esm/loader:530:24)
       at async file:///Users/username/sst-url-issue/node_modules/sst/support/nodejs-runtime/index.mjs:14608:15
```