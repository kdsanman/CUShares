var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CU Shares' });
});

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

/*
router.get('/category', function(req, res, next) {

	var widget_obj = {
		query: '',
		id: '',
		text: ''
	}

	switch(req.body.x) {
		case 'hardware':
			widget_obj.query = "%23Hardware%20%23CUShares";
			id: "665631342261051392";
			text: "Tweets about #Hardware #CUShares";


	}
  res.render('hardware', { widget_obj: widget_obj });
});
*/


/* Last thing that needs to run*/
module.exports = router;