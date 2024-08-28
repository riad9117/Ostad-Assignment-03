const http = require("http");

const fs = require("fs");

const PORT = 5500;

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200);
      res.write("This is Home page");
      res.end();
    } else if (req.url === "/about") {
      res.writeHead(200);
      res.write("This is About page");
      res.end();
    } else if (req.url === "/contact") {
      res.writeHead(200);
      res.write("This is Contact page");
      res.end();
    } else if (req.url === "/file-write") {
      fs.writeFile("demo.txt", "hello world", (err) => {
        if (err) {
          res.writeHead(500);
          res.write(err.message);
        } else {
          res.writeHead(201);
          res.write("Successfully written");
        }
        res.end();
      });
    } else {
      res.writeHead(404);
      res.write("page doesn't exist");
      res.end();
    }
  })
  .listen(PORT, () => {
    console.log(`It is listening on port ${PORT}.`);
  });
