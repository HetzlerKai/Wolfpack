sap.ui.define([
], function () {

	return sap.ui.controller("src.main", {

		onInit: function(){
			jQuery.sap.includeStyleSheet("src/css/style.css");
		},

		onLogInPressed: function(oEvent){
			var oApp = this.getView().getParent();

			oApp.to("packView");
		}

	});

});