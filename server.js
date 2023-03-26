// Your code here
const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content_Type", "text/html");
  res.statusCode = 200;
  res.write("<!DOCTYPE html>");
  res.write("<html lang='en'>");
  res.write("<head>");
  res.write('<meta charset="UTF-8">');
  res.write(
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
  );
  res.write("  <title>Hello World!</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<h1>Hello there!</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

const port = 4000;

server.listen(port, () =>
  console.log("the server is listening to the port: ", port)
);
