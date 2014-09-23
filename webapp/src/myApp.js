var MyLayer = cc.Layer.extend({
    helloLabel:null,
    sprite:null,

    init:function () {
    	this._size = cc.Director.getInstance().getWinSize(); // 获得游戏屏幕尺寸
    	this.gameLayer = cc.Layer.create(); // 创建名为“gameLayer”的新图层
    	this.addChild(this.gameLayer); //加在这个新图层
    	var bg = cc.Sprite.create(s_HelloWorld); // 创建精灵加载图片“s_HelloWorld”
    	this.gameLayer.addChild(bg, 1); //在gameLayer层上加载这个精灵
    	bg.setAnchorPoint(cc.p(0.5, 0.5));// 设置锚点
    	bg.setPosition(this._size.width / 2, this._size.height /2);// 设置位置
    },
    
    // 场景切换
	onNewGame : function(pSender) {
		this._size = cc.Director.getInstance().getWinSize(); // 获得屏幕尺寸大小
		var scene = cc.Scene.create(); // 创建新场景
		var gsl = new GameSceneLayer(); // 创建新场景
		gsl.init(); // 初始化新图层scene.addChild(gsl,1); // 加载新场景
		var bgLayer = cc.Layer.create(); // 创建新层
		var bkPng = cc.Sprite.create(s_bg01); // 创建新精灵并加载图片
		bgLayer.addChild(bkPng); // 将精灵加在进层
		bkPng.setAnchorPoint(cc.p(0.5, 0.5)); // 设置锚点
		bkPng.setPosition(this._size.width / 2, this._size.height / 2); // 设施位置
		scene.addChild(bgLayer, 0); // 将层加载进场景
		cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2, scene));
	}
});

var GameSceneLayer = cc.Layer.extend({
	isMouseDown: false, // 鼠标反转：否
	helloImg: null,  // 设为全局变量，内容为“空”
	helloLabel: null, //设为全局变量，内容为“空”
	circle: null,  // 设为全局变量，内容为“空”
	sprite: null,  // 设为全局变量，内容为“空”
	_size: null,  // 设为全局变量，内容为“空”
	gameLayer: null,  // 设为全局变量，内容为“空”
	gameLayer02: null, // 设为全局变量，内容为“空”
	_jetSprite: null, // 设为全局变量，内容为“空”
	init: function () {
		this._super(); //  必须调用父类init（）方法，很多bug都是由于没有调用父类init（）方法造成的
		this._size = cc.Director.getInstance().getWinSize(); 
		this.gameLayer02 = cc.Layer.create();
		this.addChild(this.gameLayer02);
		this._jetSprite = cc.Sprite.create (s_Jet);
		this._jetSprite.setAnchorPoint(0.5, 0.5);
		this._jetSprite.setPosition(this._size.width / 2,this._size.height / 5);
		this._jetSprite.setScale(0.25);
		this.gameLayer02.addChild(this._jetSprite, 0);
		this.setTouchEnabled(true);  // 设置触摸模式为：可用
		this.setKeyboardEnabled(true);  // 设置键盘为：可用
		this.setMouseEnabled(true);  // 设置鼠标为：可用
		this.setPosition(new cc.Point(0, 0));
	}
});

var MyScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MyLayer();
        this.addChild(layer);
        layer.init();
    }
});
