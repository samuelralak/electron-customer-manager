(function () {
	'use strict';
	angular.module('app')
		.controller('CustomerController', ['customerService', '$q', '$mdDialog', customerController]);


	function customerController (customerService, $q, $mdDialog) {
		var self = this;

		self.selected = null;
		self.customers = [];
		self.selectedIndex = 0;
		self.filterText = null;
		self.selectCustomer = selectCustomer;
		self.deleteCustomer = deleteCustomer;
		self.saveCustomer = saveCustomer;
		self.createCustomer = createCustomer;
		self.filter = filterCustomer;

		// Load initial data
		getAllCustomers();

		//--------------------
		// Internal functions
		//--------------------

		function selectCustomer (customer, index) {
			// body...
		}
	}
})();