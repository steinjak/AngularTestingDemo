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

var BrowseController = function ($scope, $http) {
    $scope.$emit('areaChanged', 'browse');
    $http.get('/categories').success(function (data) {
        $scope.categories = data;
    });
};
BrowseController.$inject = ['$scope', '$http'];

var CategoryController = function ($scope) {
    $scope.$emit('areaChanged', 'browse');
    // TODO: Fill $scope.category with data from /categories/:id
    // Hint: $routeChangeSuccess
};
CategoryController.$inject = ['$scope'];

var CartController = function ($scope) {
    $scope.$emit('areaChanged', 'cart');
    // TODO: Fill $scope.cart with object of shape: {items:[{product:{...}, quantity:Number, price:Number}, ...], sum:Number}
};
CartController.$inject = ['$scope'];
