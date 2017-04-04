/// <reference path="app.d.ts" />

'use strict';

const Hapi = require('hapi');
const voteController = require('./controllers/votes.js');

const server = new Hapi.Server();
server.connection({ port: 3001, host: 'localhost' });

server.route({ method: 'GET', path: '/health', handler: (request, reply) => { reply('Server is running'); } });
server.route({ method: 'GET', path: '/votes/{id}', handler: voteController.voteById });

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});