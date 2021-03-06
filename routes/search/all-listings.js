var housingData = require('../../housing.json');

exports.view = function(req, res){
	//console.log(housingData);

	var city = req.query.city.toLowerCase();
	console.log("The passed city is: "+ city);
	var housingDataLength = housingData.length;
	var searchResults = [];

	for (i = 0; i < housingDataLength; i++) {
    	var listingCity = housingData[i].city.toLowerCase();
    	console.log('The city of listing #' + i +' is: '+listingCity);

    	if (listingCity === city){
    		searchResults.push(housingData[i]);
    	}
	}

		res.render('search/all-listings', {
		'house': searchResults});
};