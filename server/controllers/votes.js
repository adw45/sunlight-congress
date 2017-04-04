'use strict';

const request = require('request');

const route_url = 'https://congress.api.sunlightfoundation.com/votes';
const voter_info = '?breakdown&fields=chamber,congress,number,question,required,result,roll_id,roll_type,source,url,vote_type,voted_at,year,voters,breakdown';
const vote_totals = '?chamber=senate&order=voted_at&breakdown&fields=chamber,congress,number,question,required,result,roll_id,roll_type,source,url,vote_type,voted_at,year,breakdown.total';

 var voteController = { 
    voteById(req, reply) {
        request(route_url + voter_info + '&roll_id=' + req.params.id, 
            (err, response, body) => {
                 reply(err || JSON.parse(body));
            });
    },
    votesByChamber(req, reply) {
        request(route_url + vote_totals + '&chamber=' + req.params.chamber + '&per_page=' + req.query.count + '&page=' + req.query.page, 
            (err, response, body) => {
                reply(err || JSON.parse(body));
            });
    }
 }

 module.exports = voteController;