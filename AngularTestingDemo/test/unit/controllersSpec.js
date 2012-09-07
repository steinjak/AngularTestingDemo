'use strict';

describe('HomeController', function () {
    var ctl, scope, emittedArea;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
        scope.$on('areaChanged', function (event, area) { emittedArea = area; });
        ctl = new HomeController(scope);
    }));

    it('should emit the area changed event on construction', function () {
        expect(emittedArea).toEqual('home');
    });
});

describe('PageController', function () {
    var pageController, scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
        pageController = new PageController(scope);
    }));

    it('should change the active area on the "areaChanged" event', function () {
        scope.$emit('areaChanged', 'testArea');
        expect(scope.activeArea).toEqual('testArea');
    });
});

describe('CategoriesController', function () {
    beforeEach(inject(function ($rootScope, $httpBackend, $http) {
        $httpBackend.expectGET('/categories').respond({one: {id:'one'}, two: {id: 'two'}});
        var ctl = new BrowseController($rootScope.$new(), $http);
    }));

    it('should fetch resources from the server', inject(function($httpBackend) {
        $httpBackend.verifyNoOutstandingExpectation();
    }));
});
