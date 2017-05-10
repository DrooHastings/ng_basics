console.log('js up');
var myApp = angular.module ( 'myApp', []);

//set up a controller
myApp.controller( 'InventoryController', function($http){
  console.log('NG');

  var vm = this;


  // vm.items = [];// move to server

  vm.addItem = function(){
    //post route
    console.log('in addItem ng-click');
    console.log(vm.nameIn, vm.descriptionIn);
    var newItem = {
      name: vm.nameIn,
      description: vm.descriptionIn

    };//end newItem

    $http({
      method: 'POST',
      url: '/addItem',
      data: newItem
    }).then(function success(response){
      console.log(response);
      getItems();

    });//end POST

  };//end addItem



  function getItems(){
    $http({
      method: 'GET',
      url: '/addItem',
    }).then(function success(response){
      console.log('this is response', response);
      vm.listData = response.data;
      console.log('the is vm.listData:', vm.listData);

    });//end success
}//end getItem
});// end myApp
