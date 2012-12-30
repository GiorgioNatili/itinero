/**
 * Created with IntelliJ IDEA.
 * User: giorgionatili
 * Date: 12/19/12
 * Time: 6:16 PM
 * To change this template use File | Settings | File Templates.
 */
({
    baseUrl: 'js/',
    paths: {
        mustache: 'libs/mustache',
        alice: 'libs/alice.min',
        text: 'libs/require/plugins/text'
    },
    /*optimize:'uglify2',
    skipDirOptimize:false,
    generateSourceMaps:false,
    normalizeDirDefines:'skip',
    closure: {
         CompilerOptions: {},
         CompilationLevel: 'ADVANCED_OPTIMIZATIONS',
         loggingLevel: 'WARNING'
    },*/
    name: 'main',
    out: 'js/main-built.js'
})