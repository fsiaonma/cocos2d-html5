/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org


 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
(function () {
    var engine = [
        'cocos2d/platform/CCClass.js',
        'cocos2d/platform/miniFramework.js',
        'cocos2d/platform/CCCommon.js',
        'cocos2d/platform/ZipUtils.js',
        'cocos2d/platform/base64.js',
        'cocos2d/platform/gzip.js',
        'cocos2d/platform/CCMacro.js',
        'cocos2d/platform/CCFileUtils.js',
        'cocos2d/platform/CCTypes.js',
		'cocos2d/platform/CCAccelerometer.js',
        'cocos2d/platform/zlib.min.js',
        'cocos2d/platform/CCEGLView.js',
        'cocos2d/cocoa/CCGeometry.js',
        'cocos2d/platform/Sys.js',
        'cocos2d/platform/CCConfig.js',
        'cocos2d/platform/CCImage.js',
        'cocos2d/kazmath/utility.js',
        'cocos2d/kazmath/vec2.js',
        'cocos2d/kazmath/vec3.js',
        'cocos2d/kazmath/vec4.js',
        'cocos2d/kazmath/ray2.js',
        'cocos2d/kazmath/mat3.js',
        'cocos2d/kazmath/mat4.js',
        'cocos2d/kazmath/plane.js',
        'cocos2d/kazmath/quaternion.js',
        'cocos2d/kazmath/aabb.js',
        'cocos2d/kazmath/GL/mat4stack.js',
        'cocos2d/kazmath/GL/matrix.js',
        'cocos2d/cocoa/CCSet.js',
        'cocos2d/cocoa/CCNS.js',
        'cocos2d/cocoa/CCAffineTransform.js',
        'cocos2d/support/CCPointExtension.js',
        'cocos2d/support/CCUserDefault.js',
        'cocos2d/support/CCVertex.js',
        'cocos2d/support/TransformUtils.js',
        'cocos2d/support/CCTGAlib.js',
        'cocos2d/support/CCPNGReader.js',
        'cocos2d/support/CCTIFFReader.js',
        'cocos2d/shaders/CCShaders.js',
        'cocos2d/shaders/CCShaderCache.js',
        'cocos2d/shaders/CCGLProgram.js',
        'cocos2d/shaders/CCGLStateCache.js',
        'cocos2d/base_nodes/CCNode.js',
        'cocos2d/base_nodes/CCAtlasNode.js',
        'cocos2d/textures/CCTexture2D.js',
        'cocos2d/textures/CCTextureCache.js',
        'cocos2d/textures/CCTextureAtlas.js',
        'cocos2d/misc_nodes/CCRenderTexture.js',
        'cocos2d/misc_nodes/CCProgressTimer.js',
        'cocos2d/misc_nodes/CCMotionStreak.js',
        'cocos2d/misc_nodes/CCClippingNode.js',
        'cocos2d/effects/CCGrid.js',
        'cocos2d/effects/CCGrabber.js',
        'cocos2d/draw_nodes/CCDrawNode.js',
        'cocos2d/actions/CCAction.js',
        'cocos2d/actions/CCActionInterval.js',
        'cocos2d/actions/CCActionInstant.js',
        'cocos2d/actions/CCActionManager.js',
        'cocos2d/actions/CCActionProgressTimer.js',
        'cocos2d/actions/CCActionCamera.js',
        'cocos2d/actions/CCActionEase.js',
        'cocos2d/actions/CCActionGrid.js',
        'cocos2d/actions/CCActionGrid3D.js',
        'cocos2d/actions/CCActionTiledGrid.js',
        'cocos2d/actions/CCActionCatmullRom.js',
        'cocos2d/actions/CCActionPageTurn3D.js',
        'cocos2d/layers_scenes_transitions_nodes/CCScene.js',
        'cocos2d/layers_scenes_transitions_nodes/CCLayer.js',
        'cocos2d/layers_scenes_transitions_nodes/CCTransition.js',
        'cocos2d/layers_scenes_transitions_nodes/CCTransitionProgress.js',
        'cocos2d/layers_scenes_transitions_nodes/CCTransitionPageTurn.js',
        'cocos2d/sprite_nodes/CCSprite.js',
        'cocos2d/sprite_nodes/CCAnimation.js',
        'cocos2d/sprite_nodes/CCAnimationCache.js',
        'cocos2d/sprite_nodes/CCSpriteFrame.js',
        'cocos2d/sprite_nodes/CCSpriteFrameCache.js',
        'cocos2d/sprite_nodes/CCSpriteBatchNode.js',
        'cocos2d/label_nodes/CCLabelAtlas.js',
        'cocos2d/label_nodes/CCLabelTTF.js',
        'cocos2d/label_nodes/CCLabelBMFont.js',
        'cocos2d/particle_nodes/CCParticleSystem.js',
        'cocos2d/particle_nodes/CCParticleSystemQuad.js',
        'cocos2d/particle_nodes/CCParticleExamples.js',
        'cocos2d/particle_nodes/CCParticleBatchNode.js',
        'cocos2d/touch_dispatcher/CCTouchDelegateProtocol.js',
        'cocos2d/touch_dispatcher/CCTouchHandler.js',
        'cocos2d/touch_dispatcher/CCTouchDispatcher.js',
        'cocos2d/touch_dispatcher/CCMouseDispatcher.js',
        'cocos2d/keyboard_dispatcher/CCKeyboardDelegate.js',
        'cocos2d/keyboard_dispatcher/CCKeyboardDispatcher.js',
        'cocos2d/text_input_node/CCIMEDispatcher.js',
        'cocos2d/text_input_node/CCTextFieldTTF.js',
        'cocos2d/CCConfiguration.js',
        'cocos2d/CCDirector.js',
        'cocos2d/CCCamera.js',
        'cocos2d/CCScheduler.js',
        'cocos2d/CCLoader.js',
        'cocos2d/CCDrawingPrimitives.js',
        'cocos2d/platform/CCApplication.js',
        'cocos2d/platform/CCSAXParser.js',
        'cocos2d/platform/AppControl.js',
        'cocos2d/menu_nodes/CCMenuItem.js',
        'cocos2d/menu_nodes/CCMenu.js',
        'cocos2d/tileMap_parallax_nodes/CCTMXTiledMap.js',
        'cocos2d/tileMap_parallax_nodes/CCTMXXMLParser.js',
        'cocos2d/tileMap_parallax_nodes/CCTMXObjectGroup.js',
        'cocos2d/tileMap_parallax_nodes/CCTMXLayer.js',
        'cocos2d/tileMap_parallax_nodes/CCParallaxNode.js',
        'cocos2d/base_nodes/CCdomNode.js',
        'cocos2d/CocosDenshion/SimpleAudioEngine.js'
    ];

    var d = document;
    var c = d.ccConfig;

    if (c.loadExtension != null && c.loadExtension == true) {
        engine = engine.concat([
            'extensions/GUI/CCControlExtension/CCControl.js',
            'extensions/GUI/CCControlExtension/CCControlButton.js',
            'extensions/GUI/CCControlExtension/CCControlUtils.js',
            'extensions/GUI/CCControlExtension/CCInvocation.js',
            'extensions/GUI/CCControlExtension/CCScale9Sprite.js',
            'extensions/GUI/CCControlExtension/CCMenuPassive.js',
            'extensions/GUI/CCControlExtension/CCControlSaturationBrightnessPicker.js',
            'extensions/GUI/CCControlExtension/CCControlHuePicker.js',
            'extensions/GUI/CCControlExtension/CCControlColourPicker.js',
            'extensions/GUI/CCControlExtension/CCControlSlider.js',
            'extensions/GUI/CCControlExtension/CCControlSwitch.js',
            'extensions/GUI/CCScrollView/CCScrollView.js',
            'extensions/GUI/CCScrollView/CCSorting.js',
            'extensions/GUI/CCScrollView/CCTableView.js',
            'extensions/CCBReader/CCNodeLoader.js',
            'extensions/CCBReader/CCBReaderUtil.js',
            'extensions/CCBReader/CCControlLoader.js',
            'extensions/CCBReader/CCSpriteLoader.js',
            'extensions/CCBReader/CCNodeLoaderLibrary.js',
            'extensions/CCBReader/CCBReader.js',
            'extensions/CCBReader/CCBValue.js',
            'extensions/CCBReader/CCBKeyframe.js',
            'extensions/CCBReader/CCBSequence.js',
            'extensions/CCBReader/CCBRelativePositioning.js',
            'extensions/CCBReader/CCBAnimationManager.js',
            'extensions/CCEditBox.js'
        ]);
    }

    if (!c.engineDir) {
        engine = [];
    }
    else {
        if(c.box2d || c.chipmunk){
            engine.push('physics_nodes/CCPhysicsSprite.js');
            engine.push('physics_nodes/CCPhysicsDebugNode.js');
            if (c.box2d)
                engine.push('box2d/box2d.js');
            if (c.chipmunk)
                engine.push('chipmunk/chipmunk.js');
        }
        engine.forEach(function (e, i) {
            engine[i] = c.engineDir + e;
        });
    }

    var loaded = 0;
    var que = engine.concat(c.appFiles);
    if (navigator.userAgent.indexOf("Trident/5") > -1) {
        //ie9
        this.serial = -1;
        var loadNext = function () {
            var s = this.serial + 1;
            if (s < que.length) {
                var f = d.createElement('script');
                f.src = que[s];
                f.serial = s;
                f.onload = loadNext;
                d.body.appendChild(f);
                p = s / (que.length - 1);
                //TODO: code for updating progress bar
            }
        };
        loadNext();
    } else {
        que.forEach(function (f, i) {
            if (isXC) {
                require(f);
            } else {
                var s = d.createElement('script');
                s.async = false;
                s.src = f;
                s.onload = function () {
                    loaded++;
                    p = loaded / que.length;
                    //TODO: code for updating progress bar
                };
                d.body.appendChild(s);
                que[i] = s;
            }
        });
    }
})();

console.log("jsloader load complete");