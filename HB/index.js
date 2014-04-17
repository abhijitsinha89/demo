(function () {
    'use strict';

    var controllerId = 'index';
    angular.module('app').controller(controllerId,
        ['$rootScope', index]);

    function index($rootScope) {
        var vm = this;
    };
})();