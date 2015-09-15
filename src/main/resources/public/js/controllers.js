var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl',
    function ($scope, $http) {
        $http.get('http://localhost:4567/resource').success(function (data) {
            $scope.phones = data;
        });

        $scope.orderProp = 'age';
    });


var expensesApp = angular.module('expensesApp', [])

expensesApp.controller('ExpensesViewController', function ($scope) {
    $scope.expense = {
        description: 'food',
        amount: 10,
        phrase: 'tralalal'
    }

    $scope.amountDefault = function () {
        $scope.expense.amount = 10
    };

    $scope.increaseAmount = function () {
        $scope.expense.amount++;
    }

    $scope.$watch('value', function (val, old) {
        $scope.expense.amount = parseInt(val);
    });
    $scope.name = 'Pablo';
});


var formExampleApp = angular.module('formExampleApp', [])


formExampleApp.controller('ExampleController',
    ['$scope', '$http', function ($scope, $http) {
        $scope.hello = {name: "Boaz"};
        $scope.newName = "";
        $scope.sendPost = function() {
            $.ajax({
                url: 'http://localhost:4567/receptor',
                dataType: 'json',
                type: 'POST',
                data: JSON.stringify({
                    name: $scope.newName
                })
            }).done(function (resp) {
                alert(resp);
            }).fail(function (jqXHR, textStatus) {
                alert("Error occurred");
                console.log("Request failed: " + textStatus);
            });
        }
    }]);


/*
 DONT DELETE IT, IT MADE SENDING WORK, ORIGINAl

 $http({
 url: "https://api.sprk.io/v1/devices/elroy",
 method: "POST",
 data: "pin=D0&level=HIGH",
 headers: {
 'Content-Type': 'application/x-www-form-urlencoded'
 }
 }).success(function(response) {
 $scope.response = response;
 console.log(JSON.stringify(response, null, ' '));
 }).error(function(error) {
 $scope.error = error;
 });
 */