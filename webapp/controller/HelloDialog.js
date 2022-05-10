sap.ui.define(
  ['sap/ui/base/ManagedObject', 'sap/ui/core/Fragment'],
  function (ManagedObject, Fragment) {
    'use strict';

    return ManagedObject.extend('sap.ui.demo.start.controller.HelloDialog', {
      constructor: function (oView) {
        this._oView = oView;
      },

      exit: function () {
        delete this._oView;
      },

      open: function () {
        var oView = this._oView;

        // create this dialog lazily
        if (!oView.byId('helloDialog')) {
          var oFragmentController = {
            onCloseDialog: function () {
              oView.byId('helloDialog').close();
            },
          };

          // load asyncly xml frag
          Fragment.load({
            id: oView.getId(),
            name: 'sap.ui.demo.start.view.HelloDialog',
            controller: oFragmentController,
          }).then(function (oDialog) {
            // connect dialog to the root of the component (model, lifecycle)
            oView.addDependent(oDialog);
            oDialog.open();
          });
        } else {
          oView.byId('helloDialog').open();
        }
      },
    });
  }
);
