require("cocos2d/XC-Adapter.js");

var XCanvas;

var WIN_SIZE;
var SCALE_RATE = 1;
var STANDARD_SIZE;

(function () {
    STANDARD_SIZE = {
      width  : 480,
      height : 720,
    };

    if(isXC) {
        XCanvas = new Canvas();
        XCanvas.id = 'gameCanvas';
        XCanvas.tagName = "CANVAS";
    }

    WIN_SIZE = isXC ? {
        width : XCanvas.width,
        height : XCanvas.height
    } : {
        width  : STANDARD_SIZE.width * SCALE_RATE,
        height : STANDARD_SIZE.height * SCALE_RATE,
    }

    var c = {
        COCOS2D_DEBUG:2,
        box2d:false,
        chipmunk:false,
        showFPS:true,
        frameRate:60,
        loadExtension:false,
        renderMode:1,
        tag:'gameCanvas',
        engineDir:'./cocos2d/',
        appFiles:[
            'src/resource.js',
            'src/Classes/AppDelegate.js',
            'src/Classes/Auxiliary/Array.js',
            'src/Classes/Auxiliary/Utils.js',
            'src/Classes/Config/Global.js',
            'src/Classes/Config/Location.js',
            'src/Classes/Config/Themes.js',
            'src/Classes/Controllers/LevelController.js',
            'src/Classes/Information/TilesInformation/IsBounded.js',
            'src/Classes/Information/TilesInformation/IsValid.js',
            'src/Classes/Information/TilesInformation/GenerateTrophies.js',
            'src/Classes/Information/TilesInformation/BasicTile.js',
            'src/Classes/Information/TilesInformation/Tiles.js',
            'src/Classes/Information/TilesInformation/TileInformation.js',
            'src/Classes/Information/BackgroundInformation/Backgrounds.js',
            'src/Classes/Information/BackgroundInformation/BackgroundInformation.js',
            'src/Classes/Controllers/BackgroundController.js',
            'src/Classes/Information/TrophiesInformation/Coin.js',
            'src/Classes/Information/TrophiesInformation/TrophiesInformation.js',
            'src/Classes/Controllers/TrophiesController.js',
            'src/Classes/Controllers/TrophiesActionsController.js',
            'src/Classes/Information/Environments/Footprints.js',
            'src/Classes/Information/Environments/JumpShadow.js',
            'src/Classes/Information/Environments/LightCircle.js',
            'src/Classes/Information/Environments/Cloud.js',
            'src/Classes/Controllers/EnvironmentsController.js',
            'src/Classes/Information/PropertiesInformation/Double.js',
            'src/Classes/Information/PropertiesInformation/Triple.js',
            'src/Classes/Information/PropertiesInformation/Magnet.js',
            'src/Classes/Information/PropertiesInformation/Hp.js',
            'src/Classes/Information/PropertiesInformation/PropertiesInformation.js',
            'src/Classes/Controllers/PropertiesController.js',
            'src/Classes/Scenes/MainMenu.js',
            'src/Classes/Scenes/GameOver.js',
            'src/Classes/Scenes/About.js',
            'src/Classes/Models/Tile.js',
            'src/Classes/Models/Trophy.js',
            'src/Classes/Models/Trophies.js',
            'src/Classes/Models/Property.js',
            'src/Classes/Models/Character.js',
            'src/Classes/Models/BackgroundTile.js',
            'src/Classes/Models/Background.js',
            'src/Classes/Panels/ScoreItem.js',
            'src/Classes/Panels/ScoreLayer.js',
            'src/Classes/Panels/PauseLayer.js',
            'src/Classes/Information/TrackInformation.js',
            'src/Classes/Models/Track.js',
            'src/main.js'
        ]
    };

    document.ccConfig = c;

    if (c.SingleEngineFile && !c.engineDir) {
        require(c.SingleEngineFile, "cocos2d-html5");
    } else if (c.engineDir && !c.SingleEngineFile) {
        require(c.engineDir + "jsloader.js");
    } else {
        alert('You must specify either the single engine file OR the engine directory in "cocos2d.js"');
    }
})();
