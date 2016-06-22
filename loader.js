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
        for (var id in categories){  ////////For-In loop is working to get values
        	var value = categories[id]
        	console.log(value.id) //////getting ID in console
        	console.log(value.name)//////getting name in console
        }
        // console.log("cat", categories);
        return secondXHR(data1);
    })
    .then(function(data2) {
        types = data2;
        return thirdXHR(data2);
    })
    .then(function(data3) {
        products = data3;
    })













})



