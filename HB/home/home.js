(function () {
    'use strict';

    var controllerId = 'home';
    angular.module('app').controller(controllerId,
        ['$rootScope', home]);

    function home($rootScope) {
        var vm = this;
    };
})();