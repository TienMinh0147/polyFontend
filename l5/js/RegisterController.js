var myApp= angular.module('myApp',[]);

myApp.controller('registerCtrl', function($scope){
    $scope.save = function(){
        $scope.$parent.students[$scope.$parent.index]= $scope.student;

    }
    $scope.cancel = function(){
        $scope.$parent.student = angular.copy($scope.$parent.students[$scope.$parent.index]);
    }
});

myApp.controller('listCtr', function($scope){
   $scope.$parent.students =[{
       fullname : 'Nguyen Van Teo',
       birthday : '12/12/2020',
       mark : 10
   },{
    fullname : 'Pham Thi No',
    birthday : '12/1/2012',
    mark : 8
   }];
   $scope.$parent.student={};
   $scope.$parent.index = -1;
   $scope. edit = function (index){
    $scope.$parent.index = index;
    $scope.$parent.student = angular.copy($scope.$parent.students[index]);
   }
        
    
});