sap.ui.define(
  [
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel',
  ],
  function (UIComponent, JSONModel, ResourceModel) {
    'use strict';
    return UIComponent.extend('sap.ui.demo.start.Component', {
      metadata: { manifest: 'json' },

      // noved to manifest

      // metadata: {
      //   rootView: {
      //     viewName: 'sap.ui.demo.start.view.App',
      //     type: 'XML',
      //     async: true,
      //     id: 'app',
      //   },
      // },
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

        //moved to manifest

        //   // set i18n model
        //   var i18nModel = new ResourceModel({
        //     bundleName: 'sap.ui.demo.start.i18n.i18n',
        //     supportedLocales: [''],
        //     fallbacklocaLe: '',
        //   });
        //   this.setModel(i18nModel, 'i18n');
      },
    });
  }
);
