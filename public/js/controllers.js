'use strict';






function HomeCtrl($scope) {



}



function AboutCtrl($scope) {



}


function ContactCtrl($scope, $http) {

    $scope.submitEmail = function(){

        alert("sending");

        var data = {'name': $scope.name, 'email': $scope.email, 'phone': $scope.phone, 'message': $scope.message};

        $http({
            url: 'http://localhost:7000/api/sendmail',
            method: "POST",
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data, status, headers, config) {
                alert('sucess');
            }).error(function (data, status, headers, config) {
                alert('error - ' + status);
            });

    };

}



function ServicesCtrl($scope) {



}




function GalleryCtrl($scope) {



}

function SiteMapCtrl($scope) {



}
function LegalCtrl($scope) {



}

