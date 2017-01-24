/*
 * File: app/model/DictStdDisease.js
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

Ext.define('ccmz.model.DictStdDisease', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.String',
        'Ext.data.field.Integer'
    ],

    fields: [
        {
            type: 'string',
            name: 'Code'
        },
        {
            type: 'string',
            name: 'ShortName'
        },
        {
            type: 'string',
            name: 'Category'
        },
        {
            type: 'string',
            name: 'Memo'
        },
        {
            type: 'int',
            name: 'RT_ID'
        },
        {
            type: 'string',
            name: 'Name'
        }
    ]
});