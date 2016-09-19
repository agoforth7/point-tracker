var AppView = require('./AppView');

module.exports = {

	appView: new AppView(),

	showPage: function (view) {
		this.AppView.show(view);
	}

};