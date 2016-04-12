﻿/* topnav.factory.js */

/**
* @desc factory for managing the desktop topnav object
*/

(function () {
    'use strict';
    angular
        .module('webvellaDesktop')
        .factory('webvellaDesktopTopnavFactory', factory);

    factory.$inject = ['$log','$rootScope','$timeout'];

    /* @ngInject */
    function factory($log,$rootScope,$timeout) {
        var topnav = [];
        var exports = {
            initTopnav:initTopnav,
            addItem: addItem,
            getTopnav: getTopnav
        };
        //Some code

        return exports;

        ////////////////

        function initTopnav() {
        	$log.debug('webvellaDesktop>providers>topnav.factory>initTopnav> function called ' + moment().format('HH:mm:ss SSSS'));
            topnav = [];
            return topnav;
        }

        function addItem(item) {
        	$log.debug('webvellaDesktop>providers>topnav.factory>addItem> function called ' + moment().format('HH:mm:ss SSSS'));
			//check label is not already added
			var navLabelAlreadyAdded = false;
        	for (var i = 0; i < topnav.length; i++) {
				 if(topnav[i].label === item.label){
				 	 navLabelAlreadyAdded = true;
				 }
        	}
			if(!navLabelAlreadyAdded){
				topnav.push(item);
				topnav.sort(function (a, b) { return parseFloat(a.weight) - parseFloat(b.weight); });
				$timeout(function(){
					$rootScope.$emit('webvellaDesktop-topnav-updated', topnav)
				},0);
			}
            $log.debug('rootScope>events> "webvellaDesktop-topnav-updated" emitted ' + moment().format('HH:mm:ss SSSS'));
        }


        function getTopnav() {
        	$log.debug('webvellaDesktop>providers>topnav.factory>getTopnav> function called ' + moment().format('HH:mm:ss SSSS'));
			console.log(topnav);
            return topnav;
        }
    }
})();