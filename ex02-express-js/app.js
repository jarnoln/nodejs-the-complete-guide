// Core packages
const http = require('http');

// 3rd party packages
const express = require('express');

const app = express();

const server = http.createServer(app);

server.listen(3000);
