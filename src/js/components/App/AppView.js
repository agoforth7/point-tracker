var Backbone = require('backbone');

// var NumbersView = require('../Numbers/NumbersView');
// var EatView = require('../Eat/EatView');
// var ActivityView = require('../Activity/ActivityView');

module.exports = Backbone.View.extend({

	tagName: 'main',

	className: 'app',

	initialize: function () {
		this.pageView = null;
	},

	render: function () {
		this.$el.html(this.template());
	},

	template: function () {
		return `<div class="page-region">
					<div class="numbers-region"></div>
					<div class="eat-region"></div>
				</div>`;
	},

	show: function (view) {
		if (this.pageView) {
			this.pageView.remove();
		}

		this.pageView = view;

		view.render();

		this.$('.page-region').append(view.el);
	}

});