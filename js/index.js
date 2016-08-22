define(function(require, exports) {
    var module = {};
    var dom = {};

    var domInit = function () {
    };

    var eventBind = function () {
    };

    var enter = function () {
        var $index = $('#index');
        var ua = window.navigator.userAgent;
        var isMobile = ua.match(/(Android|iPhone|iPad)/);
        if (isMobile) {
            $index.css('font-family', '"Helvetica"');
            $index.css('font-family', '"黑体-简"');
        } else {
            $index.css('font-family', '"Helvetica", "黑体-简"');
        }
        var width = document.body.clientWidth;
        $('html').css('font-size', width * 12 / 320 + 'px');
    };

    var init = function () {
        enter();
    };

    init();
});
