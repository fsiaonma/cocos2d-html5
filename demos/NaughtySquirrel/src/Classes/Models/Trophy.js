/*
 *  the trophy sprite
 */

var Trophy = cc.Sprite.extend({

  position: null,			      
  trophyInformation: null,  

  ctor: function(type, pos) {

    //this.trophyInformation = TrophyInformation(type); //get trophy information according to type 
    this.trophyInformation = type;
    this._super();
    
    this['isGot'] = false;
    var texture = cc.TextureCache.getInstance().addImage(this.trophyInformation.src);
    this.initWithTexture(texture, cc.RectMake(0, 0, TROPHY.SPRITE_WIDTH, TROPHY.SPRITE_HEIGHT));
    this.setAnchorPoint(cc.p(0.5, 0.5));
    this.setPosition(pos);

    this.showTwink();

  },

  getValue: function() {

    return this.trophyInformation.value;

  },

  showTwink: function() {

    var characterTexture = cc.TextureCache.getInstance().addImage(this.trophyInformation.src);
    var w = TROPHY.SPRITE_WIDTH;
    var h = TROPHY.SPRITE_HEIGHT;
    var i = 0;

    var animation = cc.Animation.create();
    animation.addSpriteFrameWithTexture(characterTexture, cc.RectMake(0, 0, w, h));
    animation.addSpriteFrameWithTexture(characterTexture, cc.RectMake(w, 0, w, h));
    animation.addSpriteFrameWithTexture(characterTexture, cc.RectMake(w * 2, 0, w, h));
    animation.addSpriteFrameWithTexture(characterTexture, cc.RectMake(w * 3, 0, w, h));
    animation.addSpriteFrameWithTexture(characterTexture, cc.RectMake(w * 4, 0, w, h));
    animation.addSpriteFrameWithTexture(characterTexture, cc.RectMake(w * 5, 0, w, h));
    animation.addSpriteFrameWithTexture(characterTexture, cc.RectMake(w * 6, 0, w, h));

    this.action = cc.Animate.create(animation, 0.5, true);
    this.runAction(cc.RepeatForever.create(this.action));

  }
  
});

Trophy.create = function(type, pos) {

  var sg = new Trophy(type, pos);

  if (sg) return sg;
  return null;

};
