/**
 * Created with IntelliJ IDEA.
 * User: giorgionatili
 * Date: 11/23/12
 * Time: 12:16 AM
 * To change this template use File | Settings | File Templates.
 */
require.config({

    paths: {
        mustache: 'libs/mustache',
        alice: 'libs/alice.min',
        text: 'libs/require/plugins/text',
        templates: 'tpl'
    },

    waitSeconds: 10

});

require([
    // Load our app module and pass it to our definition function
    'index'
], function(app){

    var appData = {

        appName:        'urTrip',
        appSlogan:      'Plan.Report.Share',
        create:         'create your trip',
        open:           'open an existing trip',
        share:          'share your trip',
        year:           '2012',
        rights:         'All rights reserved',
        developer:      'Giorgio Natili',
        developerSite:  'webplatform.io'

    };

    // The "app" dependency is passed in as "App"
    app.init(appData);
});
