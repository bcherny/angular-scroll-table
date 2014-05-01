/* global angular */

angular
.module('demo', ['scrollTable'])
.controller('mainCtrl', function ($scope, $timeout) {

	$scope.columnCollection = ['column1', 'column2', 'column3', 'column4'];
	$scope.rowCollection = [];

	var setData = function (length) {

		$timeout(function(){
		$scope.rowCollection = Array
			.apply(null, { length: length })
			.map(function (v, row) {

				return $scope.columnCollection.map(function (v, column) {
					return {
						className: column < 1 ? 'narrow' : '',
						html: 'foo ' + (row + 1)
					};
				});

			});
		});

	};

	setData(200);
	
});