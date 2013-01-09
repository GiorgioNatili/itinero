
define('index', [
        'mustache',
        'alice',
        'routers/approuter',
        'controllers/SplashScreen',
        'utils/spinner'], (function(mustache, alice, approuter, splashScreen, spinner){

    var appData;

    var bindEvents = function() {

        spinner.init('body', '214,214,214');
        spinner.start()

        if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {

            document.addEventListener("deviceready", onDeviceReady, false);

        } else {

            onDeviceReady(); // Running is the browser

        }

        addEventListener('resetView', onResetView);

    };

    var onDeviceReady = function() {

        console.log('Received Event: onDeviceReady');

        // Build the main app view
        loadTemplate();

    };

    var initInteraction = function() {

        var links = document.getElementsByClassName('sectionNav')[0].getElementsByTagName('a');
        splashScreen.start(links);

    };

    var onResetView = function() {

        initInteraction();

    };

    var templateReady = function(splash){

        spinner.dispose();

        buildSplashScreen(splash);

        approuter.init();
        initInteraction();

        try{

            navigator.splashscreen.hide();

        }catch (error){

            console.log('SplashScreen Hide Error', error.message);

        }

    };

    var buildSplashScreen = function(tpl){

        // Inject the template in the view
        var html = mustache.to_html(tpl, appData);
        document.querySelector('div.app').innerHTML = html;

    };

    var loadTemplate = function () {

        require([
            'text!../tpl/splash-tpl.html'
        ], templateReady);


    };

    var initialize = function(data){

        appData = data;
        bindEvents();

    };

    return {

        init: initialize

    };
}));
