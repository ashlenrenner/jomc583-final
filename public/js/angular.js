var app = angular.module('myApp', []);


app.controller('BaseController', ['$http', function($http) {

    //ajax request from waterbill.json
    this.waterInfo = [];
    var _this = this;

    $http.get('/data/waterbill.json')
      .success(function(data){
      //  console.log(data);
        _this.waterInfo = data;
      })
      .error(function(msg){
        console.log("This request failed. \n" + msg)
      });


    this.city = "";
    this.sort = "city";
    this.reverse = false;
    this.population = "";
    this.waterBill = "";

    // Sorting function
              this.setSort = function(colNam) {

                if (this.sort === colNam) {
                  this.reverse = !this.reverse;
                }

                this.sort = colNam;

              };

              }]);

  //table transform

  app.animation('.repeated-item', function() {
  return {
    enter : function(element, done) {
      element.css('opacity',0);
      jQuery(element).animate({
        opacity: 1
      }, done);

      // optional onDone or onCancel callback
      // function to handle any post-animation
      // cleanup operations
      return function(isCancelled) {
        if(isCancelled) {
          jQuery(element).stop();
        }
      }
    },
    leave : function(element, done) {
      element.css('opacity', 1);
      jQuery(element).animate({
        opacity: 0
      }, done);

      // optional onDone or onCancel callback
      // function to handle any post-animation
      // cleanup operations
      return function(isCancelled) {
        if(isCancelled) {
          jQuery(element).stop();
        }
      }
    },
    move : function(element, done) {
      element.css('opacity', 0);
      jQuery(element).animate({
        opacity: 1
      }, done);

      // optional onDone or onCancel callback
      // function to handle any post-animation
      // cleanup operations
      return function(isCancelled) {
        if(isCancelled) {
          jQuery(element).stop();
        }
      }
    },

    // you can also capture these animation events
    addClass : function(element, className, done) {},
    removeClass : function(element, className, done) {}
  }
});
