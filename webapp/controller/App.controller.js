sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel',
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    'use strict';
    return Controller.extend('sap.ui.demo.start.view.App', {
      //moved to component
      // onInit: function () {
      //   //set the data model on the view
      //   var oData = {
      //     recipient: {
      //       name: 'UI5',
      //     },
      //   };
      //   var oModel = new JSONModel(oData);
      //   this.getView().setModel(oModel);
      //   // set i18n model
      //   var i18nModel = new ResourceModel({
      //     bundleName: 'sap.ui.demo.start.i18n.i18n',
      //     supportedLocales: [''],
      //     fallbacklocaLe: '',
      //   });
      //   this.getView().setModel(i18nModel, 'i18n');
      // },
      // moved to HelloPanel
      // onShowHello: function () {
      //   //read from i18n
      //   var oBundle = this.getView().getModel('i18n').getResourceBundle();
      //   var sRecipient = this.getView()
      //     .getModel()
      //     .getProperty('/recipient/name');
      //   var sMsg = oBundle.getText('helloMessage', [sRecipient]);
      //   MessageToast.show(sMsg);
      // MessageToast.show('Hello there!');
      // },
    });
  }
);
