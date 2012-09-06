var PageController = function ($scope) {
    $scope.$on('areaChanged', function (event, area) {
        $scope.activeArea = area;
    });
};
PageController.$inject = ['$scope'];

var HomeController = function ($scope) {
    $scope.$emit('areaChanged', 'home');
};
HomeController.$inject = ['$scope'];

var BrowseController = function ($scope) {
    $scope.$emit('areaChanged', 'browse');
};
BrowseController.$inject = ['$scope'];

var CategoryController = function ($scope) {
    $scope.$emit('areaChanged', 'browse');
};
CategoryController.$inject = ['$scope'];

var CartController = function ($scope) {
    $scope.$emit('areaChanged', 'cart');
};
CartController.$inject = ['$scope'];
