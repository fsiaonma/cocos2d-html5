require("sugarXC.js");

(function () {
    var d = document;
    var c = {
        COCOS2D_DEBUG:2,
        box2d:false,
        chipmunk:false,
        showFPS:true,
        frameRate:60,
        loadExtension:false,
        renderMode:0,
        tag:'gameCanvas',
        engineDir:'./cocos2d/',
        appFiles:[
            'src/resource.js',
            'src/myApp.js'
        ]
    };

    document.ccConfig = c;

    if (c.SingleEngineFile && !c.engineDir) {
        require(c.SingleEngineFile, "cocos2d-html5");
    } else if (c.engineDir && !c.SingleEngineFile) {
        require(c.engineDir + "platform/jsloader.js");
    } else {
        alert('You must specify either the single engine file OR the engine directory in "cocos2d.js"');
    }
})();
