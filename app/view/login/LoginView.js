/* 
 * Author: Robert Ouko Ohuru 
 * Email: robertohuru@gmail.com  * 
 */

"use strict";
Ext.define('LoginApp.view.login.LoginView', {
    extend: 'Ext.container.Viewport',
    xtype: 'loginview',
    requires: [
        'LoginApp.view.login.LoginController'
    ],
    controller: 'login-main',
    itemId: 'login_view',
    id: 'login_view',
    padding: 2,
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'panel',
            flex: 0.1,
            margin: '2 2 0 2',
            id: 'headerpanel'
        },
        {
            xtype: 'panel',
            flex: 0.8,
            margin: '2 2 0 2',
            id: "mainpanel",
            layout: {
                type: 'hbox',
                pack: 'middle',
                align: 'middle'
            },
            items: [
                {
                    xtype: 'panel',
                    id: 'login_panel',
                    width: 400,
                    height: 400,
                    title: 'Login Form',
                    hidden: false,
                    layout: {
                        type: 'vbox',
                        pack: 'middle',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'label',
                            anchor: '100%',
                            margin: '5 10',
                            html: 'Email Address'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            margin: '5 10',
                            id: 'email',
                            vtype: 'email',
                            fieldStyle: 'font-family: FontAwesome',
                            emptyText: '\uf0e0 Email'
                        },
                        {
                            xtype: 'label',
                            anchor: '100%',
                            margin: '5 10',
                            html: 'Password'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            margin: '5 10',
                            id: 'password',
                            inputType: 'password',
                            allowBlank: false,
                            fieldStyle: 'font-family: FontAwesome',
                            emptyText: '\uF084 Password'
                        },
                        {
                            xtype: 'panel',
                            border: false,
                            layout: {
                                type: 'hbox',
                                pack: 'start',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    margin: '5 10',
                                    width: 100,
                                    text: 'Login',
                                    iconCls: 'x-fa fa-unlock whiteIcon',
                                },
                                {

                                    xtype: 'label',
                                    margin: '20 10 0 10',
                                    html: '<span><a href="#" style="color: blue; text-decoration: underline">Sign Up</a></span>',
                                    listeners: {
                                        render: function (c) {
                                            c.getEl().on('click', function () {
                                                Ext.getCmp('login_panel').hide();
                                                Ext.getCmp('registration_panel').show();
                                            });
                                        }
                                    }
                                }
                            ]
                        },
                    ]
                },
                {
                    xtype: 'panel',
                    id: 'registration_panel',
                    width: 400,
                    height: 400,
                    title: 'Registration Form',
                    hidden: true,
                    layout: {
                        type: 'vbox',
                        pack: 'middle',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'label',
                            anchor: '100%',
                            margin: '5 10',
                            html: 'Email Address'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            margin: '5 10',
                            id: 'reg_email',
                            vtype: 'email',
                            fieldStyle: 'font-family: FontAwesome',
                            emptyText: '\uf0e0 Email'
                        },
                        {
                            xtype: 'label',
                            anchor: '100%',
                            margin: '5 10',
                            html: 'Password'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            margin: '5 10',
                            id: 'reg_password',
                            inputType: 'password',
                            allowBlank: false,
                            fieldStyle: 'font-family: FontAwesome',
                            emptyText: '\uF084 Password'
                        },
                        {
                            xtype: 'label',
                            anchor: '100%',
                            margin: '5 10',
                            html: 'Repeat Password'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            margin: '5 10',
                            id: 'reg_password2',
                            inputType: 'password',
                            allowBlank: false,
                            fieldStyle: 'font-family: FontAwesome',
                            emptyText: '\uF084 Password'
                        },
                        {
                            xtype: 'panel',
                            border: false,
                            layout: {
                                type: 'hbox',
                                pack: 'start',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    margin: '5 10',
                                    width: 100,
                                    text: 'Sign Up'
                                },
                                {

                                    xtype: 'label',
                                    margin: '20 10 0 10',
                                    html: '<span><a href="#" style="color: blue; text-decoration: underline">Login</a></span>',
                                    listeners: {
                                        render: function (c) {
                                            c.getEl().on('click', function () {
                                                Ext.getCmp('login_panel').show();
                                                Ext.getCmp('registration_panel').hide();
                                            });
                                        }
                                    }
                                }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            xtype: 'panel',
            id: 'footerpanel',
            flex: 0.1,
            margin: '2',
            layout: {
                type: 'hbox',
                pack: 'middle',
                align: 'middle'
            },
            items: [
                {
                    xtype: 'label',
                    html: '<span style="color: white">Copyright &copy; '+new Date().getFullYear()+' Nerds & Company</span>'
                }
            ]
        }
    ]
});

