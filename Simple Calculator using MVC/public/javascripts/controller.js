/* 
 * Student Info: Name=Sujita Pokharel, ID=14105
 * Subject: CS557A_Quiz4_Spring_2016
 * Author: Suju
 * Filename: controller.js
 * Date and Time: Apr 10, 2016 9:21:49 PM 
 * Project Name: CS557A_Quiz04 
 */
var simpleCalcApp = angular.module('simpleCalc', []);
simpleCalcApp.controller('calcController', function($scope) {
    $scope.result = 0;
    $scope.add = function() {
        $scope.result = ($scope.num1) + ($scope.num2);
    };
    $scope.subtract = function() {
        $scope.result = ($scope.num1) - ($scope.num2);
    };
    
});

