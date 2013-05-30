var fs  = require('fs'); 
var jsp = require("./uglify-js").parser;
var pro = require("./uglify-js").uglify;

var buildFiles = [];
var engine = [
    'platform/CCClass.js',
    'platform/miniFramework.js',
    'platform/CCCommon.js',
    'platform/ZipUtils.js',
    'platform/base64.js',
    'platform/gzip.js',
    'platform/CCMacro.js',
    'platform/CCFileUtils.js',
    'platform/CCTypes.js',
    'platform/CCAccelerometer.js',
    'platform/zlib.min.js',
    'platform/CCEGLView.js',
    'cocoa/CCGeometry.js',
    'platform/Sys.js',
    'platform/CCConfig.js',
    'platform/CCImage.js',
    'kazmath/utility.js',
    'kazmath/vec2.js',
    'kazmath/vec3.js',
    'kazmath/vec4.js',
    'kazmath/ray2.js',
    'kazmath/mat3.js',
    'kazmath/mat4.js',
    'kazmath/plane.js',
    'kazmath/quaternion.js',
    'kazmath/aabb.js',
    'kazmath/GL/mat4stack.js',
    'kazmath/GL/matrix.js',
    'cocoa/CCSet.js',
    'cocoa/CCNS.js',
    'cocoa/CCAffineTransform.js',
    'support/CCPointExtension.js',
    'support/CCUserDefault.js',
    'support/CCVertex.js',
    'support/TransformUtils.js',
    'support/CCTGAlib.js',
    'support/CCPNGReader.js',
    'support/CCTIFFReader.js',
    'shaders/CCShaders.js',
    'shaders/CCShaderCache.js',
    'shaders/CCGLProgram.js',
    'shaders/CCGLStateCache.js',
    'base_nodes/CCNode.js',
    'base_nodes/CCAtlasNode.js',
    'textures/CCTexture2D.js',
    'textures/CCTextureCache.js',
    'textures/CCTextureAtlas.js',
    'misc_nodes/CCRenderTexture.js',
    'misc_nodes/CCProgressTimer.js',
    'misc_nodes/CCMotionStreak.js',
    'misc_nodes/CCClippingNode.js',
    'effects/CCGrid.js',
    'effects/CCGrabber.js',
    'draw_nodes/CCDrawNode.js',
    'actions/CCAction.js',
    'actions/CCActionInterval.js',
    'actions/CCActionInstant.js',
    'actions/CCActionManager.js',
    'actions/CCActionProgressTimer.js',
    'actions/CCActionCamera.js',
    'actions/CCActionEase.js',
    'actions/CCActionGrid.js',
    'actions/CCActionGrid3D.js',
    'actions/CCActionTiledGrid.js',
    'actions/CCActionCatmullRom.js',
    'actions/CCActionPageTurn3D.js',
    'layers_scenes_transitions_nodes/CCScene.js',
    'layers_scenes_transitions_nodes/CCLayer.js',
    'layers_scenes_transitions_nodes/CCTransition.js',
    'layers_scenes_transitions_nodes/CCTransitionProgress.js',
    'layers_scenes_transitions_nodes/CCTransitionPageTurn.js',
    'sprite_nodes/CCSprite.js',
    'sprite_nodes/CCAnimation.js',
    'sprite_nodes/CCAnimationCache.js',
    'sprite_nodes/CCSpriteFrame.js',
    'sprite_nodes/CCSpriteFrameCache.js',
    'sprite_nodes/CCSpriteBatchNode.js',
    'label_nodes/CCLabelAtlas.js',
    'label_nodes/CCLabelTTF.js',
    'label_nodes/CCLabelBMFont.js',
    'particle_nodes/CCParticleSystem.js',
    'particle_nodes/CCParticleSystemQuad.js',
    'particle_nodes/CCParticleExamples.js',
    'particle_nodes/CCParticleBatchNode.js',
    'touch_dispatcher/CCTouchDelegateProtocol.js',
    'touch_dispatcher/CCTouchHandler.js',
    'touch_dispatcher/CCTouchDispatcher.js',
    'touch_dispatcher/CCMouseDispatcher.js',
    'keyboard_dispatcher/CCKeyboardDelegate.js',
    'keyboard_dispatcher/CCKeyboardDispatcher.js',
    'text_input_node/CCIMEDispatcher.js',
    'text_input_node/CCTextFieldTTF.js',
    'CCConfiguration.js',
    'CCDirector.js',
    'CCCamera.js',
    'CCScheduler.js',
    'CCLoader.js',
    'CCDrawingPrimitives.js',
    'platform/CCApplication.js',
    'platform/CCSAXParser.js',
    'platform/AppControl.js',
    'menu_nodes/CCMenuItem.js',
    'menu_nodes/CCMenu.js',
    'tileMap_parallax_nodes/CCTMXTiledMap.js',
    'tileMap_parallax_nodes/CCTMXXMLParser.js',
    'tileMap_parallax_nodes/CCTMXObjectGroup.js',
    'tileMap_parallax_nodes/CCTMXLayer.js',
    'tileMap_parallax_nodes/CCParallaxNode.js',
    'base_nodes/CCdomNode.js',
    'CocosDenshion/SimpleAudioEngine.js'
];

var options = function(args) {
  var opts = {};
  for (var i = 2; i < args.length; i++) {
    var arg = args[i];
    if (arg[0] === "-") {
      var o = arg.slice(1);
      opts[o] = {root: 1, output: 1}[o] ? args[++i] : true;
    } else {
      opts.source = arg;
    }
  }
  return opts;
};

var opt = options(process.argv);
var root_path = opt.source;

(function (root){
    engine.map(function (item) {
        buildFiles.push(root + '/' + item);
    })
})(root_path);

console.log(buildFiles);

// 批量读取文件，压缩之
(function (fileIn, fileOut) {
    if (fileIn.length > 0) {
        var finalCode = [];
        var origCode = '';
        var ast = '';
        for (var i = 0,len = fileIn.length; i < len; i++) {
            origCode = fs.readFileSync(fileIn[i], 'utf8');
            ast = jsp.parse(origCode); 
            ast = pro.ast_mangle(ast); 
            ast = pro.ast_squeeze(ast);
            finalCode.push(pro.gen_code(ast), ';');
        };
    }
    fs.writeFileSync(fileOut, finalCode.join(''), 'utf8');
})(buildFiles, opt.output);

