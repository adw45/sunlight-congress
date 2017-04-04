'use strict';

const request = require('request');

const route_url = 'https://congress.api.sunlightfoundation.com/legislators';
const route_url_location = 'https://congress.api.sunlightfoundation.com/legislators/locate?zip=';

 var legislatorController = { 
    legislators(req, reply) {
        request(route_url + '?query=' + req.query.search, 
            (err, response, body) => {
                reply(err || JSON.parse(body));
            });
    },
    legislatorById(req, reply) {
        request(route_url + '?bioguide_id=' + req.params.id, 
            (err, response, body) => {
                reply(err || JSON.parse(body));
            });
    },
    legislatorByZip(req, reply) {
        request(route_url_location + req.params.zip, 
        (err, response, body) => {
            reply(err || JSON.parse(body));
        });
    }
 }

 module.exports = legislatorController;