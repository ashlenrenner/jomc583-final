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

      //table
      angular.module('base.withAjax', ['datatables']).controller('WithAjaxCtrl', WithAjaxCtrl);

    function WithAjaxCtrl(DTOptionsBuilder, DTColumnBuilder) {
        var vm = this;
        vm.dtOptions = DTOptionsBuilder.fromSource('/data/waterbill.json')
            .withPaginationType('full_numbers');
        vm.dtColumns = [
            DTColumnBuilder.newColumn('city').withTitle('City'),
            DTColumnBuilder.newColumn('population').withTitle('Population'),
            DTColumnBuilder.newColumn('waterBill').withTitle('Bill').notVisible()
        ];
    }
