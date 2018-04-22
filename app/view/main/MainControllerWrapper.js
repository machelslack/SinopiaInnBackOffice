

Ext.define('SinopiaInnBackoffice.view.main.MainContrainerWrapper', {
    extend: 'Ext.container.Container',
    xtype: 'maincontainerwrap',

   
    scrollable: 'y',


    beforeLayout: function () {

        var me = this,
            height = Ext.Element.getViewportHeight() - 64,
            navTree = me.getComponent('navigationTreeList');

        me.minHeight = height;

        navTree.setStyle({
            'min-height': height + 'px'
        });

        me.callParent(arguments);
    }
});
