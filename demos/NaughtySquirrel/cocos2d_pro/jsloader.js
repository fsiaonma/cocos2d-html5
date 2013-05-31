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
        'cocos2d/cocos2d.min.js',
    ];

    var d = document;
    var c = d.ccConfig;

    if (c.loadExtension != null && c.loadExtension == true) {
        engine = engine.concat([
            'extensions/extension.min.js',
        ]);
    }

    if (!c.engineDir) {
        engine = [];
    }
    else {
        if(c.box2d || c.chipmunk){
            if (c.box2d)
                engine.push('box2d/box2d.min.js');
            if (c.chipmunk)
                engine.push('chipmunk/chipmunk.min.js');
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