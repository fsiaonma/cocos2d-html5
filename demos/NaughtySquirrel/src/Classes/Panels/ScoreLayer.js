
var ScoreLayer = cc.Layer.extend({

  trophies: null,
  distance: null,
  score: null,

  ctor: function() {

    this._super();
    this.initPanelItems();

    return this;

  },

  initPanelItems: function() {

    this.trophies = ScoreItem.create(P_TROPHIES, 0);
    this.addChild(this.trophies);

    this.distance = ScoreItem.create(P_DISTANCE, 0);
    this.addChild(this.distance);

    this.score = ScoreItem.create(P_SCORE, 0);
    this.addChild(this.score);

    this.setItemsInvisiable();

  },

  setItemsInvisiable: function(){

    this.trophies.setVisible(false);
    this.distance.setVisible(false);
    this.score.setVisible(false);

  },

  generatePanel: function(items) {

    this.setItemsInvisiable();

    for (var i = 0; i < items.length; ++i) {

      switch (items[i].type) {

        case 'trophies': 
          this.trophies.setVisible(true);
          this.trophies.setPosition(items[i].position);
        break;
        case 'distance':
          this.distance.setVisible(true);
          this.distance.setPosition(items[i].position);
        break;
        case 'score':
          this.score.setVisible(true);
          this.score.setPosition(items[i].position);
        break;

      }

    }

  },

  updateScores: function(trophy) {

    this.updateTrophyScore(trophy);
    this.updateDistance();

    this.updateTotalScore();

  },

  updateTrophyScore: function(trophy) {

    if (!trophy)
      return ;

    this.trophies.updateValue(function(trophyScore) {

      if (trophyScore + trophy.getValue() > 9999) 
        return 9999;

      return trophyScore + trophy.getValue();

    });

  },

  updateDistance: function() {

    this.distance.updateValue(function(distance) {

      if (distance + 1 > 9999) 
        return 9999;
      return distance + 1;

    });

  },

  updateTotalScore: function() {

    var self = this;
    this.score.updateValue(function() {

      return self.trophies.getValue() + self.distance.getValue();

    });


  }, 

});

ScoreLayer.create = function() {

  var sg = new ScoreLayer();

  if (sg) return sg;
  return null;

};
