/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'SinopiaInnBackoffice.Application',

    name: 'SinopiaInnBackoffice',

    requires: [
        // This will automatically load all classes in the SinopiaInnBackoffice namespace
        // so that application classes do not need to require each other.
        'SinopiaInnBackoffice.*'
    ],

    // The name of the initial view to create.
    mainView: 'SinopiaInnBackoffice.view.main.Main'
});
