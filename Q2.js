// Importing the required modules
const http = require("http");
const url = require("url");

// Define the port for the server to listen on
// You can customize the port, e.g., use 4000, 5000, or set it in the .env file
const PORT = 3000;

// Create the HTTP server with routing
// This simple HTTP server handles different routes: "/", "/about", and returns a 404 for non-existing routes
const server = http.createServer((req, res) => {
  // Log the request method and URL for monitoring purposes
  // You can inspect the request method and server URL here
  console.log(`[${new Date()}] ${req.method} ${req.url}`);

  // Parse the URL to handle different routes
  const parsedUrl = url.parse(req.url, true);

  // Handle different routes
  if (parsedUrl.pathname === "/") {
    // Root route: Displays a welcome message for the root page
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      `Welcome to the root page!<br />
      Go to <a href="/about">About Us</a>
    `);
  } else if (parsedUrl.pathname === "/about") {
    // About route: Provides project and creator details
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      `This is the about page.
        The root page welcomes users, and the /about route provides details about the project.
        Go to <a href="/">Home</a>
        `    
    );
  } else {
    // Handle 404 for non-existing routes (wrong URLs)
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
