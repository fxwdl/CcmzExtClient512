/*
 * File: app/view/MyViewportViewController.js
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

Ext.define('ccmz.view.MyViewportViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.myviewport',

    control: {
        "#appMenu treepanel": {
            itemclick: 'onMenuItemClick'
        }
    },

    onMenuItemClick: function(dataview, record, item, index, e, eOpts) {
        var me=this;
        var tabPanel = me.lookupReference('mainTabPanel');
        switch(record.raw.id){
            case 'LightSwitchApplication:S_Treatment_Add':
                me.doS_Treatment_Add(record,tabPanel);
                break;
            default:
                break;
        }
    },

    doS_Treatment_Add: function(record, tabPanel) {
        var v=Ext.create('ccmz.view.yljz.TRItem');
        var tab=tabPanel.add({
            autoScroll: true,
            xtype: "panel",
            layout: 'fit',
            title: '新建一站式报销',
            closable: true,
            items: v
        });
        tabPanel.setActiveTab(tab);
    },

    onBtnLogoutClick: function(button, e, eOpts) {
        Ext.MessageBox.confirm('提示', '确定要退出系统吗?', function(btn,text){
            if(btn=='yes'){
                var me=this;
                ccmz.getApplication().showLoadingMask();
                Ext.Ajax.request({
                    url:'/Account/Logout',
                    method: 'POST',
                    success:function(response,opts){
                        var r=Ext.decode(response.responseText);
                        if (r.success){
                            location.href = r.msg;
                        }

                    }});
                }
            }, this);
    },

    onAppHeaderRender: function(component, eOpts) {
        var me=this;
        ccmz.getApplication().showLoadingMask();
        Ext.Ajax.request({
            url:'/Account/GetCurUserInfo',
            success:function(response,opts){
                var r=Ext.decode(response.responseText);
                var vm=me.getViewModel();
                vm.set("UserName",r.UserName);
                vm.set("CurDept",r.CurDept);

            }});
    },

    onAppMenuRender: function(component, eOpts) {
        var me=this;
        ccmz.getApplication().showLoadingMask();
        Ext.Ajax.request({
            scope: this,
            url: '/Home/GetMainMenu',
            method: 'GET',
            success: function (response, opts) {
                var result = Ext.decode(response.responseText);
                if (result.success) {
                    Ext.each(result.msg,function(curItem){
                        var newPanel = Ext.create('Ext.panel.Panel', { title: curItem.Title,titleAlign: 'center' });

                        var root = {};
                        root.children=new Array();
                        Ext.each(curItem.Children,function(curPage){
                            root.children.push({id:curPage.PermissionId,text:curPage.PermissionDisplayName,leaf:true});
                        });
                        var newSubPanel = Ext.create('Ext.tree.Panel', {
                            rootVisible: false,
                            border: false,
                            lines: false,
                            root: root
                        });

                        newPanel.add(newSubPanel);
                        component.add(newPanel);
                    });
                }
                else {
                    Ext.Msg.show({
                        title: '错误',
                        msg: result.msg,
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.ERROR
                    });
                }
            },
            failure: function (response, opts) {
                Ext.Msg.show({
                    title: '错误',
                    msg: '发生服务器错误：' + response.statusText,
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR
                });
            },
        });
    }

});
