Ext.define('SinopiaInnBackoffice.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',
    storeId: 'NavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [
            {
                text: 'Dashboard',
                iconCls: 'x-fa fa-desktop',
                rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'admindashboard',
                routeId: 'dashboard', // routeId defaults to viewType
                leaf: true
            },
            {
                text: 'Reservations',
                iconCls: 'x-fa fa-calendar',
                rowCls: 'nav-tree-badge nav-tree-badge-hot',
                viewType: 'reservations',
                leaf: true
            },

            {
                text: 'Users',
                iconCls: 'x-fa fa-user',
                viewType: 'users',
                leaf: true
            },
            {
                text: 'Email',
                iconCls: 'x-fa fa-send',
                rowCls: 'nav-tree-badge nav-tree-badge-hot',
                viewType: 'email',
                leaf: true
            },
            {
                text: 'Testimonials',
                iconCls: 'x-fa fa-edit',
                viewType: 'testimonials',
                leaf: true
            },
            {
                text: 'CMS',
                iconCls: 'x-fa fa-leanpub',
                expanded: false,
                selectable: false,
                //routeId: 'pages-parent',
                //id: 'pages-parent',

                children: [

                ]
            },
            {
                text: 'Accounts',
                iconCls: 'x-fa fa-pie-chart',
                viewType: 'accounts',
                leaf: true
            },

            {
                text: 'Widgets',
                iconCls: 'x-fa fa-flask',
                //viewType: 'widgets',
                leaf: true
            },
        ]
    }
});