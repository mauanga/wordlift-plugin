!function(n){var e={};function i(t){if(e[t])return e[t].exports;var b=e[t]={i:t,l:!1,exports:{}};return n[t].call(b.exports,b,b.exports,i),b.l=!0,b.exports}i.m=n,i.c=e,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var b in n)i.d(t,b,function(e){return n[e]}.bind(null,b));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="",i(i.s=146)}({141:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);\n/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_faq_hook_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(147);\n/**\n * TinyMceToolbarHandler handles the toolbar button.\n * @since 3.26.0\n * @author Naveen Muthusamy <naveen@wordlift.io>\n */\n\n/**\n * Internal dependencies.\n */\n\n\nconst TINYMCE_TOOLBAR_BUTTON_NAME = "wl-faq-toolbar-button";\n\nclass TinymceToolbarHandler {\n  /**\n   * Construct the TinymceToolbarHandler\n   * @param editor {tinymce.Editor} instance.\n   */\n  constructor(editor) {\n    this.editor = editor;\n  }\n\n  addButtonToToolBar() {\n    const editor = this.editor;\n    editor.addButton(TINYMCE_TOOLBAR_BUTTON_NAME, {\n      title: "Add question or answer",\n      text: "Add Question",\n      onclick: function () {\n        Object(backbone__WEBPACK_IMPORTED_MODULE_0__["trigger"])(_constants_faq_hook_constants__WEBPACK_IMPORTED_MODULE_1__[/* FAQ_EVENT_HANDLER_SELECTION_CHANGED */ "a"], editor.selection.getContent({\n          format: "text"\n        }));\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__["a"] = (TinymceToolbarHandler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFxL2hvb2tzL3RpbnltY2UvdGlueW1jZS10b29sYmFyLWhhbmRsZXIuanM/M2JiMiJdLCJuYW1lcyI6WyJUSU5ZTUNFX1RPT0xCQVJfQlVUVE9OX05BTUUiLCJUaW55bWNlVG9vbGJhckhhbmRsZXIiLCJjb25zdHJ1Y3RvciIsImVkaXRvciIsImFkZEJ1dHRvblRvVG9vbEJhciIsImFkZEJ1dHRvbiIsInRpdGxlIiwidGV4dCIsIm9uY2xpY2siLCJ0cmlnZ2VyIiwiRkFRX0VWRU5UX0hBTkRMRVJfU0VMRUNUSU9OX0NIQU5HRUQiLCJzZWxlY3Rpb24iLCJnZXRDb250ZW50IiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBS0E7OztBQUdBO0FBQ0E7QUFFQSxNQUFNQSwyQkFBMkIsR0FBRyx1QkFBcEM7O0FBRUEsTUFBTUMscUJBQU4sQ0FBNEI7QUFDMUI7Ozs7QUFJQUMsYUFBVyxDQUFDQyxNQUFELEVBQVM7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7O0FBQ0RDLG9CQUFrQixHQUFHO0FBQ25CLFVBQU1ELE1BQU0sR0FBRyxLQUFLQSxNQUFwQjtBQUNBQSxVQUFNLENBQUNFLFNBQVAsQ0FBaUJMLDJCQUFqQixFQUE4QztBQUM1Q00sV0FBSyxFQUFFLHdCQURxQztBQUU1Q0MsVUFBSSxFQUFFLGNBRnNDO0FBRzVDQyxhQUFPLEVBQUUsWUFBVztBQUNsQkMsZ0VBQU8sQ0FBQ0MseUdBQUQsRUFBc0NQLE1BQU0sQ0FBQ1EsU0FBUCxDQUFpQkMsVUFBakIsQ0FBNEI7QUFBRUMsZ0JBQU0sRUFBRTtBQUFWLFNBQTVCLENBQXRDLENBQVA7QUFDRDtBQUwyQyxLQUE5QztBQU9EOztBQWpCeUI7O0FBb0JiWiw4RUFBZiIsImZpbGUiOiIxNDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRpbnlNY2VUb29sYmFySGFuZGxlciBoYW5kbGVzIHRoZSB0b29sYmFyIGJ1dHRvbi5cbiAqIEBzaW5jZSAzLjI2LjBcbiAqIEBhdXRob3IgTmF2ZWVuIE11dGh1c2FteSA8bmF2ZWVuQHdvcmRsaWZ0LmlvPlxuICovXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llcy5cbiAqL1xuaW1wb3J0IHsgdHJpZ2dlciB9IGZyb20gXCJiYWNrYm9uZVwiO1xuaW1wb3J0IHsgRkFRX0VWRU5UX0hBTkRMRVJfU0VMRUNUSU9OX0NIQU5HRUQgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2ZhcS1ob29rLWNvbnN0YW50c1wiO1xuXG5jb25zdCBUSU5ZTUNFX1RPT0xCQVJfQlVUVE9OX05BTUUgPSBcIndsLWZhcS10b29sYmFyLWJ1dHRvblwiO1xuXG5jbGFzcyBUaW55bWNlVG9vbGJhckhhbmRsZXIge1xuICAvKipcbiAgICogQ29uc3RydWN0IHRoZSBUaW55bWNlVG9vbGJhckhhbmRsZXJcbiAgICogQHBhcmFtIGVkaXRvciB7dGlueW1jZS5FZGl0b3J9IGluc3RhbmNlLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZWRpdG9yKSB7XG4gICAgdGhpcy5lZGl0b3IgPSBlZGl0b3I7XG4gIH1cbiAgYWRkQnV0dG9uVG9Ub29sQmFyKCkge1xuICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9yO1xuICAgIGVkaXRvci5hZGRCdXR0b24oVElOWU1DRV9UT09MQkFSX0JVVFRPTl9OQU1FLCB7XG4gICAgICB0aXRsZTogXCJBZGQgcXVlc3Rpb24gb3IgYW5zd2VyXCIsXG4gICAgICB0ZXh0OiBcIkFkZCBRdWVzdGlvblwiLFxuICAgICAgb25jbGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRyaWdnZXIoRkFRX0VWRU5UX0hBTkRMRVJfU0VMRUNUSU9OX0NIQU5HRUQsIGVkaXRvci5zZWxlY3Rpb24uZ2V0Q29udGVudCh7IGZvcm1hdDogXCJ0ZXh0XCIgfSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbnltY2VUb29sYmFySGFuZGxlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///141\n')},146:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _tinymce_toolbar_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);\n/**\n * This file is automatically loaded by the tinymce via registering in backend.\n * It emits events captured by the faq event handler class.\n * @since 3.26.0\n * @author Naveen Muthusamy <naveen@wordlift.io>\n */\n\n/**\n * Internal dependencies.\n */\n\nconst FAQ_TINYMCE_PLUGIN_NAME = "wl_faq_tinymce";\nconst tinymce = global["tinymce"];\ntinymce.PluginManager.add(FAQ_TINYMCE_PLUGIN_NAME, function (editor) {\n  const toolBarHandler = new _tinymce_toolbar_handler__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](editor);\n  toolBarHandler.addButtonToToolBar();\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFxL2hvb2tzL3RpbnltY2UvdGlueW1jZS1mYXEtcGx1Z2luLmpzPzQ1YmEiXSwibmFtZXMiOlsiRkFRX1RJTllNQ0VfUExVR0lOX05BTUUiLCJ0aW55bWNlIiwiZ2xvYmFsIiwiUGx1Z2luTWFuYWdlciIsImFkZCIsImVkaXRvciIsInRvb2xCYXJIYW5kbGVyIiwiVGlueW1jZVRvb2xiYXJIYW5kbGVyIiwiYWRkQnV0dG9uVG9Ub29sQmFyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFPQTs7O0FBR0E7QUFFQSxNQUFNQSx1QkFBdUIsR0FBRyxnQkFBaEM7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQyxTQUFELENBQXRCO0FBQ0FELE9BQU8sQ0FBQ0UsYUFBUixDQUFzQkMsR0FBdEIsQ0FBMEJKLHVCQUExQixFQUFtRCxVQUFVSyxNQUFWLEVBQWtCO0FBQ25FLFFBQU1DLGNBQWMsR0FBRyxJQUFJQyx3RUFBSixDQUEwQkYsTUFBMUIsQ0FBdkI7QUFDQUMsZ0JBQWMsQ0FBQ0Usa0JBQWY7QUFDRCxDQUhELEUiLCJmaWxlIjoiMTQ2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGZpbGUgaXMgYXV0b21hdGljYWxseSBsb2FkZWQgYnkgdGhlIHRpbnltY2UgdmlhIHJlZ2lzdGVyaW5nIGluIGJhY2tlbmQuXG4gKiBJdCBlbWl0cyBldmVudHMgY2FwdHVyZWQgYnkgdGhlIGZhcSBldmVudCBoYW5kbGVyIGNsYXNzLlxuICogQHNpbmNlIDMuMjYuMFxuICogQGF1dGhvciBOYXZlZW4gTXV0aHVzYW15IDxuYXZlZW5Ad29yZGxpZnQuaW8+XG4gKi9cblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXMuXG4gKi9cbmltcG9ydCBUaW55bWNlVG9vbGJhckhhbmRsZXIgZnJvbSBcIi4vdGlueW1jZS10b29sYmFyLWhhbmRsZXJcIjtcblxuY29uc3QgRkFRX1RJTllNQ0VfUExVR0lOX05BTUUgPSBcIndsX2ZhcV90aW55bWNlXCI7XG5jb25zdCB0aW55bWNlID0gZ2xvYmFsW1widGlueW1jZVwiXTtcbnRpbnltY2UuUGx1Z2luTWFuYWdlci5hZGQoRkFRX1RJTllNQ0VfUExVR0lOX05BTUUsIGZ1bmN0aW9uIChlZGl0b3IpIHtcbiAgY29uc3QgdG9vbEJhckhhbmRsZXIgPSBuZXcgVGlueW1jZVRvb2xiYXJIYW5kbGVyKGVkaXRvcik7XG4gIHRvb2xCYXJIYW5kbGVyLmFkZEJ1dHRvblRvVG9vbEJhcigpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///146\n')},147:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* unused harmony export FAQ_REQUEST_ADD_NEW_QUESTION */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FAQ_EVENT_HANDLER_SELECTION_CHANGED; });\n/**\n * Constants for the FAQ hooks.\n *\n * @since 3.26.0\n * @author Naveen Muthusamy <naveen@wordlift.io>\n */\n\n/**\n * Event name when the text selection changed in any of text editor, emitted\n * from the hooks.\n * @type {string}\n */\nconst FAQ_REQUEST_ADD_NEW_QUESTION = "FAQ_REQUEST_ADD_NEW_QUESTION";\n/**\n * Event emitted by hook when the text selection is changed.\n * @type {string}\n */\n\nconst FAQ_EVENT_HANDLER_SELECTION_CHANGED = "FAQ_EVENT_HANDLER_SELECTION_CHANGED";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFxL2NvbnN0YW50cy9mYXEtaG9vay1jb25zdGFudHMuanM/MmQ5OCJdLCJuYW1lcyI6WyJGQVFfUkVRVUVTVF9BRERfTkVXX1FVRVNUSU9OIiwiRkFRX0VWRU5UX0hBTkRMRVJfU0VMRUNUSU9OX0NIQU5HRUQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQU9BOzs7OztBQUtPLE1BQU1BLDRCQUE0QixHQUFHLDhCQUFyQztBQUVQOzs7OztBQUlPLE1BQU1DLG1DQUFtQyxHQUFHLHFDQUE1QyIsImZpbGUiOiIxNDcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbnN0YW50cyBmb3IgdGhlIEZBUSBob29rcy5cbiAqXG4gKiBAc2luY2UgMy4yNi4wXG4gKiBAYXV0aG9yIE5hdmVlbiBNdXRodXNhbXkgPG5hdmVlbkB3b3JkbGlmdC5pbz5cbiAqL1xuXG4vKipcbiAqIEV2ZW50IG5hbWUgd2hlbiB0aGUgdGV4dCBzZWxlY3Rpb24gY2hhbmdlZCBpbiBhbnkgb2YgdGV4dCBlZGl0b3IsIGVtaXR0ZWRcbiAqIGZyb20gdGhlIGhvb2tzLlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEZBUV9SRVFVRVNUX0FERF9ORVdfUVVFU1RJT04gPSBcIkZBUV9SRVFVRVNUX0FERF9ORVdfUVVFU1RJT05cIjtcblxuLyoqXG4gKiBFdmVudCBlbWl0dGVkIGJ5IGhvb2sgd2hlbiB0aGUgdGV4dCBzZWxlY3Rpb24gaXMgY2hhbmdlZC5cbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBGQVFfRVZFTlRfSEFORExFUl9TRUxFQ1RJT05fQ0hBTkdFRCA9IFwiRkFRX0VWRU5UX0hBTkRMRVJfU0VMRUNUSU9OX0NIQU5HRURcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///147\n')},23:function(module,exports){eval('var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function("return this")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === "object") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it\'s\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzP2NkMDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6IjIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///23\n')},58:function(module,exports){eval("module.exports = Backbone;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJCYWNrYm9uZVwiPzViYzAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiNTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IEJhY2tib25lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///58\n")}});