var Backbone = require('backbone');

var app = require('./appController');

module.exports = Backbone.Router.extend({

	routes: {
		'': 'home'
	}

});