var Backbone = require('backbone');
var $ = require('jquery');

var FoodLogCollection = new Backbone.Collection.extend({

	model: FoodModel

});

module.exports = FoodLogCollection;