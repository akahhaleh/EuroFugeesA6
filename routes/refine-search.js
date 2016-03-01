var housingData = require('../housing.json');

exports.updateResults = function(req, res) { 

	// get variables from request query
	var city = req.params.city.toLowerCase();
	console.log(city);
	var occupants = req.params.occupants;
	var area = 45 + ((occupants-1)*15);
	var cost = req.params.cost;
	var pets = req.params.pets;
	var children = req.params.children;
	var smoking = req.params.smoking;
	var availability = req.params.availability;

	// print passed results 
	console.log("The refined city is: "+ city);
	console.log("The refined occupants is: "+ occupants);
	console.log("The refined cost is: "+ cost);
	console.log("The refined pets is: "+ pets);
	console.log("The refined children is: "+ children);
	console.log("The refined smoking is: "+ smoking);
	console.log("The refined availability is: "+ availability);


	var housingDataLength = housingData.length;
	var searchResults = [];

	for (i = 0; i < housingDataLength; i++) { 

		// Get variables of each listing from json file
    	var listingCity = housingData[i].city.toLowerCase();
    	var listingArea = housingData[i].area;
    	var listingCost = housingData[i].cost;
    	var listingPets = housingData[i].pets;
    	var listingChildren = housingData[i].children;
    	var listingSmoking = housingData[i].smoking;
    	var listingAvailability = housingData[i].availability;

    	console.log('The city of listing #' + i +' is: '+listingCity); 
    	console.log('The cost of listing #' + i +' is: '+listingCost); 
    	console.log('The area of listing #' + i +' is: '+listingArea);
    	console.log('The pets of listing #' + i +' is: '+listingPets);
    	console.log('The children of listing #' + i +' is: '+listingChildren);
    	console.log('The smoking of listing #' + i +' is: '+listingSmoking);
    	console.log('The availability of listing #' + i +' is: '+listingAvailability);
    	if (listingCity === city){
    		console.log("passed city");
    		if (listingCost <= cost){
    			console.log("passed cost");
    			if (area <= listingArea){
    				console.log("passed cost");
    				if (pets === listingPets){
    					console.log("passed pets");
    					if (children === listingChildren){
    						console.log("passed children");
    						if (smoking === listingSmoking){
    							console.log("passed smoking");
    							if (availability === listingAvailability){
    								console.log("passed availability - listing ID#"+i+" has passed");
    								searchResults.push(housingData[i]);
    							}
    						}
    					}
    				}	
    			}
    		}
    	}
	}

		res.json(searchResults);

	/*

  	var listing = housingData[listingID]; // of by one, our first project has index 0
  	res.json(listing);
  	*/
}