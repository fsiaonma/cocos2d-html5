
var Cloud = cc.Sprite.extend({

  cloudSrc: [P_CLOUD_1, P_CLOUD_2, P_CLOUD_3, P_CLOUD_4],

  ctor: function(index) {

    this._super();
    this.initWithFile(this.cloudSrc[index]);
    this.setAnchorPoint(cc.p(0.5, 0.5));
    this.setVisible(false);

    this.randomMove();

  },

  setRandomPosition: function() {

    this.setPosition(cc.p(
      Utils.Random.range(0, 480),
      Utils.Random.range(0, 720)
    ));
  
  },

  randomMove: function() {

    var rand = Math.random();

    this.setVisible(true);
    this.setRandomPosition();

    this.runAction(cc.Sequence.create(
      cc.FadeIn.create(1 + Utils.Random.range(0, 1)),
      cc.MoveBy.create(0.5 + Utils.Random.range(0, 1), cc.p(Utils.Random.range(-80, 80), 0)),
      cc.FadeOut.create(1 + Utils.Random.range(0, 1)),
      cc.CallFunc.create(function() {
        this.setVisible(false);
        this.randomMove();
      }, this)
    ));
  
  },

});

var Sky = cc.Layer.extend({

  cloud: [],
  
  duration: 0,

  ctor: function() {

    this._super();

    for (var i = 0; i < 5; ++i) {

      var index = Math.floor(Math.random() * 4);
      var cloudSprite = new Cloud(index);
      this.cloud.push(cloudSprite);
      this.addChild(cloudSprite, 100);

    }

  },

  evolve: function() {
  }

});

Sky.create = function() {

  var sg = new Sky();
  if (sg) {
    return sg;
  }
  return null;

};
