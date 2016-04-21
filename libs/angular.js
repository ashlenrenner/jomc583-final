var app = angular.module('myApp', []);

app.controller('BaseController', ['$http', function($http) {
    //ajax request from data.json
    this.waterInfo = [];
    var _this = this;

    $http.get('data/waterbill.json')
      .success(function(data){
        console.log(data);
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
