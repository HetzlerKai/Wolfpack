sap.ui.define([
], function () {

	return sap.ui.jsview("src.main", {

		getControllerName : function() {
			return "src.main";
		},

		createContent : function(oController) {

			return new sap.m.VBox({
				items: [
					new sap.m.Input({
						placeholder: "Name" 
					}),
					new sap.m.Input({
						placeholder: "Passwort",
						type: sap.m.InputType.Password
					}).addStyleClass("10PxTop"),
					new sap.m.Button({
						text: "Login",
						width: "100%",
						type: "Emphasized",
						press: [oController.onLogInPressed, oController]
					}).addStyleClass("10PxTop")
				]
			}).addStyleClass("LogOnForm");

		}

	});

});