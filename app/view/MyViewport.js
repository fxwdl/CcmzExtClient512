/*
 * File: app/view/MyViewport.js
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

Ext.define('ccmz.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'ccmz.view.MyViewportViewModel',
        'ccmz.view.MyViewportViewController',
        'Ext.button.Button',
        'Ext.tab.Panel'
    ],

    controller: 'myviewport',
    viewModel: {
        type: 'myviewport'
    },
    layout: 'border',

    items: [
        {
            xtype: 'container',
            region: 'north',
            height: 80,
            id: 'app-header',
            layout: {
                type: 'hbox',
                align: 'bottom'
            },
            items: [
                {
                    xtype: 'component',
                    flex: 1,
                    id: 'app-header-logo'
                },
                {
                    xtype: 'button',
                    id: 'butCurDept',
                    bind: {
                        text: '当前机构：&nbsp; {CurDept}'
                    }
                },
                {
                    xtype: 'button',
                    id: 'btnCurUser',
                    bind: {
                        text: '当前用户：&nbsp;{UserName}'
                    }
                },
                {
                    xtype: 'button',
                    id: 'btnDesktop',
                    iconCls: 'home',
                    text: '我的桌面'
                },
                {
                    xtype: 'button',
                    id: 'btnChangePwd',
                    iconCls: 'password',
                    text: '修改密码'
                },
                {
                    xtype: 'button',
                    id: 'btnLogout',
                    iconCls: 'logout',
                    text: '安全退出',
                    listeners: {
                        click: 'onBtnLogoutClick'
                    }
                }
            ],
            listeners: {
                render: 'onAppHeaderRender'
            }
        },
        {
            xtype: 'panel',
            region: 'west',
            split: true,
            id: 'appMenu',
            width: 200,
            layout: 'accordion',
            collapsed: false,
            collapsible: true,
            title: '功能菜单',
            listeners: {
                render: 'onAppMenuRender'
            }
        },
        {
            xtype: 'tabpanel',
            region: 'center'
        }
    ]

});