'use strict';

const Hapi = require('hapi');
const voteController = require('./controllers/votes.js');
const legislatorController = require('./controllers/legislators');

const server = new Hapi.Server();
server.connection({ port: 8000, host: 'localhost' });

server.route({ method: 'GET', path: '/health', handler: (request, reply) => { reply('Server is running'); } });

server.route({ method: 'GET', path: '/votes/{id}', handler: voteController.voteById });
server.route({ method: 'GET', path: '/votes/chamber/{chamber}', handler: voteController.votesByChamber });

server.route({ method: 'GET', path: '/legislator', handler: legislatorController.legislators });
server.route({ method: 'GET', path: '/legislator/{id}', handler: legislatorController.legislatorById });
server.route({ method: 'GET', path: '/legislator/zip/{zip}', handler: legislatorController.legislatorByZip });

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
