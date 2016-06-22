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
var getTypes = function(getCategories) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "types.json",
      data: getCategories
    }).done(function(data) {
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  })
};

/////////// This function does one thing, and returns a promise//////////
var getProducts = function(getTypes) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "products.json",
      data: getTypes
    }).done(function(data) {
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  })
};
/////////////Now we use those Promises to describe the order of execution, 
 //////// and how data flows between each one.

/////////////Note how the resolve callback function, itself, returns another 
/////////// promise. This is how you can chain promises, and dictate the
//////////// order of execution of multiple aynschronous operations.
getCategories()
  .then(function(data1) {
    return getTypes(data1);
  })
  .then(function(data2) {
    return getProducts(data2);
  }).then(function(data3){
    console.log(data3);  /////// Logs out an Object//////////
  });






