(function () {
	'use strict';
	var mysql = require('mysql');

	// Creates the MySql Database connection.
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'samiralak1',
		database: 'customer_manager'
	});

	angular.module('app').service('customerService', ['$q', customerService]);

	function customerService ($q) {
		var customerService = {};

		customerService.getCustomers = function () {
			var deferred = $q.defer();
			var query = "SELECT * FROM customers";
			connection.query(query, function (err, rows) {
				if (err) 
					deferred.reject(err);
				deferred.resolve(rows);
			});
			return deferred.promise;
		}

		customerService.getCustomerById = function (id) {
			var deferred = $q.defer();
			var query = "SELECT * FROM customers WHERE customer_id = ?";
			connection.query(query, [id], function (err, rows) {
				if (err) 
					deferred.reject(err);
				deferred.resolve(rows);
			});
			return deferred.promise;
		}

		customerService.getCustomerByName = function (name) {
			var deferred = $q.defer();
			var query = "SELECT * FROM customers WHERE name LIKE  '" + name + "%'";
			connection.query(query, [name], function (err, rows) {
				if (err) 
					deferred.reject(err);
				deferred.resolve(rows);
			});
			return deferred.promise;
		}

		customerService.createCustomer = function (customer) {
			var deferred = $q.defer();
			var query = "INSERT INTO customers SET ?";
			connection.query(query, customer, function (err, res) {
				if (err) 
					deferred.reject(err);
				deferred.resolve(res.insertId);
			});
			return deferred.promise;

		}

		customerService.updateCustomer = function (customer) {
			var deferred = $q.defer();
			var query = "UPDATE customers SET name = ? WHERE customer_id = ?";
			connection.query(query, [customer.name, customer.customer_id], function (err, res) {
				if (err) 
					deferred.reject(err);
				deferred.resolve(res);
			});
			return deferred.promise;
		}

		customerService.deleteCustomer = function (id) {
			var deferred = $q.defer();
			var query = "DELETE FROM customers WHERE customer_id = ?";
			connection.query(query, [id], function (err, res) {
				if (err) 
					deferred.reject(err);
				deferred.resolve(res.affectedRows);
			});
			return deferred.promise;
		}

		return customerService;
	}
})();