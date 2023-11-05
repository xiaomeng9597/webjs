// ==UserScript==
// @name      Eruda网页调试
// @namespace      https://qsth520.gitee.io/webjs/
// @description      一个网页调试插件，已固定图标至右下角
// @version      0.2
// @author      thxg
// @run-at      document-end
// @match      *
// @include      *
// @downloadURL      https://qsth520.gitee.io/webjs/js/eruda.code2.js
// @homepageURL      https://qsth520.gitee.io/webjs/
// @require      https://qsth520.gitee.io/webjs/js/eruda/3.0.1/eruda.modify.min.js
// @grant      none
// ==/UserScript==

(function() {
    if(eruda) {
        eruda.init();
    }
})();