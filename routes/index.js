var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


/* START TWITTER API FOR SEARCH ENGINE */
/*Getting input*/
router.post('/results', function(req, res, next) {
	console.log(req.body.twittersearch);

/*Search Engine */
	var Twit = require('twit');

	var T = new Twit({
	    consumer_key:         '4Rk9wgiWEeRWpiLEPl2mws64Q'
	  , consumer_secret:      'r5tdHH8iZ5v5kFsenQhXIEgADINtVKx5r6pmvPqfTmHc6HwlPA'
	  , access_token:         '2893132909-9YQGuI3PM3Z2NwBdcZYLAGxbxdonnIygm2HJihW'
	  , access_token_secret:  'ISPEsF0gFwgr8yqtg996fr7cseui3vkY8hJ5wqKFSAKKR'
	});

	/* REST API - Search for past Tweets */
	T.get('search/tweets', { q: '#CUShares ' + req.body.twittersearch, count: 100 }, function(err, data, response) {
		res.render('results', { title: 'Search Results', tweets: data.statuses})
	})
});

/* END TWITTER API FOR SEARCH ENGINE */

router.get('/explore', function(req, res){
  res.render('explore', { title: 'Explore' });
});

router.get('/how_it_works', function(req, res){
  res.render('how_it_works', { title: 'How it Works' });
});

router.get('/index', function(req, res){
  res.render('index', { title: 'Home' });
});

router.get('/officesupplies', function(req, res){
  res.render('officesupplies', { title: 'Search Results' });
});

router.post('/officesupplies', function(req, res, next) {
	// console.log(req.body.twittersearch);

/*Search Engine */
	var Twit = require('twit');

	var T = new Twit({
	    consumer_key:         '4Rk9wgiWEeRWpiLEPl2mws64Q'
	  , consumer_secret:      'r5tdHH8iZ5v5kFsenQhXIEgADINtVKx5r6pmvPqfTmHc6HwlPA'
	  , access_token:         '2893132909-9YQGuI3PM3Z2NwBdcZYLAGxbxdonnIygm2HJihW'
	  , access_token_secret:  'ISPEsF0gFwgr8yqtg996fr7cseui3vkY8hJ5wqKFSAKKR'
	});

	/* REST API - Search for past Tweets */
	T.get('search/tweets', { q: '#CUShares ' + '#officesupplies', count: 100 }, function(err, data, response) {
		res.render('officesupplies', { title: 'Search Results', tweets: data.statuses})
	})
});


/* Last thing that needs to run*/
module.exports = router;