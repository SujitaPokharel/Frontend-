/* 
 * Student Info: Name=Sujita Pokharel, ID=14105
 * Subject: CS557A_HW6_Spring_2016
 * Author: Suju
 * Filename: signup.js.js
 * Date and Time: Apr 8, 2016 10:43:37 AM 
 * Project Name: CS557_HW06_Spring2016 
 */

angular.module('userApp', []).controller('SignUpController', function ($scope, $http) {
    //this.fullname = 'Sjuirata ';

    $scope.user = [{
        fullname: "",
        email: "",
        password:"",
        repassword:"",
        adddress: "",
        city:"",
        state:"",
        country:"",
        zipcode:"",
        phoneno:""
    }];

    $scope.submitForm = function () {
        console.log("posting data....");
        $http.post('/', JSON.stringify($scope.user)).success(function () {/*success callback*/
        });
    };


})

/*function BookstoreCtrl($scope, $http) {
    $scope.books = [
        {title: "", price: "Loading ..."}
    ];
    $http({method: 'GET', url: '/api/get'})
            .success(function (data, status, headers, config) {
                $scope.books = data;
            })
            .error(function (data, status, headers, config) {
                console.error("Error getting books.");
            });
}*/