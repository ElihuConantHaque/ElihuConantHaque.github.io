// Appointy Widget - Formatted Version
(function(modules) {
    var installedModules = {};
    
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
        }
        Object.defineProperty(exports, "__esModule", { value: true });
    };
    __webpack_require__.t = function(value, mode) {
        if (mode & 1) value = __webpack_require__(value);
        if (mode & 8) return value;
        if ((mode & 4) && typeof value === "object" && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", { enumerable: true, value: value });
        if (mode & 2 && typeof value != "string") {
            for (var key in value) {
                __webpack_require__.d(ns, key, function(key) {
                    return value[key];
                }.bind(null, key));
            }
        }
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ?
            function getDefault() { return module["default"]; } :
            function getModuleExports() { return module; };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    
    return __webpack_require__(__webpack_require__.s = 5);
})([
    // Module 0: Style loader
    function(module, exports, __webpack_require__) {
        var list = __webpack_require__(1);
        if (typeof list === "string") {
            list = [[module.i, list, ""]];
        }
        var options = {
            hmr: true,
            transform: undefined,
            insertInto: undefined
        };
        __webpack_require__(3)(list, options);
        if (list.locals) {
            module.exports = list.locals;
        }
    },
    
    // Module 1: CSS content
    function(module, exports, __webpack_require__) {
        var cssWithMappingToString = __webpack_require__(2);
        var list = cssWithMappingToString(false);
        list.push([module.i, 
            '.app-widget-btn {\n' +
            '  all: unset;\n' +
            '  position: fixed;\n' +
            '  right: 0;\n' +
            '  top: 40%;\n' +
            '  padding: 12px 9px;\n' +
            '  font-size: 20px;\n' +
            '  user-select: none;\n' +
            '  color: #fff;\n' +
            '  background-color: #448aff;\n' +
            '  font-family: Arial, Helvetica, sans-serif;\n' +
            '  border: 0;\n' +
            '  transition: all 0.5s cubic-bezier(1, -1, 0, 2);\n' +
            '  transform: translateY(110%);\n' +
            '  transform-origin: 90% 40%;\n' +
            '  border-radius: 2px 2px 0 0;\n' +
            '  cursor: pointer;\n' +
            '  overflow: hidden;\n' +
            '  z-index: 111111111;\n' +
            '  writing-mode: vertical-rl;\n' +
            '}\n' +
            '\n' +
            '.app-widget-btn:hover {\n' +
            '  background-color: #3d7ce6;\n' +
            '}\n' +
            '\n' +
            '.app-widget-btn:active {\n' +
            '  background-color: #3061b3;\n' +
            '}\n' +
            '\n' +
            '.app-widget-btn.in {\n' +
            '  transform: translateY(0);\n' +
            '}\n' +
            '\n' +
            '.app-widget-modal {\n' +
            '  will-change: transform, opacity;\n' +
            '  align-items: center;\n' +
            '  justify-content: center;\n' +
            '  position: fixed;\n' +
            '  top: 0;\n' +
            '  left: 0;\n' +
            '  right: 0;\n' +
            '  bottom: 0;\n' +
            '  overflow-y: auto;\n' +
            '  overflow-x: hidden;\n' +
            '  z-index: 111111112;\n' +
            '  font-family: Arial, Helvetica, sans-serif;\n' +
            '  display: none;\n' +
            '  opacity: 0;\n' +
            '  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n' +
            '  background-color: rgba(0, 0, 0, 0.5);\n' +
            '}\n' +
            '\n' +
            '.app-widget-modal.show {\n' +
            '  display: flex;\n' +
            '}\n' +
            '\n' +
            '.app-widget-modal.show.in {\n' +
            '  opacity: 1;\n' +
            '}\n' +
            '\n' +
            '.app-widget-modal__dialog {\n' +
            '  padding: 24px;\n' +
            '  font-family: Arial, Helvetica, sans-serif;\n' +
            '  height: 555px;\n' +
            '  width: 760px;\n' +
            '  box-sizing: border-box;\n' +
            '}\n' +
            '\n' +
            '.app-widget-modal__content {\n' +
            '  will-change: transform, opacity;\n' +
            '  position: relative;\n' +
            '  opacity: 1;\n' +
            '  display: flex;\n' +
            '  flex-direction: column;\n' +
            '  font-size: 16px;\n' +
            '  font-weight: 400;\n' +
            '  height: 100%;\n' +
            '  width: 100%;\n' +
            '  z-index: 1;\n' +
            '  background: #fff;\n' +
            '  border-radius: 2px;\n' +
            '  box-sizing: border-box;\n' +
            '  font-family: Arial, Helvetica, sans-serif;\n' +
            '  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n' +
            '  transform: scale(0.4);\n' +
            '  display: flex;\n' +
            '  justify-content: center;\n' +
            '  align-items: center;\n' +
            '}\n' +
            '\n' +
            '.app-widget-modal.show.in .app-widget-modal__content {\n' +
            '  transform: scale(1);\n' +
            '}\n' +
            '\n' +
            '.app-widget-close {\n' +
            '  position: absolute;\n' +
            '  right: -16px;\n' +
            '  top: -16px;\n' +
            '  width: 32px;\n' +
            '  height: 32px;\n' +
            '  opacity: 0.8;\n' +
            '  background-color: #fff;\n' +
            '  border-radius: 50%;\n' +
            '  z-index: 10;\n' +
            '  font-family: Arial, Helvetica, sans-serif;\n' +
            '  border: 1px solid rgba(0, 0, 0, 0.2);\n' +
            '  cursor: pointer;\n' +
            '}\n' +
            '\n' +
            '.app-widget-close:hover {\n' +
            '  opacity: 1;\n' +
            '}\n' +
            '\n' +
            '.app-widget-close:before,\n' +
            '.app-widget-close:after {\n' +
            '  position: absolute;\n' +
            '  left: 15px;\n' +
            '  top: 6px;\n' +
            '  content: " ";\n' +
            '  height: 20px;\n' +
            '  width: 2px;\n' +
            '  background-color: #424242;\n' +
            '}\n' +
            '\n' +
            '.app-widget-close:before {\n' +
            '  transform: rotate(45deg);\n' +
            '}\n' +
            '\n' +
            '.app-widget-close:after {\n' +
            '  transform: rotate(-45deg);\n' +
            '}\n' +
            '\n' +
            '.app-widget-branding {\n' +
            '  font-family: Arial, Helvetica, sans-serif;\n' +
            '  position: absolute;\n' +
            '  bottom: -20px;\n' +
            '  left: 50%;\n' +
            '  transform: translateX(-50%);\n' +
            '  font-size: 14px;\n' +
            '  color: rgba(255, 255, 255, 0.7);\n' +
            '}\n' +
            '\n' +
            '.app-widget-branding a {\n' +
            '  color: white;\n' +
            '  text-decoration: none;\n' +
            '}\n' +
            '\n' +
            '.app-widget-loader {\n' +
            '  position: absolute;\n' +
            '  left: 0;\n' +
            '  top: 0;\n' +
            '  bottom: 0;\n' +
            '  right: 0;\n' +
            '  display: flex;\n' +
            '  justify-content: center;\n' +
            '  font-family: Arial, Helvetica, sans-serif;\n' +
            '  align-items: center;\n' +
            '  background-color: rgba(255, 255, 255, 0.7);\n' +
            '}\n' +
            '\n' +
            '.app-widget-loader-spinner {\n' +
            '  font-size: 10px;\n' +
            '  position: relative;\n' +
            '  text-indent: -9999em;\n' +
            '  border-top: 4px solid rgba(68, 138, 255, 0.2);\n' +
            '  border-right: 4px solid rgba(68, 138, 255, 0.2);\n' +
            '  border-bottom: 4px solid rgba(68, 138, 255, 0.2);\n' +
            '  border-left: 4px solid #448aff;\n' +
            '  transform: translateZ(0);\n' +
            '  animation: load8 1.1s infinite linear;\n' +
            '  border-radius: 50%;\n' +
            '  width: 80px;\n' +
            '  height: 80px;\n' +
            '}\n' +
            '\n' +
            '@keyframes load8 {\n' +
            '  0% {\n' +
            '    transform: rotate(0deg);\n' +
            '  }\n' +
            '  100% {\n' +
            '    transform: rotate(360deg);\n' +
            '  }\n' +
            '}\n' +
            '\n' +
            '.app-widget-modal__content.app-loaded .app-widget-loader {\n' +
            '  display: none;\n' +
            '}\n' +
            '\n' +
            '.app-widget-modal__content iframe {\n' +
            '  width: 100%;\n' +
            '  height: 100%;\n' +
            '}\n', 
            ""
        ]);
        module.exports = list;
    },
    
    // Module 2: CSS with mapping to string
    function(module, exports) {
        "use strict";
        module.exports = function(list) {
            var lastIdentifiers = new Set();
            return function(update) {
                var identifiers = [];
                var count = 0;
                for (var i = 0; i < update.length; i++) {
                    var item = update[i];
                    var id = item[0];
                    var count = item[1];
                    var index = item[2];
                    var index2 = item[3];
                    var block = item[4];
                    if (block) {
                        lastIdentifiers.add(id);
                        identifiers.push([id, count, index, index2, block]);
                    } else if (lastIdentifiers.has(id)) {
                        lastIdentifiers.delete(id);
                    }
                }
                return identifiers;
            };
        };
    },
    
    // Module 3: Style loader implementation
    function(module, exports, __webpack_require__) {
        var stylesInDom = {};
        var isOldIE = (function() {
            var memo;
            return function() {
                if (typeof memo === "undefined") {
                    memo = Boolean(window && document && document.all && !window.atob);
                }
                return memo;
            };
        })();
        
        var getTarget = (function() {
            var memo = {};
            return function getTarget(selector, base) {
                if (typeof selector === "function") {
                    return selector();
                }
                if (typeof memo[selector] === "undefined") {
                    var styleTarget = getElement(selector, base);
                    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                        try {
                            styleTarget = styleTarget.contentDocument.head;
                        } catch (e) {
                            styleTarget = null;
                        }
                    }
                    memo[selector] = styleTarget;
                }
                return memo[selector];
            };
        })();
        
        var singleton = null;
        var singletonCounter = 0;
        var stylesInsertedAtTop = [];
        
        var fixUrls = __webpack_require__(4);
        
        function addStyleToDom(styles, options) {
            for (var i = 0; i < styles.length; i++) {
                var item = styles[i];
                var domStyle = stylesInDom[item.id];
                if (domStyle) {
                    domStyle.refs++;
                    for (var j = 0; j < domStyle.parts.length; j++) {
                        domStyle.parts[j](item.parts[j]);
                    }
                    for (; j < item.parts.length; j++) {
                        domStyle.parts.push(addStyle(item.parts[j], options));
                    }
                } else {
                    var parts = [];
                    for (var j = 0; j < item.parts.length; j++) {
                        parts.push(addStyle(item.parts[j], options));
                    }
                    stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
                }
            }
        }
        
        function listToStyles(list, options) {
            var styles = [];
            var newStyles = {};
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                var id = options.base ? item[0] + options.base : item[0];
                var css = item[1];
                var media = item[2];
                var sourceMap = item[3];
                var part = { css: css, media: media, sourceMap: sourceMap };
                if (!newStyles[id]) {
                    styles.push(newStyles[id] = { id: id, parts: [part] });
                } else {
                    newStyles[id].parts.push(part);
                }
            }
            return styles;
        }
        
        function insertStyleElement(options, style) {
            var target = getTarget(options.insertInto);
            if (!target) {
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            }
            var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];
            if (options.insertAt === "top") {
                if (!lastStyleElementInsertedAtTop) {
                    target.insertBefore(style, target.firstChild);
                } else if (lastStyleElementInsertedAtTop.nextSibling) {
                    target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
                } else {
                    target.appendChild(style);
                }
                stylesInsertedAtTop.push(style);
            } else if (options.insertAt === "bottom") {
                target.appendChild(style);
            } else {
                throw new Error("Invalid value for parameter 'insertAt' ('options.insertAt') found. Must be 'top', 'bottom', or Object. (https://github.com/webpack-contrib/style-loader#insertat)");
            }
        }
        
        function removeStyleElement(style) {
            if (style.parentNode === null) return false;
            style.parentNode.removeChild(style);
            var idx = stylesInsertedAtTop.indexOf(style);
            if (idx >= 0) {
                stylesInsertedAtTop.splice(idx, 1);
            }
        }
        
        function createStyleElement(options) {
            var style = document.createElement("style");
            if (typeof options.attrs.type === "undefined") {
                options.attrs.type = "text/css";
            }
            if (typeof options.attrs.nonce === "undefined") {
                var nonce = (function() {
                    return __webpack_require__.nc;
                })();
                if (nonce) {
                    options.attrs.nonce = nonce;
                }
            }
            addAttrs(style, options.attrs);
            insertStyleElement(options, style);
            return style;
        }
        
        function addAttrs(el, attrs) {
            Object.keys(attrs).forEach(function(key) {
                el.setAttribute(key, attrs[key]);
            });
        }
        
        function addStyle(obj, options) {
            var style, update, remove;
            if (options.transform && obj.css) {
                var result = typeof options.transform === "function" ? options.transform(obj.css) : options.transform.default(obj.css);
                if (result) {
                    obj.css = result;
                } else {
                    return function() {};
                }
            }
            if (options.singleton) {
                var styleIndex = singletonCounter++;
                style = singleton || (singleton = createStyleElement(options));
                update = applyToSingletonTag.bind(null, style, styleIndex, false);
                remove = applyToSingletonTag.bind(null, style, styleIndex, true);
            } else if (obj.sourceMap && typeof URL === "function" && typeof URL.createObjectURL === "function" && typeof URL.revokeObjectURL === "function" && typeof Blob === "function" && typeof btoa === "function") {
                style = createLinkElement(options);
                update = updateLink.bind(null, style, options);
                remove = function() {
                    removeStyleElement(style);
                    if (style.href) URL.revokeObjectURL(style.href);
                };
            } else {
                style = createStyleElement(options);
                update = applyToTag.bind(null, style);
                remove = function() {
                    removeStyleElement(style);
                };
            }
            update(obj);
            return function updateStyle(newObj) {
                if (newObj) {
                    if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
                    update(obj = newObj);
                } else {
                    remove();
                }
            };
        }
        
        var replaceText = (function() {
            var textStore = [];
            return function(index, replacement) {
                textStore[index] = replacement;
                return textStore.filter(Boolean).join("\n");
            };
        })();
        
        function applyToSingletonTag(style, index, remove, obj) {
            var css = remove ? "" : obj.css;
            if (style.styleSheet) {
                style.styleSheet.cssText = replaceText(index, css);
            } else {
                var cssNode = document.createTextNode(css);
                var childNodes = style.childNodes;
                if (childNodes[index]) style.removeChild(childNodes[index]);
                if (childNodes.length) {
                    style.insertBefore(cssNode, childNodes[index]);
                } else {
                    style.appendChild(cssNode);
                }
            }
        }
        
        function applyToTag(style, obj) {
            var css = obj.css;
            var media = obj.media;
            if (media) {
                style.setAttribute("media", media);
            }
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                while (style.firstChild) {
                    style.removeChild(style.firstChild);
                }
                style.appendChild(document.createTextNode(css));
            }
        }
        
        function updateLink(link, options, obj) {
            var css = obj.css;
            var sourceMap = obj.sourceMap;
            var update = typeof options.convertToAbsoluteUrls === "undefined" && sourceMap;
            if (options.convertToAbsoluteUrls || update) {
                css = fixUrls(css);
            }
            if (sourceMap) {
                css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
            }
            var blob = new Blob([css], { type: "text/css" });
            var oldSrc = link.href;
            link.href = URL.createObjectURL(blob);
            if (oldSrc) URL.revokeObjectURL(oldSrc);
        }
        
        module.exports = function(list, options) {
            if (typeof DEBUG !== "undefined" && DEBUG && typeof document !== "object") {
                throw new Error("The style-loader cannot be used in a non-browser environment");
            }
            options = options || {};
            options.attrs = typeof options.attrs === "object" ? options.attrs : {};
            if (typeof options.singleton === "undefined") options.singleton = isOldIE();
            if (typeof options.insertInto === "undefined") options.insertInto = "head";
            if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
            var styles = listToStyles(list, options);
            addStyleToDom(styles, options);
            return function update(newList) {
                var mayRemove = [];
                for (var i = 0; i < styles.length; i++) {
                    var item = styles[i];
                    var domStyle = stylesInDom[item.id];
                    domStyle.refs--;
                    mayRemove.push(domStyle);
                }
                if (newList) {
                    addStyleToDom(listToStyles(newList, options), options);
                }
                for (var i = 0; i < mayRemove.length; i++) {
                    var domStyle = mayRemove[i];
                    if (domStyle.refs === 0) {
                        for (var j = 0; j < domStyle.parts.length; j++) {
                            domStyle.parts[j]();
                        }
                        delete stylesInDom[domStyle.id];
                    }
                }
            };
        };
    },
    
    // Module 4: Fix URLs
    function(module, exports) {
        module.exports = function(css) {
            var location = typeof window !== "undefined" && window.location;
            if (!location) {
                throw new Error("fixUrls requires window.location");
            }
            if (!css || typeof css !== "string") {
                return css;
            }
            var baseUrl = location.protocol + "//" + location.host;
            var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");
            return css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, relUrl) {
                var quoteEnd = relUrl.indexOf('"');
                var singleQuoteEnd = relUrl.indexOf("'");
                if (quoteEnd !== -1 || singleQuoteEnd !== -1) {
                    if (quoteEnd === -1) {
                        quoteEnd = relUrl.length;
                    }
                    if (singleQuoteEnd === -1) {
                        singleQuoteEnd = relUrl.length;
                    }
                    var quote = relUrl.charAt(Math.min(quoteEnd, singleQuoteEnd)) === '"' ? '"' : "'";
                    relUrl = relUrl.substr(1, Math.min(quoteEnd, singleQuoteEnd) - 1);
                }
                if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(relUrl)) {
                    return fullMatch;
                }
                if (relUrl.indexOf("//") === 0) {
                    return "url(" + relUrl + ")";
                } else if (relUrl.charAt(0) === "/") {
                    return "url(" + baseUrl + relUrl + ")";
                } else {
                    return "url(" + currentDir + relUrl.replace(/^\.\//, "") + ")";
                }
            });
        };
    },
    
    // Module 5: Main Appointy Widget
    function(module, exports, __webpack_require__) {
        "use strict";
        __webpack_require__.r(exports);
        __webpack_require__(0);
        
        function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i] != null ? arguments[i] : {};
                var ownKeys = Object.keys(source);
                if (typeof Object.getOwnPropertySymbols === "function") {
                    ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                    }));
                }
                ownKeys.forEach(function(key) {
                    _defineProperty(target, key, source[key]);
                });
            }
            return target;
        }
        
        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        }
        
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
        }
        
        var AppointyWidget = function() {
            function AppointyWidget(config) {
                _classCallCheck(this, AppointyWidget);
                this._config = _objectSpread({}, config);
                this._button = null;
                this._modal = null;
                this._modalDialog = null;
                this._modalContent = null;
                this._modalClose = null;
                this._iframe = null;
            }
            
            _createClass(AppointyWidget, [{
                key: "initialize",
                value: function initialize() {
                    this.renderButton();
                    this.renderModal();
                }
            }, {
                key: "renderButton",
                value: function renderButton() {
                    var _this = this;
                    var buttonText = "Schedule an appointment";
                    var buttonClass = "app-widget-btn";
                    
                    if (this._config.buttonImg && this._config.buttonImg !== "") {
                        buttonText = '<img src="' + this._config.buttonImg + '" alt="" />';
                        buttonClass = "app-widget-btn-img";
                    }
                    
                    var button = document.createElement("div");
                    button.setAttribute("id", "app-widget-btn");
                    button.classList.add(buttonClass);
                    button.classList.add("app-widget-btn--" + this._config.theme);
                    
                    if (this._config.buttonAlign && this._config.buttonAlign.toLowerCase() === "left") {
                        button.classList.add("leftAlign");
                    }
                    
                    if (this._config.buttonPosition) {
                        if (this._config.buttonPosition.toLowerCase() === "top") {
                            button.classList.add("posTop");
                        } else if (this._config.buttonPosition.toLowerCase() === "bottom") {
                            button.classList.add("posBottom");
                        } else if (!isNaN(this._config.buttonPosition)) {
                            button.style.top = this._config.buttonPosition + "%";
                        }
                    }
                    
                    button.innerHTML = buttonText;
                    document.body.appendChild(button);
                    
                    setTimeout(function() {
                        _this._button = document.getElementById("app-widget-btn");
                        if (_this._config.button) {
                            for (var key in _this._config.button) {
                                _this._iframe.style[key] = _this._config.button[key];
                            }
                        }
                        setTimeout(function() {
                            _this._button.classList.add("in");
                        }, 1500);
                        _this._button.addEventListener("click", function() {
                            _this.showModal();
                        });
                    }, 10);
                }
            }, {
                key: "renderModal",
                value: function renderModal() {
                    var modal = document.createElement("div");
                    modal.setAttribute("id", "app-widget-modal");
                    modal.classList.add("app-widget-modal");
                    modal.classList.add("app-widget-modal--" + this._config.theme);
                    modal.innerHTML = '<div class="app-widget-modal__dialog"><div class="app-widget-modal__content"></div></div>';
                    document.body.appendChild(modal);
                    
                    this._modal = document.getElementById("app-widget-modal");
                    this._modalDialog = this._modal.querySelector(".app-widget-modal__dialog");
                    this._modalContent = this._modal.querySelector(".app-widget-modal__content");
                    
                    if (this._config.modal) {
                        for (var key in this._config.modal) {
                            this._modalDialog.style[key] = this._config.modal[key];
                        }
                    }
                    
                    this._modalContent.innerHTML = '<a id="app-widget-modal-close" href="javascript:void(0)" class="app-widget-close"></a>';
                    this._modalContent.innerHTML += '<div class="app-widget-loader"><div class="app-widget-loader-spinner">Loading...</div></div>';
                    this._modalContent.innerHTML += '<div class="app-widget-branding">Powered by <a href="https://appointy.com" target="_blank">Appointy</a></div>';
                    
                    if (this._config.development) {
                        this._modalContent.innerHTML += '<div class="app-widget-devlopment">Development Mode</div>';
                    }
                }
            }, {
                key: "showModal",
                value: function showModal() {
                    var _this2 = this;
                    if (!this._iframe) {
                        this._modalContent.innerHTML += this.getIframeLink(this._config);
                        this._iframe = this._modalContent.querySelector("iframe");
                        this._iframe.addEventListener("load", function() {
                            _this2._modalContent.classList.add("app-loaded");
                        });
                    }
                    
                    this._modalClose = this._modalContent.querySelector("#app-widget-modal-close");
                    this._modal.classList.add("show");
                    
                    setTimeout(function() {
                        _this2._modal.classList.add("in");
                        _this2._modalClose.addEventListener("click", function() {
                            _this2.hideModal();
                        });
                        _this2._iframe.addEventListener("load", function() {
                            _this2._modalContent.classList.add("app-loaded");
                        });
                    }, 100);
                }
            }, {
                key: "hideModal",
                value: function hideModal() {
                    var _this3 = this;
                    this._modal.classList.remove("in");
                    setTimeout(function() {
                        _this3._modal.classList.remove("show");
                    }, 300);
                }
            }, {
                key: "getIframeLink",
                value: function getIframeLink(config) {
                    switch (config.version) {
                        case "legacy":
                            if (config.development) {
                                return '<iframe src="https://' + config.business + ".appointy.com:5353/" + config.defaultTab + "/?isGadget=1&" + config.extraParameter + '" scrolling="auto" frameborder="0" allowtransparency="true"></iframe>';
                            } else {
                                return '<iframe src="https://' + config.business + ".appointy.com/" + config.defaultTab + "/?isGadget=1&" + config.extraParameter + '" scrolling="auto" frameborder="0" allowtransparency="true"></iframe>';
                            }
                        default:
                            if (!config.defaultTab) {
                                config.defaultTab = "bookings";
                            }
                            if (config.extraParameter) {
                                config.extraParameter = "&" + config.extraParameter;
                            } else {
                                config.extraParameter = "";
                            }
                            
                            if (config.development) {
                                return '<iframe src="https://bookingportal.appointy.com/' + config.business + "/" + config.defaultTab + "/?isGadget=1" + config.extraParameter + '" scrolling="auto" frameborder="0" allowtransparency="true"></iframe>';
                            } else if (config.AppointyLanguage) {
                                return '<iframe src="https://booking.appointy.com/' + config.AppointyLanguage + "/" + config.business + "/" + config.defaultTab + "/?isGadget=1" + config.extraParameter + '" scrolling="auto" frameborder="0" allowtransparency="true"></iframe>';
                            } else {
                                return '<iframe src="https://booking.appointy.com/' + config.business + "/" + config.defaultTab + "/?isGadget=1" + config.extraParameter + '" scrolling="auto" frameborder="0" allowtransparency="true"></iframe>';
                            }
                    }
                }
            }]);
            
            return AppointyWidget;
        }();
        
        function _objectSpread$1(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i] != null ? arguments[i] : {};
                var ownKeys = Object.keys(source);
                if (typeof Object.getOwnPropertySymbols === "function") {
                    ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                    }));
                }
                ownKeys.forEach(function(key) {
                    _defineProperty$1(target, key, source[key]);
                });
            }
            return target;
        }
        
        function _defineProperty$1(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        }
        
        // Initialize Appointy Widget
        (function() {
            if (typeof window.Appointy === "undefined") {
                window.Appointy = {};
            }
            
            window.Appointy.config = _objectSpread$1(_objectSpread$1({}, window.Appointy.config), {}, {
                theme: "material"
            });
            
            if (!window.Appointy.config.business) {
                throw "Business is required for Appointy widget to initialize!";
            }
            
            var widget = new AppointyWidget(window.Appointy.config);
            window.Appointy = _objectSpread$1(_objectSpread$1({}, window.Appointy), {}, {
                show: widget.showModal,
                hide: widget.hideModal
            });
            
            widget.initialize();
        })();
    }
]); 