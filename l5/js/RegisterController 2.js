var myApp= angular.module('myApp',[]);

myApp.controller('registerCtrl', function($scope,$rootScope){
    $scope.save = function(){
        $rootScope.students[$rootScope.index]= $scope.student;

    }
    $scope.cancel = function(){
        $rootScope.student = angular.copy($rootScope.students[$rootScope.index]);
    }
});

myApp.controller('listCtr', function($scope, $rootScope){
   $rootScope.students =[{
       fullname : 'Nguyen Van Teo',
       birthday : '12/12/2020',
       mark : 10
   },{
    fullname : 'Pham Thi No',
    birthday : '12/1/2012',
    mark : 8
   }];
   $rootScope.student={};
   $rootScope.index = -1;
   $scope. edit = function (index){
    $rootScope.index = index;
    $rootScope.student = angular.copy($rootScope.students[index]);
   }
        
    
});