'use strict'

const express = require('express');
const router = express.Router();
const SteamApi = require('steam-api');
const unirest = require('unirest');

var request = require('request');

// let key = process.env.STEAM_API_KEY

// router.get('/', (req, res) => {
  
//   console.log(key)
//   request('http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=' + key + '&steamid=76561197960435530&relationship=friend', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       return res.json(body) 
//     }
//   })    
  
// }); 

router.get('/:id', (req, res) => {
  //console.log(req.params.id)
  unirest.get(`https://igdbcom-internet-game-database-v1.p.mashape.com/games/${req.params.id}?fields=*&limit=10`)
  .header("X-Mashape-Key", "78wrwjjJc5mshO816bkZCUJhiLRVp1llSUkjsnUZLyGAdkvSd9")
  .header("Accept", "application/json")
  .end(function (result) {
    return res.json(result.body[0]);
    //console.log(result.status, result.headers, result.body);
  });
});

module.exports = router;
