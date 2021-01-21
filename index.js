const fs = require("fs");
const http = require("http");
const url = require("url");

const json = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {
  const pathName = url.parse(req.url, true).pathname;
  const id = url.parse(req.url, true).query.id;

  if (pathName === "/" || pathName === "/products") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.end("Home page");
  } else if (pathName === "/laptop" && id < laptopData.length) {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.end(`Laptop page for laptop ${id}`);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("404");
  }
});

server.listen(1337, "localhost", () => {
  console.log("Listening for requests now");
});
