sap.ui.define(
  [
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel',
    './controller/HelloDialog',
  ],
  function (UIComponent, JSONModel, HelloDialog) {
    'use strict';
    return UIComponent.extend('sap.ui.demo.start.сomponent', {
      metadata: { manifest: 'json' },

      init: function () {
        //fun of parent component
        UIComponent.prototype.init.apply(this, arguments);

        //set data
        var oData = {
          recipient: {
            name: 'UI5',
          },
        };
        var oModel = new JSONModel(oData);
        this.setModel(oModel);

        // set dialog
        this._helloDialog = new HelloDialog(this.getRootControl());
      },

      exit: function () {
        this._helloDialog.destroy();
        delete this._helloDialog;
      },

      openHelloDialog: function () {
        this._helloDialog.open();
      },
    });
  }
);
