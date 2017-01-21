/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 3.5.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({
    disableCaching: false,
    paths: {
        ccmz: 'app'
    }
});


Ext.application({

    requires: [
        'Ext.Loader'
    ],
    models: [
        'Bn_TreatmentReimburse',
        'SystemEnum'
    ],
    stores: [
        'ReimSourceStore',
        'ReimburseTypeStore',
        'SpecBNStore'
    ],
    views: [
        'MyViewport',
        'yljz.TRItem'
    ],
    name: 'ccmz',
    title: '长春市医疗救助管理系统',

    requires: [
        'Ext.Loader'
    ],

    /* 显示遮罩层 */
    showLoadingMask: function(loadingMessage) {
        if (Ext.isEmpty(loadingMessage)) loadText = '处理中......   请稍候';
        Ext.Ajax.on({
            beforerequest: {
                fn: function () {
                    Ext.getBody().mask(loadText, 'loading');
                }, scope: Ext.getBody(), single: true
            },
            requestcomplete: { fn: Ext.getBody().unmask, scope: Ext.getBody(), single: true },
            requestexception: { fn: Ext.getBody().unmask, scope: Ext.getBody(), single: true }
        });
    },

    /* 在调用store上的存储数据的方法时，出错后调这个方法显示错误信息 */
    ShowServerError: function(batch, operation) {
        var msg = batch.operations[batch.current].request.scope.reader.jsonData.msg;
        Ext.Msg.show({
            title: '错误',
            msg: msg,
            buttons: Ext.Msg.OK,
            icon: Ext.Msg.ERROR
        });
    },

    launch: function() {
        Ext.create('ccmz.view.MyViewport');
    }

});
