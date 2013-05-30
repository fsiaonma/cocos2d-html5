
var JumpShadow = cc.Layer.extend({

  shadow: null,

  ctor: function() {

    this._super();
    this.setAnchorPoint(cc.p(0, 0));
    this.setPosition(cc.p(0, 0));

    this.shadow = cc.Sprite.create(P_SHADOW);
    this.shadow.setAnchorPoint(cc.p(0.5, 0.5));
    this.shadow.setPosition(cc.p(WIN_SIZE.width / 2, WIN_SIZE.height / 4));
    this.shadow.setVisible(false);

    this.addChild(this.shadow, 100);

  },

  evolve: function(character) {

    this.shadow.setPosition(cc.p(character.getPosition().x, WIN_SIZE.height / 4));
    if (character.status != CHARACTER.STATUS.JUMPING)
      return;

    this.shadow.setVisible(true);
    this.shadow.runAction(cc.Sequence.create(
      cc.ScaleTo.create( ((character.jumpDistance) / TILE.VELOCITY) / 2 ,8),
      cc.ScaleTo.create( ((character.jumpDistance) / TILE.VELOCITY) / 2 ,0),
      cc.CallFunc.create(function() {
         this.shadow.setVisible(false);      
      }, this)    
    ));

  },


});

JumpShadow.create = function() {

  var sg = new JumpShadow();
  if (sg) {
    return sg;
  }
  return null;

};