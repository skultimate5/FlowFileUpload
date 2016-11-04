var express = require('express');
var router = express.Router();

router.get('/module', function (request, response) {
	module.someEndpoint().then(function (data) {
		response.json(JSON.parse(data));
	}).catch(function (data) {
		response.json('Failed to get data. Error:' + data);
	});
});

module.exports = router;