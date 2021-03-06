var housingData = require('../../housing.json');

exports.view = function(req, res){

	console.log(housingData);
	console.log("the length of housing.json is "+Object.keys(housingData).length);

	var id = (housingData.length);
	var title = (typeof req.query.title !=='undefined')?req.query.title:" ";
	var type = (typeof req.query.occupants !=='undefined')?req.query.occupants:0;
	var bed = (typeof req.query.bed !=='undefined')?req.query.bed:0;
	var bath = (typeof req.query.bath !=='undefined')?req.query.bath:0;
	var area = (typeof req.query.area !=='undefined')?req.query.area:1;
	var cost = (typeof req.query.cost !=='undefined')?req.query.cost:0;
	var city = (typeof req.query.city !=='undefined')?req.query.city:" ";
	var availability = (typeof req.query.availability !=='undefined')?req.query.availability:"today";
	var description = (typeof req.query.description !=='undefined')?req.query.description:"today";
	var image1 = (typeof req.query.image1 !=='undefined')?req.query.image1:0;
	var phone = (typeof req.query.phone !=='undefined')?req.query.phone:"(999) - 999-9999";
	var email = (typeof req.query.email !=='undefined')?req.query.email:"email@example.com";

	res.render('listing/add-listing');

	var text = '{"id": "'+id+'","active": "true","owner": "true","deleted": "false","title": "'+title+'","type": "'+type+'","bed": "'+bed+'","bath": "'+bath+'","area": "'+area+'","cost": "'+cost+'","city": "'+city+'","pets": "true","children": "true","smoking": "true","availability": "'+availability+'","description": "'+description+'","image1": "'+image1+'","phone": "'+phone+'","email": "'+email+'"}';

	console.log("text object includes:", text);
	var newListing = JSON.parse(text);

	housingData.push(newListing);
};