/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('SinopiaInnBackoffice.view.main.Main', {
    extend: 'Ext.Container',
    requires: [
        'Ext.Button',
        'Ext.list.Tree',
        'Ext.navigation.View'
    ],

    controller: 'main',
    platformConfig: {
        phone: {
            controller: 'phone-main'
        }
    },

    layout: 'hbox',

    items: [
        {
            xtype: 'maintoolbar',
            docked: 'top',
            userCls: 'main-toolbar shadow',
            
        },
        {
            xtype: 'container',
            userCls: 'main-nav-container',
            reference: 'navigation',
            scrollable: true,
            items: [
                {
                    xtype: 'treelist',
                    reference: 'navigationTree',
                    ui: 'navigation',
                    width: 250,
                    layout:'fit',
                    store: 'NavigationTree',
                    expanderFirst: false,
                    expanderOnly: false,
                    listeners: {
                        itemclick: 'onNavigationItemClick',
                        selectionchange: 'onNavigationTreeSelectionChange'
                    }
                }
            ]
        },
        {
            xtype: 'navigationview',
            flex: 1,
            reference: 'mainCard',
            userCls: 'main-container',
            navigationBar: false
        }
    ]
});
