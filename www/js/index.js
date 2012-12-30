
define('index', [
        'mustache',
        'alice',
        'text'], (function(mustache, alice){

    var appData;

    var bindEvents = function() {

        if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {

            document.addEventListener("deviceready", onDeviceReady, false);

        } else {

            onDeviceReady(); // Running is the browser

        }

    };

    var onDeviceReady = function() {

        console.log('Received Event: onDeviceReady');

        // Build the main app view
        loadTemplates();

    };

    var templatesReady = function(splash){

        buildSplashScreen(splash);

       // navigator.splashscreen.hide();

    };

    var buildSplashScreen = function(tpl){

        // Inject the template in the view
        var html = mustache.to_html(tpl, appData);
        document.querySelector('div.app').innerHTML = html;

    };

    var loadTemplates = function () {

        require([
            'text!../tpl/splash-tpl.html'
        ], templatesReady);


        console.log(document.paths)

    };

    var initialize = function(data){

        appData = data;
        bindEvents();

    };

    return {

        init: initialize

    };
}));
