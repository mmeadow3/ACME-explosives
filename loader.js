var products = [];
var types = [];
var categories = [];
//////separate each AJAX call for readablility///////////
var getCategories = function() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "categories.json"
        }).done(function(data) {
            resolve(data.categories);
        }).fail(function(xhr, status, error) {
            reject(error);
        });
    })
};
///////////////Second type of AJAX request//////////////
var getTypes = function(result_of_firstXHR) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "types.json",
      data: result_of_firstXHR
    }).done(function(data) {
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  })
};

// This function does one thing, and returns a promise
var getProducts = function(result_of_secondXHR) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "prodcuts.json",
      data: result_of_secondXHR
    }).done(function(data) {
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  })
};
