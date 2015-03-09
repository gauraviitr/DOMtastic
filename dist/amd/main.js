define(["exports", "module", "./util", "./array", "./dom/attr", "./dom/class", "./dom/contains", "./css", "./dom/data", "./dom", "./dom/extra", "./event", "./dom/html", "./noconflict", "./event/ready", "./selector", "./selector/extra", "./event/trigger", "./type"], function (exports, module, _util, _array, _domAttr, _domClass, _domContains, _css, _domData, _dom, _domExtra, _event, _domHtml, _noconflict, _eventReady, _selector, _selectorExtra, _eventTrigger, _type) {
    "use strict";

    var extend = _util.extend;


    var api = {},
        $ = {};

    var array = _array;
    var attr = _domAttr;
    var class_ = _domClass;
    var contains = _domContains;
    var css = _css;
    var data = _domData;
    var dom = _dom;
    var dom_extra = _domExtra;
    var event = _event;
    var html = _domHtml;
    var noconflict = _noconflict;
    var ready = _eventReady;
    var selector = _selector;
    var selector_extra = _selectorExtra;
    var trigger = _eventTrigger;
    var type = _type;


    if (typeof selector !== "undefined") {
        $ = selector.$;
        $.matches = selector.matches;
        api.find = selector.find;
        api.closest = selector.closest;
    }

    extend($, contains, noconflict, type);
    extend(api, array, attr, class_, css, data, dom, dom_extra, event, html, ready, selector_extra, trigger);

    $.fn = api;

    $.version = "0.9.3";

    $.extend = extend;

    module.exports = $;
});