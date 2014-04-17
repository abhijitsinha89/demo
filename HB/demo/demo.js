(function () {
    'use strict';

    var controllerId = 'demo';
    angular.module('app').controller(controllerId,
        ['$rootScope', demo]);

    function demo($rootScope) {
        var vm = this;
    };
})();