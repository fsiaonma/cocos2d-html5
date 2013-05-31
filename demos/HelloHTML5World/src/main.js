/**
 *  cocos2dApp 用于启动第一个场景，并初始化项目相关配置。
 */
var cocos2dApp = cc.Application.extend({
    config:document['ccConfig'],
    ctor:function (scene) {
        this._super();
        this.startScene = scene;
        // 根据全局配置项，设定游戏 debug 级别。
        cc.COCOS2D_DEBUG = this.config['COCOS2D_DEBUG'];
        cc.initDebugSetting();
        // 根据全局配置项的 canvas id，找到对应 canvas，并将其设置为主舞台。
        cc.setup(this.config['tag']);
        cc.AppController.shareAppController().didFinishLaunchingWithOptions();
    },
    applicationDidFinishLaunching:function () {
        if(!isXC && cc.RenderDoesnotSupport()){
            alert("Browser doesn't support WebGL");
            return false;
        }
        var director = cc.Director.getInstance();

        // 设置显示帧数。
        director.setDisplayStats(this.config['showFPS']);

        // 根据全局配置设定帧频率。
        director.setAnimationInterval(1.0 / this.config['frameRate']);

        // 根据 g_ressources 配置加载所有资源。
        // 当 g_ressources 中所有资源加载完成后，进入第一个场景。
        cc.LoaderScene.preload(g_ressources, function () {
            director.replaceScene(new this.startScene());
        }, this);

        return true;
    }
});

// 实例化一个 cocos2dApp，初始化游戏相关配置，并进入第一个场景。
var myApp = new cocos2dApp(HelloWorldScene);
