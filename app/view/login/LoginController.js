/* 
 * Author: Robert Ouko Ohuru 
 * Email: robertohuru@gmail.com  * 
 */

"use strict";
Ext.define('LoginApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login-main',
    init: function () {
        LoginApp.app.loginCtrl = this;
        this.control({
            'loginview': {
                'boxready': 'initializeView'
            }
        });
    },
    initializeView: function () {
        LoginApp.app.loginCtrl = this;               
    },
});