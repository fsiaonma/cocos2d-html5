/**
 * 加载 X-Canvas 适配器，使工程能运行在 XC-Adapter 上。
 * 加载后将获得 isXC 全局变量，用于判断当前是否运行在 X-Canvas 引擎上。
 * true 表示当前环境为 X-Canvas，否则为 false。
 */
require("./cocos2d_pro/XC-Adapter.js"); 

(function () {
    // 若当前环境为 X-Canvas，则创建一 Canvas 对象，并设置 id 为 ‘gameCanvas’。
    if(isXC) {
        XCanvas = new Canvas();
        XCanvas.id = 'gameCanvas';
        XCanvas.tagName = "CANVAS";
    }

    var d = document;
    /**
     * 配置 cocos2d-html5 引擎所需信息，该配置列表将在初始化 cocos2d-html5 框架时用到。
     * COCOS2D_DEBUG: 配置 DEBUG 级别。
     * box2d: 是否加载 box2d 物理引擎。
     * chipmunk: 是否加载 chipmunk 物理引擎。
     * showFPS: 是否显示帧数。
     * frameRate: 帧频率。
     * loadExtension: 是否加载拓展项。
     * renderMode: 配置渲染类别：0(default) 1(canvas only) 2(webgl only)。
     * tag: canvas id。
     * engineDir: 库文件根目录。
     * appFiles：逻辑代码文件。
     */
    var c = {
        COCOS2D_DEBUG:2,
        box2d:false,
        chipmunk:false,
        showFPS:true,
        frameRate:60,
        loadExtension:false,
        renderMode:0,
        tag:'gameCanvas',
        engineDir:'./cocos2d_pro/',
        appFiles:[
            './src/resource.js',
            './src/HelloWorldScene.js',
            './src/main.js'
        ]
    };

    document.ccConfig = c;

    if (c.SingleEngineFile && !c.engineDir) {
        require(c.SingleEngineFile, "cocos2d-html5");
    } else if (c.engineDir && !c.SingleEngineFile) {
        // 获取 js 加载配置文件 jsloader.js，通过该文件选择性加载 cocos2d-html5 框架所需库文件。
        require(c.engineDir + "jsloader.js"); 
    } else {
        alert('You must specify either the single engine file OR the engine directory in "cocos2d.js"');
    }
})();
