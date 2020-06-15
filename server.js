const expressApp = require("./app");

const port = 8080;
expressApp.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
