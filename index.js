const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  /**
   * The thing over here is that use
   * -> npm run dev
   * to know what dev is go to package.json and in scripts you will see "dev": "nodemon index"
   * nodemon refresher the server with every small change made and saved else with node you would need to restart the server
   *
   */
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home </h1>");
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));
