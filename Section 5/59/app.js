/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const http = require('http');

const express = require('express');

const app = express();

const server = http.createServer(app);

server.listen(3000);
