
var GameOver = cc.Layer.extend({

  init: function (scoreLayer, type) {

    if (this._super) {

      this._super();
      
      var sp = cc.Sprite.create(P_GAMEOVERBG);
      sp.setAnchorPoint(cc.p(0.5, 0.5));
      sp.setPosition(cc.p(WIN_SIZE.width / 2, WIN_SIZE.height / 2)),
      this.addChild(sp, 0, 1);

      var gameoverLogo = cc.Sprite.create(P_GAMEOVER);
      gameoverLogo.setAnchorPoint(cc.p(0.5, 0.5));
      gameoverLogo.setPosition(cc.p(WIN_SIZE.width / 2, WIN_SIZE.height * 5 / 7 ));
      this.addChild(gameoverLogo, 10, 1);

      this.addChild(scoreLayer, 100);
      scoreLayer.generatePanel([{
        type: 'trophies',
        position: cc.p(LOCATION.GAMEOVER_LAYER.SCORE.X, LOCATION.GAMEOVER_LAYER.TROPHIES.Y),
      }, {
        type: 'distance',
        position: cc.p(LOCATION.GAMEOVER_LAYER.SCORE.X, LOCATION.GAMEOVER_LAYER.DISTANCE.Y),
      }, {
        type: 'score',
        position: cc.p(LOCATION.GAMEOVER_LAYER.SCORE.X, LOCATION.GAMEOVER_LAYER.SCORE.Y),
      }]);


      var playAgainNormal = cc.Sprite.create(P_MENU, cc.RectMake(0, 0, 200, 50));
      var playAgainSelected = cc.Sprite.create(P_MENU, cc.RectMake(0, 50, 200, 50));
      var playAgainDisabled = cc.Sprite.create(P_MENU, cc.RectMake(0, 50 * 2, 200, 50));
      var playAgain = cc.MenuItemSprite.create(
        playAgainNormal, 
        playAgainSelected, 
        playAgainDisabled, 
        this.onPlayAgain, 
        this
      );
      var menu = cc.Menu.create(playAgain);
      this.addChild(menu, 10, 2);
      menu.setPosition(cc.p(WIN_SIZE.width / 2, 220));


      /*var typeSrc = null;

      switch (type) {

        case GAMEOVER.TYPE.CROSS_BORDER:
             typeSrc = P_INVALID;
             break;
        case GAMEOVER.TYPE.NO_HP:
             typeSrc = P_NOHP;
             break;

      };

      var gameOverTypeSprite = cc.Sprite.create(typeSrc);
      gameOverTypeSprite.setAnchorPoint(cc.p(0.5, 0.5));
      gameOverTypeSprite.setPosition(cc.p(WIN_SIZE.width / 2, WIN_SIZE.height / 10));
      this.addChild(gameOverTypeSprite, 10);*/

      this.schedule(this.update,0.1);

    }

    return true;

  },

  onPlayAgain: function (pSender) {

    cc.Director.getInstance().replaceScene(new TrackScene());

  }

});

GameOver.create = function (scoreLayer, type) {

  var sg = new GameOver();
  if (sg && sg.init(scoreLayer, type)) {
    return sg;
  }
  return null;

};
