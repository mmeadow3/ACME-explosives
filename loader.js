var products = [];
var types = [];
var categories = [];

$(document).ready(function() {

    var firstXHR = function() {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "categories.json"
            }).done(function(data) {
                resolve(data.categories); //////////is getting into the JSON file 
            }).fail(function(xhr, status, error) {
                reject(error);
            });
        })
    };

    var secondXHR = function(result_of_firstXHR) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "types.json",
                data: result_of_firstXHR
            }).done(function(data) {
                resolve(data.types); //////////is getting into the JSON file 
            }).fail(function(xhr, status, error) {
                reject(error);
            });
        })
    };

    var thirdXHR = function(result_of_secondXHR) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "products.json",
                data: result_of_secondXHR
            }).done(function(data) {
                resolve(data.products); //////////is getting into the JSON file 
            }).fail(function(xhr, status, error) {
                reject(error);
            });
        })
    };



firstXHR()
    .then(function(data1) {
        categories = data1;
        // for (var id in categories){  ////////For-In loop is working to get values
        // 	var value = categories[id]}
        	// console.log(value.id) //////getting ID in console
        	// console.log(value.name)//////getting name in console
        	///////make a function to be named outside of THIS FUNCTION/////////
       	firstDropdown(categories)
        return secondXHR(data1);
    })
    .then(function(data2) {
        types = data2;
         // for (var id in types){  ////////For-In loop is working to get values
        	// var type = types[id]
        	// console.log(type.id) //////getting ID in console
        	// console.log(type.name)//////getting name in console
        	// console.log(type.description)
        	typeDropdown(types)
        return thirdXHR(data2);
    })
    .then(function(data3) {
        products = data3;
        // for (var type in products){  ////////For-In loop is working to get values
        // 	var product = products[id]
        // 	console.log(product.id)
        dropProduct(products)
        return data3;
    })
//////////////////Define dropdown menu/////////////////
 var dropCategories = $('#dropDown1');
 var dropType = $('#dropDown2');
 var dropProduct = $('#dropDown3');
 // console.log("categories", categories);

function firstDropdown (data1){
	// console.log("d1", data1);
	data1.forEach(function(catagory) {
	    $('<option />', {
	        value: catagory.id,
	        text: catagory.name
	    }).appendTo(dropCategories);   //////// appends to Categories drop down list/////////
})
} ////////end first dropdown addition to DOM///////////////////////
function typeDropdown (data2){
	data2.forEach(function(type) {
	    $('<option />', {
	        value: type.id,
	        text: type.name,
	        description: type.description
	    }).appendTo(dropType);   //////// appends to Categories drop down list/////////
})
}
////////////////////////Ends Type function///////////////////////
//////////////////////products drop down will be different, it will need to display data on select////////// 












}) /////////END Starting Function/////////////











