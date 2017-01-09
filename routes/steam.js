'use strict'

const express = require('express');
const router = express.Router();
const SteamApi = require('steam-api');
const unirest = require('unirest');

var request = require('request');

router.get('/games', (req, res) => {
  unirest.get(`https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=*&limit=50`)
  .header("X-Mashape-Key", "78wrwjjJc5mshO816bkZCUJhiLRVp1llSUkjsnUZLyGAdkvSd9")
  .header("Accept", "application/json")
  .end(function (result) {
    return res.json(result.body);
    //console.log(result.status, result.headers, result.body);
  });
});


router.get('/people', (req, res) => {
  //console.log(req.params.id)
  unirest.get('https://igdbcom-internet-game-database-v1.p.mashape.com/people/?fields=*&limit=50')
  .header("X-Mashape-Key", "78wrwjjJc5mshO816bkZCUJhiLRVp1llSUkjsnUZLyGAdkvSd9")
  .end(function (result) {
    return res.json(result.body);
    //console.log(result.status, result.headers, result.body);
  });
});


router.get('/news', (req, res) => {
  unirest.get('https://igdbcom-internet-game-database-v1.p.mashape.com/pulses/?fields=*&limit=50')
  .header("X-Mashape-Key", "78wrwjjJc5mshO816bkZCUJhiLRVp1llSUkjsnUZLyGAdkvSd9")
  .header("Accept", "application/json")
  .end(function (result) {
    return res.json(result.body);
    // console.log(result.status, result.headers, result.body);
  });
});





module.exports = router;
