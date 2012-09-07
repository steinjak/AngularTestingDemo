var PageController = function ($scope) {
    $scope.$on('areaChanged', function (event, area) {
        $scope.activeArea = area;
    });
    $scope.cart = [];
    $scope.$on('itemAddedToCart', function (event, item) {
        $scope.cart.push(item);
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

var CategoryController = function ($scope, $http, $routeParams, $rootScope) {
    $scope.$emit('areaChanged', 'browse');
    $scope.$on('$routeChangeSuccess', function () {
        $http.get('/categories/' + $routeParams.id).success(function (data) {
            $scope.category = data;
        });
    });

    $scope.addToCart = function (product, quantity) {
        $rootScope.$broadcast('itemAddedToCart', { product: product, quantity: quantity });
    };
};
CategoryController.$inject = ['$scope', '$http', '$routeParams', '$rootScope'];

var CartController = function ($scope) {
    $scope.$emit('areaChanged', 'cart');
    var sum = 0;
    for (var i = 0; i < $scope.cart.length; i++) {
        sum += $scope.cart[i].product.price * $scope.cart[i].quantity;
    }
    $scope.sum = sum;
};
CartController.$inject = ['$scope'];
