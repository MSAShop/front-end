// Http
const { createServer } = require('http');

// Next.js
const next = require('next');

// Main core
const routes = require('./src/services/routes');

// -------------------------------------
const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(port, err => {
    if (err) throw err;

    console.log(`> Ready on http://localhost:${port}`);
  });
});
