sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/m/MessageToast', 'sap/ui/core/Fragment'],
  function (Controller, MessageToast, Fragment) {
    'use strict';
    return Controller.extend('sap.ui.demo.start.controller.HelloPanel', {
      onShowHello: function () {
        //read from i18n
        var oBundle = this.getView().getModel('i18n').getResourceBundle();
        var sRecipient = this.getView()
          .getModel()
          .getProperty('/recipient/name');
        var sMsg = oBundle.getText('helloMessage', [sRecipient]);
        MessageToast.show(sMsg);
      },
      onOpenDialog: function () {
        var oView = this.getView();

        // create dialog lazily
        if (!this.byId('helloDialog')) {
          // load async xml fragment
          Fragment.load({
            id: oView.getId(),
            name: 'sap.ui.demo.start.view.HelloDialog',
            controller: this,
          }).then(function (oDialog) {
            // connect dialog to the root view of this component (models, lifecycle)
            oView.addDependent(oDialog);
            oDialog.open();
          });
        } else {
          this.byId('helloDialog').open();
        }
      },
      onCloseDialog: function () {
        this.byId('helloDialog').close();
      },
    });
  }
);
