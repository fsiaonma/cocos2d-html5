var isXC;
var XCanvas;
var HTMLCanvasElement, HTMLImageElement;
var xcIsLoading = false;
var require;

(function () {
    isXC = navigator.userAgent.indexOf("h5Accelerator") > -1 ? true : false;

    if(isXC) {
        XCanvas = new Canvas();
        XCanvas.id = 'gameCanvas';
        XCanvas.tagName = "CANVAS";
    }
    
    HTMLCanvasElement  = HTMLCanvasElement ? HTMLCanvasElement : Canvas;
    HTMLImageElement = HTMLImageElement ? HTMLImageElement : Image;

    require = isXC ? require : function(src, id) {
        if (!xcIsLoading) {
            var script = document.createElement("script");
            script.src = src;
            script.async = false;
            script.id = id;
            xcIsLoading = true;
            script.onload = function() {
                xcIsLoading = false;
            };
            script.onerror = function() {
                xcIsLoading = false;
            }
            document.body.appendChild(script);
            return script;
        } else {
            setTimeout(function() {
                require(src);
            }, 10);
        }
    };
})();
