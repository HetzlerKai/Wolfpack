sap.ui.define([
], function () {

	return sap.ui.jsview("src.packView", {

		getControllerName : function() {
			return "src.packView";
		},

		createContent : function(oController) {

			var oSplitApp = new sap.m.SplitApp();

			oSplitApp.addMasterPage(this._getMasterPage());
			oSplitApp.addDetailPage(this._getDetailPage());

			return oSplitApp;

		},

		_getDetailPage: function() {
			return new sap.m.Page({
				content: [
					new sap.uxap.ObjectPageLayout({
						headerTitle: [
							new sap.uxap.ObjectPageHeader({
								objectTitle: "Wolf 1",
								actions: [
									new sap.uxap.ObjectPageHeaderActionButton({
										text: "send Hunting",
										type:"Emphasized",
										hideText:false
									}),
									new sap.uxap.ObjectPageHeaderActionButton({
										text: "attack",
										type:"Emphasized",
										hideText:false
									}),
								]
							})
						],
						headerContent: [
							new sap.uxap.ObjectPageHeaderContent({
								content: [
									new sap.m.Label({
										text: "Rang"
									}),
									new sap.m.ObjectAttribute({
										text: "Alpha"
									}),
									new sap.m.Label({
										text: "Stärke"
									}),
									new sap.m.ObjectAttribute({
										text: "13"
									})
								]
							})
						]
					})
				]
			});
		},

		_getMasterPage: function() {
			return new sap.m.Page({
				content: [
					new sap.m.List({
						items: [
							new sap.m.StandardListItem({
								title: "Wolf 1"
							}),
							new sap.m.StandardListItem({
								title: "Wolf 2"
							}),
							new sap.m.StandardListItem({
								title: "Wolf 3"
							})
						]
					})
				]
			});
		}

	});

});