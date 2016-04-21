var app = angular.module('myApp', []);

app.controller('BaseController', ['$http', function($http) {
    //ajax request from data.json
    this.papers = [];
    var _this = this;

    $http.get('data/waterbill.json')
      .success(function(data){
        console.log(data);
        _this.papers = data;
      })
      .error(function(msg){
        console.log("This request failed. \n" + msg)
      });


    this.panelInfo = true;
    this.name = "";
    this.sort = "name";
    this.reverse = false;
    this.images = "";
    this.bio = "";
    this.storyInfo = true;
    this.storyTitle = "";
    this.storyLink = "";
    this.editor = "";
    this.editorPic = "";
    this.imgCaption = "";
