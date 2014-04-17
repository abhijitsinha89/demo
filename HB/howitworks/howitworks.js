(function () {
    'use strict';

    var controllerId = 'howitworks';
    angular.module('app').controller(controllerId,
        ['$rootScope', howitworks]);

    function howitworks($rootScope) {
        var vm = this;
    };
})();