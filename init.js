/* 
 * Author: Robert Ouko Ohuru 
 * Email: robertohuru@gmail.com  * 
 */
 
"use strict";

Ext.application({
    name: 'LoginApp',
    extend: 'LoginApp.Application',
 
    requires: [
        'LoginApp.view.login.LoginView'
    ],
 
    /* The class name of the View that will be lauched when the application starts. */
    mainView: 'LoginApp.view.login.LoginView'
});
/*--- ---*/
