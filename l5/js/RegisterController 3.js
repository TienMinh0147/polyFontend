var myApp= angular.module('myApp',[]);



myApp.controller('CrudCtr', function($scope, $rootScope){
   $rootScope.students =[{
       fullname : 'Nguyen Van Teo',
       birthday : '12/12/2020',
       mark : 10
   },{
    fullname : 'Pham Thi No',
    birthday : '12/1/2012',
    mark : 8
   }];
   $rootScope.student= {};
   $rootScope.index = -1;
   $scope.insert = function(){
       $scope.students.push($scope.student);
       $scope.index = $scope.students.length -1 ;
   }
   $scope.update= function(){
    $scope.students[$scope.index] =angular.copy($scope.student);
}
$scope.delete= function(){
    $scope.students.splice($scope.index, 1);

    $scope.clear();
}
   $scope. edit = function (index){
    $rootScope.index = index;
    $rootScope.student = angular.copy($rootScope.students[index]);
   }
   $scope.save = function(){
    $rootScope.students[$rootScope.index]= $scope.student;

}
$scope.clear =function(){
    $scope.student = {};
    $scope.index = -1;
}
$scope.cancel = function(){
    if ($scope.index < 0){
        $scope.clear();
    }else{
        $scope.edit($scope.index);
    }
    }
}
        
    
);