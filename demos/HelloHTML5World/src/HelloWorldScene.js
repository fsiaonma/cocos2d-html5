/**
 * 定义一个圆形精灵。实例化该精灵时会默认执行 ctor 构造方法。
 */
var CircleSprite = cc.Sprite.extend({
    _degree:0,
    ctor:function () {
        this._super();
    },
    draw:function () {
        cc.drawingUtil.setDrawColor4B(255,255,255,255);
        if (this._degree < 0)
            this._degree = 360;
        cc.drawingUtil.drawCircle(cc.PointZero(), 30, cc.DEGREES_TO_RADIANS(this._degree), 60, true);
    },
    myUpdate:function (dt) {
        this._degree -= 6;
    }
});

/**
 * 定义 Helloworld 层。
 */
var Helloworld = cc.Layer.extend({
    isMouseDown:false,
    helloImg:null,
    helloLabel:null,
    circle:null,
    sprite:null,
    pause:false,

    init:function () {
        var selfPointer = this;

        // 先执行 _super() 方法，继承父类相关属性。
        this._super();

        // 获取舞台大小。
        var size = cc.Director.getInstance().getWinSize();

        // 实例化一个菜单按钮 closeItem，
        // 提供平常样式，按下时样式，回调函数(这里实现暂停效果)，作用域对象。
        var closeItem = cc.MenuItemImage.create(
            "res/CloseNormal.png",
            "res/CloseSelected.png",
            function () {
                selfPointer.pause = !selfPointer.pause;
                if(selfPointer.pause) {
                    cc.Director.getInstance().pause();
                }
                else {
                    cc.Director.getInstance().resume();
                }
            },this);

        closeItem.setAnchorPoint(cc.p(0.5, 0.5)); // 设置 closeItem 锚点为 (0.5, 0.5)。
        closeItem.setScale(2); // 设置 closeItem 的大小比例为 2。

        var menu = cc.Menu.create(closeItem); // 将 closeItem 添加到菜单。
        menu.setPosition(cc.PointZero()); // 设置菜单坐标为 0。
        
        this.addChild(menu, 1); // 将菜单添加到当前层。
        closeItem.setPosition(cc.p(size.width - 40, 40)); // 设置 closeItem 位置。

        // 创建一文本框，并填写内容为 Hello World，并设置位置，同时添加到当前层。
        this.helloLabel = cc.LabelTTF.create("Hello World", "Arial", 38);
        this.helloLabel.setPosition(cc.p(size.width / 2, 0));
        this.addChild(this.helloLabel, 5);

        // 创建额外附加层并添加到当前层。
        var lazyLayer = cc.Layer.create();
        this.addChild(lazyLayer);

        // 创建并添加一个 HelloWorld 精灵。并设置位置，大小比例，角度。
        this.sprite = cc.Sprite.create("res/HelloWorld.png");
        this.sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        this.sprite.setScale(0.5);
        this.sprite.setRotation(180);

        // 将 Helloworld 精灵添加到附加层上。
        lazyLayer.addChild(this.sprite, 0);

        // 设置 Helloworld 精灵依照 EaseElasticInOut 的运动轨迹，2 秒内旋转到 0 角度。
        var rotateToA = cc.RotateTo.create(2, 0);
        var EaseRotateTo = cc.EaseElasticInOut.create(rotateToA, 0.3);
        
        // 设置 Helloworld 精灵依照 EaseElasticInOut 的运动轨迹，2 秒内放大到屏幕大小。
        var scaleToA = cc.ScaleTo.create(2, size.width / this.sprite._rect.size.width, size.height / this.sprite._rect.size.height);
        var EaseScaleTo = cc.EaseElasticInOut.create(scaleToA, 0.3);
        
        // 根据以上 2 项，通过 runAction 方法执行 Helloworld 精灵的对应动作。
        this.sprite.runAction(cc.Sequence.create(EaseRotateTo, EaseScaleTo));

        // 实例化 circle 精灵，并设置相关执行，同时执行指定动作。
        this.circle = new CircleSprite();
        this.circle.setPosition(cc.p(40, size.height - 60));
        this.addChild(this.circle, 2);
        this.circle.schedule(this.circle.myUpdate, 1 / 60);
        this.helloLabel.runAction(cc.Spawn.create(cc.MoveBy.create(2.5, cc.p(0, size.height - 40)),cc.TintTo.create(2.5,255,125,0)));

        // 启动 touch 事件。
        this.setTouchEnabled(true);

        return true;
    },
    menuCloseCallback:function (sender) {
        cc.Director.getInstance().end();
    },
    onTouchesBegan:function (touches, event) {
        this.isMouseDown = true;
    },
    onTouchesMoved:function (touches, event) {
        if (this.isMouseDown) {
            if (touches) {
            }
        }
    },
    onTouchesEnded:function (touches, event) {
        this.isMouseDown = false;
    },
    onTouchesCancelled:function (touches, event) {
        console.log("onTouchesCancelled");
    }
});

/**
 * 定义 HelloWorldScene 场景。
 */
var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Helloworld(); // 实例化一个 Helloworld 层。
        layer.init(); 
        this.addChild(layer); // 将 helloworld 层添加到场景。
    }
});

