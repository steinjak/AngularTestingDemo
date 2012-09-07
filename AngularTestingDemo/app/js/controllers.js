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

var CategoryController = function ($scope, $http, $routeParams) {
    $scope.$emit('areaChanged', 'browse');
    $scope.$on('$routeChangeSuccess', function () {
        $http.get('/categories/' + $routeParams.id).success(function (data) {
            $scope.category = data;
        });
    });

    $scope.addToCart = function (product, quantity) {
        $scope.$broadcast('itemAddedToCart', { product: product, quantity: quantity });
    };
};
CategoryController.$inject = ['$scope', '$http', '$routeParams'];

var CartController = function ($scope) {
    $scope.$emit('areaChanged', 'cart');
    // TODO: Fill $scope.cart with object of shape: {items:[{product:{...}, quantity:Number, price:Number}, ...], sum:Number}
};
CartController.$inject = ['$scope'];
